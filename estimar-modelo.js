/* =========================================================
   ESTIMAR-MODELO.JS
   Archivo APARTE: no modifica calculo-boton.js ni subir-datos.js.

   Cuando el usuario escribe un modelo que NO existe en Firebase,
   este archivo crea sus datos base (los mismos campos que usa
   subir-datos.js) a partir de los modelos más parecidos de la
   MISMA marca. Con esos datos, calculo-boton.js funciona igual
   que con cualquier otro modelo (offsets, DPI, botón, regenerar).

   - El mismo nombre de modelo siempre da los mismos datos base
     (no cambia cada vez que lo piden).
   - No usa IA ni internet: es instantáneo.
   ========================================================= */

(function () {
  const STATS_EST = ["general", "puntorojo", "x2", "x4", "francotirador", "camara360"];
  const VECINOS = 5;     // cuántos modelos parecidos se usan
  const VARIACION = 3;   // variación fija por modelo: -3 a +3

  function normalizar(texto) {
    return String(texto)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function crearId(nombre) {
    return normalizar(nombre).replace(/ /g, "_");
  }

  // Número estable a partir de un texto (para variación que no cambia)
  function hash(texto) {
    let h = 0;
    for (let i = 0; i < texto.length; i++) {
      h = (h * 31 + texto.charCodeAt(i)) >>> 0;
    }
    return h;
  }

  // "Galaxy A54" -> ["galaxy", "a", "54"]
  function partes(nombre) {
    return normalizar(nombre).match(/[a-z]+|\d+/g) || [];
  }

  function primerNumero(p) {
    const n = p.find((x) => /^\d+$/.test(x));
    return n === undefined ? null : parseInt(n, 10);
  }

  // Más puntos = más parecido (misma serie/letras y número cercano)
  function similitud(pa, pb) {
    const letrasB = new Set(pb.filter((x) => /^[a-z]+$/.test(x)));
    let puntos = 0;
    pa.filter((x) => /^[a-z]+$/.test(x)).forEach((x) => {
      if (letrasB.has(x)) puntos += 5;
    });
    const na = primerNumero(pa);
    const nb = primerNumero(pb);
    if (na !== null && nb !== null) puntos -= Math.min(Math.abs(na - nb), 50) * 0.3;
    return puntos;
  }

  function mediana(arr) {
    const a = [...arr].sort((x, y) => x - y);
    const m = Math.floor(a.length / 2);
    return a.length % 2 ? a[m] : Math.round((a[m - 1] + a[m]) / 2);
  }

  function limitar(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function valores(vecinos, lista, stat) {
    let v = vecinos.map((x) => x[stat]).filter((x) => typeof x === "number");
    if (!v.length) v = lista.map((x) => x[stat]).filter((x) => typeof x === "number");
    return v;
  }

  /*
    nombreEscrito: lo que escribió el usuario (ej. "Galaxy A99 Pro")
    modelosMarca:  el objeto "modelos" del documento de esa marca en
                   Firebase (id -> datos), el mismo que ya cargas.
    Devuelve { id, datos } o null si la marca no tiene modelos.
  */
  function crearModelo(nombreEscrito, modelosMarca) {
    const nombre = String(nombreEscrito).trim().replace(/\s+/g, " ");
    if (!nombre) return null;

    const id = crearId(nombre);
    const pn = partes(nombre);
    const lista = Object.values(modelosMarca || {}).filter(
      (m) => m && m.nombre && typeof m.general === "number"
    );
    if (!lista.length) return null;

    const vecinos = lista
      .map((m) => ({ m, s: similitud(pn, partes(m.nombre)) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, VECINOS)
      .map((x) => x.m);

    const datos = { nombre, generado: true };

    STATS_EST.forEach((stat) => {
      const base = mediana(valores(vecinos, lista, stat));
      const variacion = (hash(id + stat) % (VARIACION * 2 + 1)) - VARIACION;
      datos[stat] = limitar(base + variacion, 1, 200);
    });

    // DPI: solo si los vecinos lo tienen (iPhone = sin DPI)
    const conDpi = vecinos.filter((v) => v.dpi_min > 0 && v.dpi_max > 0);
    if (conDpi.length) {
      const desp = (hash(id + "dpi") % 11) - 5;
      let min = mediana(conDpi.map((v) => v.dpi_min)) + desp;
      let max = mediana(conDpi.map((v) => v.dpi_max)) + desp;
      if (max <= min) max = min + 40;
      datos.dpi_min = min;
      datos.dpi_max = max;
    } else {
      datos.dpi_min = 0;
      datos.dpi_max = 0;
    }

    return { id, datos };
  }

  // Guarda el modelo generado en Firebase, solo si aún no existe.
  // db: instancia de Firestore ya inicializada en index.html.
  // marcaId: id de la marca (doc en "sensibilidades").
  // fns: { doc, getDoc, setDoc } importados de firebase-firestore.js
  async function guardarSiNoExiste(db, marcaId, id, datos, fns) {
    const { doc, getDoc, setDoc } = fns;
    const ref = doc(db, "sensibilidades", marcaId);
    const snap = await getDoc(ref);
    const yaExiste = snap.exists() && snap.data().modelos && snap.data().modelos[id];
    if (yaExiste) return false;
    await setDoc(ref, { modelos: { [id]: datos } }, { merge: true });
    return true;
  }

  window.EstimarModelo = { crearModelo, crearId, guardarSiNoExiste };
})();

/* =========================================================
   USO (en el index.html, cuando el usuario elige "Usar: ...")

   const r = window.EstimarModelo.crearModelo(textoEscrito, modelosDeLaMarca);
   // r.id    -> id para guardar en Firebase (ej. "galaxy_a99_pro")
   // r.datos -> mismos campos que subir-datos.js (+ generado: true)

   1) Guardar r.datos en Firebase: sensibilidades/{marca}, campo
      modelos.{r.id}
   2) Llamar a window.SensiApp.generarSensibilidad(r.datos, ...)
      igual que con un modelo normal.
   ========================================================= */
