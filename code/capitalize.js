function isAlphabet(c) {
  return /[a-zA-Z]/.test(c);
}

const capitalize = (str) => {
  if (str == "") {
    return "";
  } else {
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (isAlphabet(arr[i])) {
        arr[i] = arr[i].toUpperCase();
        break;
      }
    }
    const str2 = arr.join("");
    return str2;
  }
};

module.exports = capitalize;
