const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function actualizar() {
  await db.collection("combos").doc("br").update({
    "items.full_dano": { nombre: "Full Daño", foto: "Full_daño.png" },
    "items.full_dano_v2": { nombre: "Full Daño v2", foto: "Full_daño_v2.png" },
    "items.full_dano_v3": { nombre: "Full Daño v3", foto: "Full_daño_v3.png" },
    "items.curacion": { nombre: "Curación", foto: "Curacion.png" },
    "items.escudo_v2": { nombre: "Escudo v2", foto: "Escudo_v2.png" },
    "items.escudo_v3": { nombre: "Escudo v3", foto: "Escuado_v3.png" }
  });
  console.log("Combos de BR actualizados correctamente.");
  process.exit(0);
}

actualizar();
