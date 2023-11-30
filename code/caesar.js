const caesar = (str) => {
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    
    if (c.match(/[a-z]/i)) { 
      let code = str.charCodeAt(i);
    
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + 4) % 26) + 65);  
      }
      else if (code >= 97 && code <= 122) { 
        c = String.fromCharCode(((code - 97 + 4) % 26) + 97);
      }
    }
    
    result += c;
  }
  
  return result;  
};

module.exports = caesar;
