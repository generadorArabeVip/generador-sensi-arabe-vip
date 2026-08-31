const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function subirDatos() {
  await db.collection("huds").doc("famosos").set({
    items: {
      lgang: { nombre: "🇲🇽👹👺 L Gang", foto: "Hud_lgang_famoso.jpg", logo: "Logo_L_gang.png" },
      sadx: { nombre: "🇧🇷 Sadx", foto: "Hud_sadx_famoso.jpg", logo: "Logo_sadx.jpg" },
      white444: { nombre: "🇲🇦 White 444", foto: "Hud_white_444_famoso.jpg", logo: "Logo_white_444.png" },
      tirpaszofc: { nombre: "👹 Tirpaszofc", foto: "Hud_Tirpaszofc_famoso.jpg" },
      dudu: { nombre: "👺 Dudu FF", foto: "Hud_dudu.png" },
      irving: { nombre: "Irving Sa", foto: "Hud_irving_Sa_famoso.jpg" }
    }
  });

  await db.collection("huds").doc("2dedos").set({
    items: {
      v1: { nombre: "Versión 1", foto: "Hud_2_dedos.jpg" },
      v2: { nombre: "Versión 2", foto: "Hud_2_dedos_v1.jpg" }
    }
  });

  await db.collection("huds").doc("4dedos_hibrido").set({
    items: { v1: { nombre: "Versión 1", foto: "Hud_4_dedos_hibrido.jpg" } }
  });

  await db.collection("combos").doc("br").set({
    items: { escudo: { nombre: "Escudo", foto: "Combo_br_escudo.jpg" } }
  });
  await db.collection("combos").doc("decla").set({
    items: {
      danovel: { nombre: "Daño y Velocidad", foto: "Combo_decla_daño_y_velocidad.jpg" },
      rapido: { nombre: "Rápido", foto: "Combo_decla_rapido.jpg" }
    }
  });
  await db.collection("combos").doc("competitivos").set({
    items: { v1: { nombre: "Competitivo", foto: "Combo_competitivo.jpg" } }
  });
  await db.collection("combos").doc("famosos").set({
    items: { gamezking: { nombre: "Gamez King", foto: "Combo_gamez_king_famoso.jpg" } }
  });

  await db.collection("clanes").doc("lista").set({
    items: { nvx: { nombre: "NVX Esports", idClan: "62114559", logo: "Logo_nvx_esports.png" } }
  });

  console.log("Todos los datos se subieron correctamente.");
  process.exit(0);
}

subirDatos();
