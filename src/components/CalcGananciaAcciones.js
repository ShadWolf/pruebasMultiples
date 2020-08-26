import React from "react";

const calcularGanancia = (listaValores) => {
  let ganancia = -1;
  let valorPrev = 0;
  let valorCompra = 0;
  let valorVenta = 0;

  listaValores.forEach((valor) => {
    if (valorPrev < valor && valorCompra === 0) {
      valorCompra = valorPrev;
    }
    if (valorPrev < valor && valorCompra !== 0) {
      valorVenta = valor;
    }
    valorPrev = valor;
  });
  if (valorVenta !== 0) {
    ganancia = valorVenta - valorCompra;
  }
  return ganancia;
};

export default function CalcGananciaAcciones(props) {
  const tablaA = [44, 30, 22, 32, 35, 30, 41, 38, 15];
  const tablaB = [2, 3, 4, 2];
  const tablaC = [50, 30, 4, 2];

  const resultA = calcularGanancia(tablaA);
  const resultB = calcularGanancia(tablaB);
  const resultC = calcularGanancia(tablaC);

  return (
    <div>
      Prueba 1 : <br />
      Compra Venta Acciones cuanto ganamos: <br />
      <span>A: {resultA} </span>
      <br />
      <span> B: {resultB} </span>
      <br />
      <span> C: {resultC} </span>
      <br />
    </div>
  );
}
