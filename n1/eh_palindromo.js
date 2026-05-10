function palindrome(str) {
  let palavra = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (palavra.length <= 1) {
    return true;
  }
  if (palavra[0] != palavra[palavra.length - 1]) {
    return false;
  } else {
    let verif = palavra.slice(1, palavra.length - 1);
    return palindrome(verif);
  }
}

palindrome("eye");