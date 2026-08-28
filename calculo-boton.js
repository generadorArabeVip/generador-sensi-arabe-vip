/* =========================================================
   CALCULO-BOTON.JS
   Todo el "motor" nuevo vive aquí. El index.html (cerebro)
   NO se toca: solo llama a window.SensiApp.

   LOGICA:
   - Cada stat de sensibilidad (general, puntorojo, x2, x4,
     francotirador, camara360) tiene su propio offset aleatorio
     independiente -> valor = base - offset.
     * Android (modelos con DPI): offset entre 2 y 6.
     * iPhone (modelos sin DPI): offset entre 1 y 20 (rango mas
       amplio porque no hay DPI que acompañe el resultado).
   - Se saca el promedio de esos 6 offsets = "factor" de que tan
     alta salio la tirada (offset bajo => factor alto => sensibilidad
     cerca de su techo). El factor se normaliza 0..1 usando el mismo
     rango de offset que se usó para generarlo.
   - Ese factor se usa para ubicar el DPI dentro de su rango
     (dpi_min a dpi_max, solo si el modelo tiene DPI) y tambien para
     ubicar el % del boton de disparo dentro de 25%-55%. Asi los
     resultados quedan coherentes entre si en cada tirada.
   ========================================================= */

const OFFSET_MIN_ANDROID = 1;
const OFFSET_MAX_ANDROID = 10;
const OFFSET_MIN_IOS = 1;
const OFFSET_MAX_IOS = 20;

const PORCENTAJE_MIN = 25;
const PORCENTAJE_MAX = 55;

const STATS = ["general", "puntorojo", "x2", "x4", "francotirador", "camara360"];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function offsetAFactor(offsetPromedio, offsetMin, offsetMax) {
  return (offsetMax - offsetPromedio) / (offsetMax - offsetMin);
}

function factorADPI(factor, dpiMin, dpiMax) {
  return Math.round(dpiMin + factor * (dpiMax - dpiMin));
}

function factorAPorcentaje(factor) {
  return Math.round(PORCENTAJE_MIN + factor * (PORCENTAJE_MAX - PORCENTAJE_MIN));
}

// Algunas marcas (ej. Apple) no usan DPI. Se considera "sin DPI" si
// los campos no existen o son 0.
function tieneDPIValido(datosModelo) {
  return (
    typeof datosModelo.dpi_min === "number" &&
    typeof datosModelo.dpi_max === "number" &&
    datosModelo.dpi_min > 0 &&
    datosModelo.dpi_max > 0
  );
}

