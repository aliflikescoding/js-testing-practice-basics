const reverse = (str) => {
  if (str == "") {
    return "";
  } else {
    const arr = str.split("");
    const arr2 = [];
    for (let i = arr.length-1, j = 0; i >= 0, j < arr.length; i--, j++) {
      arr2[j] = arr[i];
    }
    const str2 = arr2.join("");
    return str2;
  }
};

module.exports = reverse;