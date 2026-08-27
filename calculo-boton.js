function calcularBotonDisparo(general) {
  const min = 165, max = 200;
  const porcentajeMin = 25, porcentajeMax = 55;
  const valor = porcentajeMin + ((general - min) / (max - min)) * (porcentajeMax - porcentajeMin);
  return Math.round(valor);
}
