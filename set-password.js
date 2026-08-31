// Script de un solo uso: guarda/actualiza la contraseña de acceso
// al panel en Firestore (colección "config", documento "acceso").
// Correr con: node set-password.js
// Cada vez que quieras CAMBIAR la contraseña, solo edita el valor
// de abajo y vuelve a correr este mismo script.

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const NUEVA_PASSWORD = "المتهم666";

async function guardarPassword() {
  await db.collection("config").doc("acceso").set({ password: NUEVA_PASSWORD });
  console.log("Contraseña guardada correctamente:", NUEVA_PASSWORD);
  process.exit(0);
}

guardarPassword();
