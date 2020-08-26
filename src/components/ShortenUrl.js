import React from "react";

var tablaURLInitial = [];

const ShortStringUrl = (URL) => {
  let relator = { url: URL, initial: "ABCDE" };
  tablaURLInitial.push(relator);
  return relator.initial;
};
const InitialUrl = (initial) => {
  let result = null;
  tablaURLInitial.forEach((relator) => {
    if (relator.initial === initial) {
      result = relator.url;
    }
  });
  if (!result) {
    return "Initial desconocido";
  }
  return result;
};

export default function shortenUrl(props) {
  let resultA = ShortStringUrl("https://github.com/apiaryio/");
  let resultB = InitialUrl("ABCDE");
  let resultC = InitialUrl("ABCDEX");

  return (
    <div>
      Prueba 2 : <br />
      Acortar URL <br />
      A. Url Corta: {resultA} <br />
      B. Url Larga: {resultB} <br />
      C. Url Error: {resultC} <br />
    </div>
  );
}