// Ajustes internos fijos de iOS, por modelo (no aleatorios, a diferencia
// de la sensibilidad). Reemplazan a la tabla genérica de Android cuando
// la marca es "apple".
const AJUSTES_IOS = {
  iphone_17_pro_max:  { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 1.00, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_17_pro:      { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.95, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_17_air:      { velocidadCursor: 115, modo: "Modo Individual",toque: 0.15, refinamiento: 0.90, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_17:          { velocidadCursor: 115, modo: "Modo Individual",toque: 0.15, refinamiento: 0.90, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_17e:         { velocidadCursor: 95,  modo: "Modo Sencillo",  toque: 0.20, refinamiento: 0.85, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
  iphone_16_pro_max:  { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 1.00, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_16_pro:      { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.95, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_16_plus:     { velocidadCursor: 110, modo: "Modo Individual",toque: 0.15, refinamiento: 0.90, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_16:          { velocidadCursor: 110, modo: "Modo Individual",toque: 0.15, refinamiento: 0.88, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_15_pro_max:  { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.98, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_15_pro:      { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.94, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_15_plus:     { velocidadCursor: 105, modo: "Modo Individual",toque: 0.15, refinamiento: 0.88, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_15:          { velocidadCursor: 105, modo: "Modo Individual",toque: 0.15, refinamiento: 0.85, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_14_pro_max:  { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.98, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_14_pro:      { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.94, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_14_plus:     { velocidadCursor: 105, modo: "Modo Individual",toque: 0.15, refinamiento: 0.88, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_14:          { velocidadCursor: 105, modo: "Modo Individual",toque: 0.15, refinamiento: 0.85, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_13_pro_max:  { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.96, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_13_pro:      { velocidadCursor: 120, modo: "Modo Preciso",   toque: 0.10, refinamiento: 0.92, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_13:          { velocidadCursor: 100, modo: "Modo Individual",toque: 0.15, refinamiento: 0.82, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_13_mini:     { velocidadCursor: 95,  modo: "Modo Individual",toque: 0.15, refinamiento: 0.78, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_12_pro_max:  { velocidadCursor: 115, modo: "Modo Preciso",   toque: 0.15, refinamiento: 0.94, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_12_pro:      { velocidadCursor: 115, modo: "Modo Preciso",   toque: 0.15, refinamiento: 0.90, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_12:          { velocidadCursor: 100, modo: "Modo Individual",toque: 0.20, refinamiento: 0.80, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
  iphone_12_mini:     { velocidadCursor: 95,  modo: "Modo Individual",toque: 0.20, refinamiento: 0.75, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
  iphone_11_pro_max:  { velocidadCursor: 115, modo: "Modo Preciso",   toque: 0.15, refinamiento: 0.92, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_11_pro:      { velocidadCursor: 115, modo: "Modo Preciso",   toque: 0.15, refinamiento: 0.88, controlBoton: "Lanzamiento corto", controlBotonDuracion: 0.05 },
  iphone_11:          { velocidadCursor: 100, modo: "Modo Individual",toque: 0.20, refinamiento: 0.78, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
  iphone_xs_max:      { velocidadCursor: 110, modo: "Modo Preciso",   toque: 0.20, refinamiento: 0.86, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_xs:          { velocidadCursor: 110, modo: "Modo Preciso",   toque: 0.20, refinamiento: 0.84, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_xr:          { velocidadCursor: 95,  modo: "Modo Individual",toque: 0.25, refinamiento: 0.76, controlBoton: "Estándar",          controlBotonDuracion: 0.20 },
  iphone_x:           { velocidadCursor: 105, modo: "Modo Preciso",   toque: 0.20, refinamiento: 0.82, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
  iphone_8_plus:      { velocidadCursor: 100, modo: "Modo Sencillo",  toque: 0.20, refinamiento: 0.75, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
  iphone_8:           { velocidadCursor: 90,  modo: "Modo Sencillo",  toque: 0.20, refinamiento: 0.72, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
  iphone_7_plus:      { velocidadCursor: 95,  modo: "Modo Sencillo",  toque: 0.25, refinamiento: 0.70, controlBoton: "Estándar",          controlBotonDuracion: 0.20 },
  iphone_7:           { velocidadCursor: 85,  modo: "Modo Sencillo",  toque: 0.25, refinamiento: 0.68, controlBoton: "Estándar",          controlBotonDuracion: 0.20 },
  iphone_6_plus:      { velocidadCursor: 80,  modo: "Modo Sencillo",  toque: 0.30, refinamiento: 0.65, controlBoton: "Estándar",          controlBotonDuracion: 0.25 },
  iphone_se_2022:     { velocidadCursor: 105, modo: "Modo Individual",toque: 0.15, refinamiento: 0.85, controlBoton: "Estándar",          controlBotonDuracion: 0.10 },
  iphone_se_2020:     { velocidadCursor: 100, modo: "Modo Sencillo",  toque: 0.20, refinamiento: 0.80, controlBoton: "Estándar",          controlBotonDuracion: 0.15 },
};

function correrLoader(loaderEl, onDone, duracionAprox = 1300) {
  loaderEl.classList.remove("oculto");
  const textoEl = loaderEl.querySelector(".loader-texto");
  const barraEl = loaderEl.querySelector(".loader-barra-fill");

  let progreso = 0;
  const pasoMs = 90;

  const interval = setInterval(() => {
    progreso += randomInt(6, 16);
    if (progreso >= 100) progreso = 100;

    if (textoEl) textoEl.textContent = `Generando... ${progreso}%`;
    if (barraEl) barraEl.style.width = progreso + "%";

    if (progreso >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loaderEl.classList.add("oculto");
        if (barraEl) barraEl.style.width = "0%";
        onDone();
      }, 250);
    }
  }, pasoMs);
}

window.SensiApp = {
  factorActual: null,

  generarSensibilidad(datosModelo, els, loaderEl, onDone) {
    correrLoader(loaderEl, () => {
      const tieneDPI = tieneDPIValido(datosModelo);

      // Android usa un rango de offset chico (2-6). iPhone usa uno
      // más amplio (1-20) ya que no hay DPI que acompañe el resultado.
      const offsetMin = tieneDPI ? OFFSET_MIN_ANDROID : OFFSET_MIN_IOS;
      const offsetMax = tieneDPI ? OFFSET_MAX_ANDROID : OFFSET_MAX_IOS;

      const offsets = {};
      let sumaOffsets = 0;

      STATS.forEach((stat) => {
        const offset = randomInt(offsetMin, offsetMax);
        offsets[stat] = offset;
        sumaOffsets += offset;

        const valor = datosModelo[stat] - offset;
        if (els[stat]) els[stat].textContent = valor;
      });

      const offsetPromedio = sumaOffsets / STATS.length;
      const factor = offsetAFactor(offsetPromedio, offsetMin, offsetMax);

      // El factor (basado en la sensibilidad general/rojo/etc.) siempre
      // se guarda: el botón de disparo se calcula a partir de él sin
      // importar si el modelo tiene DPI o no (ej. iPhone).
      this.factorActual = factor;

      if (tieneDPI) {
        const dpi = factorADPI(factor, datosModelo.dpi_min, datosModelo.dpi_max);
        els.dpiValor.textContent = dpi;
        els.dpiRango.textContent = `Rango: ${datosModelo.dpi_min} a ${datosModelo.dpi_max}`;
      }

      // Se le avisa al llamador (index.html) si este modelo tiene DPI,
      // para que muestre u oculte solo la card de DPI (el botón de
      // disparo se muestra siempre, tenga o no DPI el modelo).
      if (onDone) onDone(tieneDPI);
    });
  },

  generarBotonDisparo(els, loaderEl, onDone) {
    if (this.factorActual == null) return;

    correrLoader(loaderEl, () => {
      const porcentaje = factorAPorcentaje(this.factorActual);
      els.boton.textContent = porcentaje + "%";
      if (onDone) onDone();
    });
  },

  // config = {
  //   esApple: boolean,
  //   modeloId: string,          (solo se usa si esApple)
  //   elsIOS: { velocidad, toque, refinamiento, controlBoton } (elementos DOM, solo si esApple)
  //   seccionesAOcultar: [elementos a ocultar: resultados, botones],
  //   seccionAjustes: contenedor general (ya existente),
  //   bloqueAndroid: elemento con la tabla fija de Android,
  //   bloqueIOS: elemento con la tabla de iOS,
  //   loaderEl, onDone
  // }
  generarAjustesInternos(config, loaderEl, onDone) {
    correrLoader(loaderEl, () => {
      config.seccionesAOcultar.forEach((el) => el.classList.add("oculto"));

      if (config.esApple) {
        const datos = AJUSTES_IOS[config.modeloId];
        if (datos && config.elsIOS) {
          config.elsIOS.velocidad.textContent = `${datos.velocidadCursor} (${datos.modo})`;
          config.elsIOS.toque.textContent = `${datos.toque} segundos`;
          config.elsIOS.refinamiento.textContent = datos.refinamiento.toFixed(2);
          config.elsIOS.controlBoton.textContent = `${datos.controlBoton} (${datos.controlBotonDuracion}s)`;
        }
        config.bloqueAndroid.classList.add("oculto");
        config.bloqueIOS.classList.remove("oculto");
      } else {
        config.bloqueIOS.classList.add("oculto");
        config.bloqueAndroid.classList.remove("oculto");
      }

      config.seccionAjustes.classList.remove("oculto");
      if (onDone) onDone();
    }, 1300);
  },
};
