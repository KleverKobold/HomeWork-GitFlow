function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui

  if (numero % 2 === 0) {
    let binario = [];
    while (numero > 0) {
      binario.unshift(numero % 2);
      numero = Math.floor(numero / 2);
    }
    return binario.join("");
  }

  if (numero % 2 !== 0) {
    if (numero % 2 !== 0) {
      let hexaString = numero.toString(16);
      let hexaNumber = parseInt(hexaString);
      return hexaNumber;
    }
  }
}

function myNameIs() {
  let alejandro = {
    name: "Alejandro",
    edad: "28",
    nacionalidad: "Argentino",
  };
  return alejandro;
}
