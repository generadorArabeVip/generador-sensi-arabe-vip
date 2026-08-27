const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const datos = {
  samsung: {
    modelos: {
      galaxy_s24_ultra: { nombre: "Galaxy S24 Ultra", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 600, dpi_max: 680 },
      galaxy_s24_plus: { nombre: "Galaxy S24+", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 580, dpi_max: 650 },
      galaxy_s24: { nombre: "Galaxy S24", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      galaxy_s23_ultra: { nombre: "Galaxy S23 Ultra", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 580, dpi_max: 650 },
      galaxy_s23_plus: { nombre: "Galaxy S23+", general: 197, puntorojo: 193, x2: 189, x4: 183, francotirador: 177, camara360: 189, dpi_min: 570, dpi_max: 630 },
      galaxy_s23: { nombre: "Galaxy S23", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      galaxy_s22_ultra: { nombre: "Galaxy S22 Ultra", general: 195, puntorojo: 191, x2: 186, x4: 180, francotirador: 175, camara360: 186, dpi_min: 550, dpi_max: 610 },
      galaxy_s22_plus: { nombre: "Galaxy S22+", general: 194, puntorojo: 190, x2: 184, x4: 178, francotirador: 174, camara360: 184, dpi_min: 550, dpi_max: 610 },
      galaxy_s22: { nombre: "Galaxy S22", general: 194, puntorojo: 190, x2: 184, x4: 178, francotirador: 174, camara360: 184, dpi_min: 550, dpi_max: 610 },
      galaxy_s21_ultra: { nombre: "Galaxy S21 Ultra", general: 193, puntorojo: 189, x2: 183, x4: 177, francotirador: 172, camara360: 183, dpi_min: 540, dpi_max: 600 },
      galaxy_s21_plus: { nombre: "Galaxy S21+", general: 192, puntorojo: 188, x2: 182, x4: 176, francotirador: 170, camara360: 182, dpi_min: 540, dpi_max: 600 },
      galaxy_s21: { nombre: "Galaxy S21", general: 192, puntorojo: 188, x2: 182, x4: 176, francotirador: 170, camara360: 182, dpi_min: 540, dpi_max: 600 },
      galaxy_s20_ultra: { nombre: "Galaxy S20 Ultra", general: 191, puntorojo: 187, x2: 181, x4: 175, francotirador: 169, camara360: 181, dpi_min: 530, dpi_max: 590 },
      galaxy_s20_plus: { nombre: "Galaxy S20+", general: 190, puntorojo: 185, x2: 180, x4: 174, francotirador: 168, camara360: 180, dpi_min: 520, dpi_max: 580 },
      galaxy_s20: { nombre: "Galaxy S20", general: 190, puntorojo: 185, x2: 180, x4: 174, francotirador: 168, camara360: 180, dpi_min: 520, dpi_max: 580 },
      galaxy_s10_plus: { nombre: "Galaxy S10+", general: 186, puntorojo: 182, x2: 176, x4: 170, francotirador: 164, camara360: 176, dpi_min: 510, dpi_max: 570 },
      galaxy_s10: { nombre: "Galaxy S10", general: 184, puntorojo: 180, x2: 174, x4: 168, francotirador: 162, camara360: 174, dpi_min: 500, dpi_max: 560 },
      galaxy_s10e: { nombre: "Galaxy S10e", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 160, camara360: 172, dpi_min: 490, dpi_max: 550 },
      galaxy_s9_plus: { nombre: "Galaxy S9+", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 158, camara360: 170, dpi_min: 480, dpi_max: 540 },
      galaxy_s9: { nombre: "Galaxy S9", general: 178, puntorojo: 174, x2: 168, x4: 162, francotirador: 156, camara360: 168, dpi_min: 470, dpi_max: 530 },
      galaxy_s8_plus: { nombre: "Galaxy S8+", general: 176, puntorojo: 172, x2: 166, x4: 160, francotirador: 154, camara360: 166, dpi_min: 460, dpi_max: 520 },
      galaxy_s8: { nombre: "Galaxy S8", general: 174, puntorojo: 170, x2: 164, x4: 158, francotirador: 152, camara360: 164, dpi_min: 450, dpi_max: 510 },
      galaxy_note_20_ultra: { nombre: "Galaxy Note 20 Ultra", general: 193, puntorojo: 189, x2: 183, x4: 177, francotirador: 172, camara360: 183, dpi_min: 540, dpi_max: 600 },
      galaxy_note_20: { nombre: "Galaxy Note 20", general: 191, puntorojo: 187, x2: 181, x4: 175, francotirador: 169, camara360: 181, dpi_min: 530, dpi_max: 590 },
      galaxy_note_10_plus: { nombre: "Galaxy Note 10+", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 166, camara360: 178, dpi_min: 520, dpi_max: 580 },
      galaxy_note_10: { nombre: "Galaxy Note 10", general: 186, puntorojo: 182, x2: 176, x4: 170, francotirador: 164, camara360: 176, dpi_min: 510, dpi_max: 570 },
      galaxy_note_9: { nombre: "Galaxy Note 9", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 160, camara360: 172, dpi_min: 490, dpi_max: 550 },
      galaxy_note_8: { nombre: "Galaxy Note 8", general: 178, puntorojo: 174, x2: 168, x4: 162, francotirador: 156, camara360: 168, dpi_min: 470, dpi_max: 530 },
      galaxy_z_fold_5: { nombre: "Galaxy Z Fold 5", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 580, dpi_max: 650 },
      galaxy_z_fold_4: { nombre: "Galaxy Z Fold 4", general: 195, puntorojo: 191, x2: 186, x4: 180, francotirador: 175, camara360: 186, dpi_min: 550, dpi_max: 610 },
      galaxy_z_flip_5: { nombre: "Galaxy Z Flip 5", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      galaxy_z_flip_4: { nombre: "Galaxy Z Flip 4", general: 193, puntorojo: 189, x2: 183, x4: 177, francotirador: 172, camara360: 183, dpi_min: 540, dpi_max: 600 },
      galaxy_a55: { nombre: "Galaxy A55", general: 190, puntorojo: 185, x2: 180, x4: 174, francotirador: 168, camara360: 180, dpi_min: 530, dpi_max: 590 },
      galaxy_a54: { nombre: "Galaxy A54", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 520, dpi_max: 580 },
      galaxy_a53: { nombre: "Galaxy A53", general: 186, puntorojo: 181, x2: 175, x4: 169, francotirador: 165, camara360: 175, dpi_min: 510, dpi_max: 570 },
      galaxy_a52: { nombre: "Galaxy A52", general: 184, puntorojo: 180, x2: 174, x4: 168, francotirador: 164, camara360: 174, dpi_min: 500, dpi_max: 560 },
      galaxy_a35: { nombre: "Galaxy A35", general: 187, puntorojo: 182, x2: 176, x4: 170, francotirador: 166, camara360: 176, dpi_min: 510, dpi_max: 570 },
      galaxy_a34: { nombre: "Galaxy A34", general: 185, puntorojo: 180, x2: 174, x4: 168, francotirador: 164, camara360: 174, dpi_min: 500, dpi_max: 560 },
      galaxy_a32: { nombre: "Galaxy A32", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 160, camara360: 170, dpi_min: 480, dpi_max: 540 },
      galaxy_a15: { nombre: "Galaxy A15", general: 177, puntorojo: 172, x2: 166, x4: 160, francotirador: 156, camara360: 166, dpi_min: 460, dpi_max: 520 },
      galaxy_a14: { nombre: "Galaxy A14", general: 175, puntorojo: 170, x2: 165, x4: 158, francotirador: 154, camara360: 165, dpi_min: 450, dpi_max: 510 },
      galaxy_a13: { nombre: "Galaxy A13", general: 173, puntorojo: 168, x2: 163, x4: 156, francotirador: 152, camara360: 163, dpi_min: 440, dpi_max: 500 },
      galaxy_a10s: { nombre: "Galaxy A10s", general: 168, puntorojo: 163, x2: 158, x4: 152, francotirador: 148, camara360: 158, dpi_min: 420, dpi_max: 480 },
      galaxy_m54: { nombre: "Galaxy M54", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 520, dpi_max: 580 },
      galaxy_m34: { nombre: "Galaxy M34", general: 183, puntorojo: 178, x2: 172, x4: 166, francotirador: 162, camara360: 172, dpi_min: 490, dpi_max: 550 },
      galaxy_j7_prime: { nombre: "Galaxy J7 Prime", general: 165, puntorojo: 160, x2: 155, x4: 148, francotirador: 144, camara360: 155, dpi_min: 400, dpi_max: 450 }
    }
  },
  xiaomi: {
    modelos: {
      xiaomi_14_ultra: { nombre: "Xiaomi 14 Ultra", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 600, dpi_max: 680 },
      xiaomi_14_pro: { nombre: "Xiaomi 14 Pro", general: 199, puntorojo: 196, x2: 192, x4: 186, francotirador: 180, camara360: 192, dpi_min: 590, dpi_max: 650 },
      xiaomi_14: { nombre: "Xiaomi 14", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 580, dpi_max: 640 },
      xiaomi_13_pro: { nombre: "Xiaomi 13 Pro", general: 197, puntorojo: 193, x2: 189, x4: 183, francotirador: 177, camara360: 189, dpi_min: 570, dpi_max: 630 },
      xiaomi_13: { nombre: "Xiaomi 13", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      xiaomi_12_pro: { nombre: "Xiaomi 12 Pro", general: 194, puntorojo: 190, x2: 184, x4: 178, francotirador: 174, camara360: 184, dpi_min: 550, dpi_max: 610 },
      xiaomi_12: { nombre: "Xiaomi 12", general: 192, puntorojo: 188, x2: 182, x4: 176, francotirador: 170, camara360: 182, dpi_min: 540, dpi_max: 600 },
      xiaomi_mi_11: { nombre: "Xiaomi Mi 11", general: 190, puntorojo: 185, x2: 180, x4: 174, francotirador: 168, camara360: 180, dpi_min: 520, dpi_max: 580 },
      xiaomi_mi_10: { nombre: "Xiaomi Mi 10", general: 186, puntorojo: 182, x2: 176, x4: 170, francotirador: 164, camara360: 176, dpi_min: 510, dpi_max: 570 },
      xiaomi_mi_9: { nombre: "Xiaomi Mi 9", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 160, camara360: 172, dpi_min: 490, dpi_max: 550 }
    }
  },
  redmi: {
    modelos: {
      redmi_note_13_pro_plus: { nombre: "Redmi Note 13 Pro+", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      redmi_note_13_pro: { nombre: "Redmi Note 13 Pro", general: 195, puntorojo: 190, x2: 185, x4: 178, francotirador: 172, camara360: 185, dpi_min: 550, dpi_max: 610 },
      redmi_note_13: { nombre: "Redmi Note 13", general: 190, puntorojo: 185, x2: 180, x4: 174, francotirador: 168, camara360: 180, dpi_min: 530, dpi_max: 590 },
      redmi_note_12_pro: { nombre: "Redmi Note 12 Pro", general: 192, puntorojo: 188, x2: 182, x4: 176, francotirador: 170, camara360: 182, dpi_min: 540, dpi_max: 600 },
      redmi_note_12: { nombre: "Redmi Note 12", general: 188, puntorojo: 183, x2: 178, x4: 172, francotirador: 166, camara360: 178, dpi_min: 520, dpi_max: 580 },
      redmi_note_11_pro: { nombre: "Redmi Note 11 Pro", general: 186, puntorojo: 182, x2: 176, x4: 170, francotirador: 166, camara360: 176, dpi_min: 510, dpi_max: 570 },
      redmi_note_11: { nombre: "Redmi Note 11", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 160, camara360: 172, dpi_min: 490, dpi_max: 550 },
      redmi_note_10_pro: { nombre: "Redmi Note 10 Pro", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 520, dpi_max: 580 },
      redmi_note_10: { nombre: "Redmi Note 10", general: 185, puntorojo: 180, x2: 175, x4: 168, francotirador: 162, camara360: 175, dpi_min: 500, dpi_max: 560 },
      redmi_note_9: { nombre: "Redmi Note 9", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 158, camara360: 170, dpi_min: 480, dpi_max: 540 },
      redmi_note_8: { nombre: "Redmi Note 8", general: 176, puntorojo: 171, x2: 166, x4: 160, francotirador: 154, camara360: 166, dpi_min: 460, dpi_max: 520 },
      redmi_note_7: { nombre: "Redmi Note 7", general: 172, puntorojo: 167, x2: 162, x4: 156, francotirador: 150, camara360: 162, dpi_min: 440, dpi_max: 500 },
      redmi_13c: { nombre: "Redmi 13C", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 },
      redmi_12: { nombre: "Redmi 12", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 160, camara360: 170, dpi_min: 480, dpi_max: 540 }
}
  },
  poco: {
    modelos: {
      poco_x6_pro: { nombre: "POCO X6 Pro", general: 198, puntorojo: 194, x2: 190, x4: 184, francotirador: 178, camara360: 190, dpi_min: 580, dpi_max: 640 },
      poco_x6: { nombre: "POCO X6", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      poco_x5_pro: { nombre: "POCO X5 Pro", general: 194, puntorojo: 190, x2: 184, x4: 179, francotirador: 174, camara360: 184, dpi_min: 550, dpi_max: 610 },
      poco_f5: { nombre: "POCO F5", general: 199, puntorojo: 196, x2: 192, x4: 186, francotirador: 180, camara360: 192, dpi_min: 590, dpi_max: 650 },
      poco_f4: { nombre: "POCO F4", general: 194, puntorojo: 190, x2: 184, x4: 178, francotirador: 174, camara360: 184, dpi_min: 550, dpi_max: 610 },
      poco_m6_pro: { nombre: "POCO M6 Pro", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 520, dpi_max: 580 }
    }
  },
  oppo: {
    modelos: {
      find_x7_ultra: { nombre: "Find X7 Ultra", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 600, dpi_max: 680 },
      reno_11: { nombre: "Reno 11", general: 192, puntorojo: 188, x2: 182, x4: 176, francotirador: 172, camara360: 182, dpi_min: 540, dpi_max: 600 },
      reno_10: { nombre: "Reno 10", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 530, dpi_max: 590 },
      oppo_a78: { nombre: "Oppo A78", general: 184, puntorojo: 180, x2: 174, x4: 168, francotirador: 164, camara360: 174, dpi_min: 500, dpi_max: 560 },
      oppo_a58: { nombre: "Oppo A58", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 160, camara360: 170, dpi_min: 480, dpi_max: 540 },
      oppo_a17: { nombre: "Oppo A17", general: 174, puntorojo: 169, x2: 164, x4: 158, francotirador: 154, camara360: 164, dpi_min: 440, dpi_max: 500 }
    }
  },
  vivo: {
    modelos: {
      x100_pro: { nombre: "X100 Pro", general: 199, puntorojo: 196, x2: 192, x4: 186, francotirador: 180, camara360: 192, dpi_min: 590, dpi_max: 650 },
      v29: { nombre: "V29", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 530, dpi_max: 590 },
      y36: { nombre: "Y36", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 160, camara360: 172, dpi_min: 490, dpi_max: 550 },
      iqoo_12: { nombre: "iQOO 12", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 600, dpi_max: 680 }
    }
  },
  honor: {
    modelos: {
      magic_6_pro: { nombre: "Magic 6 Pro", general: 199, puntorojo: 196, x2: 192, x4: 186, francotirador: 180, camara360: 192, dpi_min: 590, dpi_max: 650 },
      honor_90: { nombre: "Honor 90", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 530, dpi_max: 590 },
      honor_x8a: { nombre: "Honor X8a", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 160, camara360: 172, dpi_min: 490, dpi_max: 550 }
    }
  },
  motorola: {
    modelos: {
      edge_50_pro: { nombre: "Edge 50 Pro", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      edge_40: { nombre: "Edge 40", general: 194, puntorojo: 190, x2: 184, x4: 178, francotirador: 173, camara360: 184, dpi_min: 550, dpi_max: 610 },
      moto_g84: { nombre: "Moto G84", general: 189, puntorojo: 185, x2: 179, x4: 173, francotirador: 169, camara360: 179, dpi_min: 520, dpi_max: 580 },
      moto_g54: { nombre: "Moto G54", general: 186, puntorojo: 182, x2: 176, x4: 170, francotirador: 166, camara360: 176, dpi_min: 510, dpi_max: 570 },
      moto_g22: { nombre: "Moto G22", general: 172, puntorojo: 167, x2: 162, x4: 156, francotirador: 152, camara360: 162, dpi_min: 440, dpi_max: 500 },
      moto_one_vision: { nombre: "Moto One Vision", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 }
}
  },
  realme: {
    modelos: {
      gt_neo_5: { nombre: "GT Neo 5", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      realme_11_pro: { nombre: "Realme 11 Pro+", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 530, dpi_max: 590 },
      realme_c55: { nombre: "Realme C55", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 },
      realme_10: { nombre: "Realme 10", general: 184, puntorojo: 180, x2: 174, x4: 168, francotirador: 164, camara360: 174, dpi_min: 500, dpi_max: 560 }
    }
  },
  tecno: {
    modelos: {
      camon_20_premier: { nombre: "Camon 20 Premier", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 530, dpi_max: 590 },
      spark_20_pro: { nombre: "Spark 20 Pro", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 162, camara360: 172, dpi_min: 490, dpi_max: 550 },
      pova_5: { nombre: "Pova 5", general: 185, puntorojo: 180, x2: 175, x4: 170, francotirador: 165, camara360: 175, dpi_min: 500, dpi_max: 560 }
    }
  },
  infinix: {
    modelos: {
      zero_30: { nombre: "Zero 30 5G", general: 192, puntorojo: 188, x2: 182, x4: 176, francotirador: 172, camara360: 182, dpi_min: 540, dpi_max: 600 },
      note_30: { nombre: "Note 30 Pro", general: 186, puntorojo: 182, x2: 176, x4: 170, francotirador: 166, camara360: 176, dpi_min: 510, dpi_max: 570 },
      hot_40_pro: { nombre: "Hot 40 Pro", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 160, camara360: 170, dpi_min: 480, dpi_max: 540 }
    }
  },
  huawei: {
    modelos: {
      ura_70_ultra: { nombre: "Pura 70 Ultra", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 580, dpi_max: 640 },
      p60_pro: { nombre: "P60 Pro", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      mate_60_pro: { nombre: "Mate 60 Pro", general: 197, puntorojo: 193, x2: 189, x4: 183, francotirador: 177, camara360: 189, dpi_min: 570, dpi_max: 630 },
      nova_11: { nombre: "Nova 11", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 520, dpi_max: 580 },
      y9_prime_2019: { nombre: "Y9 Prime (2019)", general: 173, puntorojo: 168, x2: 163, x4: 157, francotirador: 153, camara360: 163, dpi_min: 440, dpi_max: 500 }
    }
  },
  lg: {
    modelos: {
      lg_velvet: { nombre: "LG Velvet", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 160, camara360: 170, dpi_min: 480, dpi_max: 540 },
      v60_thinq: { nombre: "V60 ThinQ", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 162, camara360: 172, dpi_min: 490, dpi_max: 550 },
      g8_thinq: { nombre: "G8 ThinQ", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 },
      k61: { nombre: "LG K61", general: 172, puntorojo: 167, x2: 162, x4: 156, francotirador: 152, camara360: 162, dpi_min: 440, dpi_max: 500 }
    }
  },
  oneplus: {
    modelos: {
      oneplus_12: { nombre: "OnePlus 12", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 600, dpi_max: 680 },
      oneplus_11: { nombre: "OnePlus 11", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 560, dpi_max: 620 },
      nord_3: { nombre: "Nord 3", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 520, dpi_max: 580 }
    }
},
  google_pixel: {
    modelos: {
      pixel_8_pro: { nombre: "Pixel 8 Pro", general: 192, puntorojo: 188, x2: 182, x4: 176, francotirador: 172, camara360: 182, dpi_min: 540, dpi_max: 600 },
      pixel_8: { nombre: "Pixel 8", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 520, dpi_max: 580 },
      pixel_7a: { nombre: "Pixel 7a", general: 185, puntorojo: 180, x2: 174, x4: 168, francotirador: 164, camara360: 174, dpi_min: 500, dpi_max: 560 }
    }
  },
  nothing: {
    modelos: {
      phone_2: { nombre: "Phone (2)", general: 187, puntorojo: 183, x2: 177, x4: 171, francotirador: 167, camara360: 177, dpi_min: 510, dpi_max: 570 },
      phone_1: { nombre: "Phone (1)", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 160, camara360: 172, dpi_min: 490, dpi_max: 550 }
    }
  },
  asus: {
    modelos: {
      rog_phone_8_pro: { nombre: "ROG Phone 8 Pro", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 600, dpi_max: 680 },
      rog_phone_7: { nombre: "ROG Phone 7", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 580, dpi_max: 650 },
      zenfone_10: { nombre: "Zenfone 10", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 530, dpi_max: 590 }
    }
  },
  sony: {
    modelos: {
      xperia_1_vi: { nombre: "Xperia 1 VI", general: 195, puntorojo: 191, x2: 186, x4: 180, francotirador: 175, camara360: 186, dpi_min: 550, dpi_max: 610 },
      xperia_5_v: { nombre: "Xperia 5 V", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 530, dpi_max: 590 },
      xperia_10_v: { nombre: "Xperia 10 V", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 }
    }
  },
  zte: {
    modelos: {
      axon_50_ultra: { nombre: "Axon 50 Ultra", general: 189, puntorojo: 185, x2: 179, x4: 173, francotirador: 169, camara360: 179, dpi_min: 520, dpi_max: 580 },
      blade_v50: { nombre: "Blade V50", general: 176, puntorojo: 171, x2: 166, x4: 160, francotirador: 156, camara360: 166, dpi_min: 460, dpi_max: 520 }
    }
  },
  nubia: {
    modelos: {
      redmagic_9_pro: { nombre: "RedMagic 9 Pro", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 600, dpi_max: 680 },
      redmagic_8_pro: { nombre: "RedMagic 8 Pro", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 580, dpi_max: 650 }
    }
  },
  tcl: {
    modelos: {
      tcl_50_pro: { nombre: "TCL 50 Pro", general: 175, puntorojo: 170, x2: 165, x4: 158, francotirador: 154, camara360: 165, dpi_min: 450, dpi_max: 510 },
      tcl_40_se: { nombre: "TCL 40 SE", general: 172, puntorojo: 167, x2: 162, x4: 156, francotirador: 152, camara360: 162, dpi_min: 440, dpi_max: 500 }
    }
  },
  alcatel: {
    modelos: {
      alcatel_3h: { nombre: "Alcatel 3H", general: 168, puntorojo: 163, x2: 158, x4: 152, francotirador: 148, camara360: 158, dpi_min: 420, dpi_max: 480 },
      alcatel_1s: { nombre: "Alcatel 1S", general: 165, puntorojo: 160, x2: 155, x4: 149, francotirador: 145, camara360: 155, dpi_min: 400, dpi_max: 450 }
    }
  },
  blu: {
    modelos: {
      blu_g91_max: { nombre: "BLU G91 Max", general: 174, puntorojo: 169, x2: 164, x4: 158, francotirador: 154, camara360: 164, dpi_min: 440, dpi_max: 500 },
      blu_bold_n2: { nombre: "BLU Bold N2", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 }
    }
  },
  fairphone: {
    modelos: {
      fairphone_5: { nombre: "Fairphone 5", general: 177, puntorojo: 172, x2: 166, x4: 160, francotirador: 156, camara360: 166, dpi_min: 460, dpi_max: 520 }
    }
  },
  ulefone: {
    modelos: {
      armor_24: { nombre: "Armor 24", general: 176, puntorojo: 171, x2: 166, x4: 160, francotirador: 156, camara360: 166, dpi_min: 460, dpi_max: 520 }
    }
  },
  oukitel: {
    modelos: {
      wp30_pro: { nombre: "WP30 Pro", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 }
    }
  },
  blackview: {
    modelos: {
      shark_8: { nombre: "Shark 8", general: 177, puntorojo: 172, x2: 166, x4: 160, francotirador: 156, camara360: 166, dpi_min: 460, dpi_max: 520 }
    }
  },
  doogee: {
    modelos: {
      v30: { nombre: "V30", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 470, dpi_max: 530 }
    }
  },
  hmd_nokia: {
    modelos: {
      nokia_x30: { nombre: "Nokia X30", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 160, camara360: 170, dpi_min: 480, dpi_max: 540 }
    }
},
  apple: {
    modelos: {
      iphone_15_pro_max: { nombre: "iPhone 15 Pro Max", general: 200, puntorojo: 198, x2: 194, x4: 190, francotirador: 185, camara360: 195, dpi_min: 0, dpi_max: 0 },
      iphone_15_pro: { nombre: "iPhone 15 Pro", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 0, dpi_max: 0 },
      iphone_15_plus: { nombre: "iPhone 15 Plus", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 0, dpi_max: 0 },
      iphone_15: { nombre: "iPhone 15", general: 195, puntorojo: 191, x2: 186, x4: 180, francotirador: 175, camara360: 186, dpi_min: 0, dpi_max: 0 },
      iphone_14_pro_max: { nombre: "iPhone 14 Pro Max", general: 198, puntorojo: 195, x2: 190, x4: 185, francotirador: 180, camara360: 190, dpi_min: 0, dpi_max: 0 },
      iphone_14_pro: { nombre: "iPhone 14 Pro", general: 196, puntorojo: 192, x2: 188, x4: 182, francotirador: 178, camara360: 188, dpi_min: 0, dpi_max: 0 },
      iphone_14_plus: { nombre: "iPhone 14 Plus", general: 194, puntorojo: 190, x2: 185, x4: 180, francotirador: 175, camara360: 185, dpi_min: 0, dpi_max: 0 },
      iphone_14: { nombre: "iPhone 14", general: 192, puntorojo: 188, x2: 183, x4: 177, francotirador: 173, camara360: 183, dpi_min: 0, dpi_max: 0 },
      iphone_13_pro_max: { nombre: "iPhone 13 Pro Max", general: 195, puntorojo: 191, x2: 186, x4: 180, francotirador: 175, camara360: 186, dpi_min: 0, dpi_max: 0 },
      iphone_13_pro: { nombre: "iPhone 13 Pro", general: 194, puntorojo: 190, x2: 185, x4: 180, francotirador: 175, camara360: 185, dpi_min: 0, dpi_max: 0 },
      iphone_13: { nombre: "iPhone 13", general: 190, puntorojo: 186, x2: 180, x4: 174, francotirador: 170, camara360: 180, dpi_min: 0, dpi_max: 0 },
      iphone_13_mini: { nombre: "iPhone 13 mini", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 0, dpi_max: 0 },
      iphone_12_pro_max: { nombre: "iPhone 12 Pro Max", general: 192, puntorojo: 188, x2: 182, x4: 178, francotirador: 172, camara360: 182, dpi_min: 0, dpi_max: 0 },
      iphone_12_pro: { nombre: "iPhone 12 Pro", general: 190, puntorojo: 186, x2: 180, x4: 175, francotirador: 170, camara360: 180, dpi_min: 0, dpi_max: 0 },
      iphone_12: { nombre: "iPhone 12", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 0, dpi_max: 0 },
      iphone_12_mini: { nombre: "iPhone 12 mini", general: 185, puntorojo: 180, x2: 174, x4: 168, francotirador: 164, camara360: 174, dpi_min: 0, dpi_max: 0 },
      iphone_11_pro_max: { nombre: "iPhone 11 Pro Max", general: 188, puntorojo: 184, x2: 178, x4: 172, francotirador: 168, camara360: 178, dpi_min: 0, dpi_max: 0 },
      iphone_11_pro: { nombre: "iPhone 11 Pro", general: 186, puntorojo: 182, x2: 176, x4: 170, francotirador: 166, camara360: 176, dpi_min: 0, dpi_max: 0 },
      iphone_11: { nombre: "iPhone 11", general: 184, puntorojo: 180, x2: 174, x4: 168, francotirador: 164, camara360: 174, dpi_min: 0, dpi_max: 0 },
      iphone_xs_max: { nombre: "iPhone XS Max", general: 182, puntorojo: 178, x2: 172, x4: 166, francotirador: 162, camara360: 172, dpi_min: 0, dpi_max: 0 },
      iphone_xs: { nombre: "iPhone XS", general: 180, puntorojo: 175, x2: 170, x4: 164, francotirador: 160, camara360: 170, dpi_min: 0, dpi_max: 0 },
      iphone_xr: { nombre: "iPhone XR", general: 178, puntorojo: 173, x2: 168, x4: 162, francotirador: 158, camara360: 168, dpi_min: 0, dpi_max: 0 },
      iphone_x: { nombre: "iPhone X", general: 176, puntorojo: 171, x2: 166, x4: 160, francotirador: 156, camara360: 166, dpi_min: 0, dpi_max: 0 },
      iphone_8_plus: { nombre: "iPhone 8 Plus", general: 174, puntorojo: 169, x2: 164, x4: 158, francotirador: 154, camara360: 164, dpi_min: 0, dpi_max: 0 },
      iphone_8: { nombre: "iPhone 8", general: 170, puntorojo: 165, x2: 160, x4: 154, francotirador: 150, camara360: 160, dpi_min: 0, dpi_max: 0 },
      iphone_7_plus: { nombre: "iPhone 7 Plus", general: 168, puntorojo: 163, x2: 158, x4: 152, francotirador: 148, camara360: 158, dpi_min: 0, dpi_max: 0 },
      iphone_7: { nombre: "iPhone 7", general: 165, puntorojo: 160, x2: 155, x4: 149, francotirador: 145, camara360: 155, dpi_min: 0, dpi_max: 0 },
      iphone_6_plus: { nombre: "iPhone 6 Plus", general: 162, puntorojo: 157, x2: 152, x4: 146, francotirador: 142, camara360: 152, dpi_min: 0, dpi_max: 0 },
      iphone_se_2022: { nombre: "iPhone SE (2022)", general: 176, puntorojo: 171, x2: 166, x4: 160, francotirador: 156, camara360: 166, dpi_min: 0, dpi_max: 0 },
      iphone_se_2020: { nombre: "iPhone SE (2020)", general: 172, puntorojo: 167, x2: 162, x4: 156, francotirador: 152, camara360: 162, dpi_min: 0, dpi_max: 0 }
    }
  }
};

async function subir() {
  for (const marcaId in datos) {
    await db.collection("sensibilidades").doc(marcaId).set(datos[marcaId]);
    console.log("Subido: " + marcaId);
  }
  console.log("Listo, todas las marcas y modelos fueron subidos correctamente.");
  process.exit(0);
}

subir();
