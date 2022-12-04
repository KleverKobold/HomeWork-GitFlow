function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    while (numero > 0) {
      let binario = numero % 2;
      return binario;
    }
  } else if (numero % 2 === 1) {
  }

  if (numero % 2 !== 0) {
    let hexaString = numero.toString(16);
    let hexaNumber = parseInt(hexaString);
    return hexaNumber;
  }
}

function Lucho() {
  let infoLucho = {
    name: "Lucho",
    age: 29,
    Country: "Argentina",
  };

  return infoLucho;
}