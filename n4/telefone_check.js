function telephoneCheck(str) {
  if (str[0] === "1") {
    str = str.slice(1);
    if (str[0] === " ") {
      str = str.slice(1);
    }
  }
  var formatosAceitos = [
    /^\d{10}$/,                 
    /^\d{3}-\d{3}-\d{4}$/,       
    /^\d{3} \d{3} \d{4}$/,       
    /^\(\d{3}\)\d{3}-\d{4}$/,  
    /^\(\d{3}\) \d{3}-\d{4}$/   
  ];
  for (var i = 0; i < formatosAceitos.length; i++) {
    if (formatosAceitos[i].test(str)) {
      return true;
    }
  }
  return false;
}

telephoneCheck("555-555-5555");