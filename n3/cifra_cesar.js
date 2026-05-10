function rot13(str) {
  let resultado = "";

  for (let i = 0; i < str.length; i++) {
    let letra = str[i];
    let ascii = letra.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      ascii += 13;
      if (ascii > 90) {
        ascii -= 26;
      }
      resultado += String.fromCharCode(ascii);
    } else {
      resultado += letra;
    }
  }

  return resultado;
}