function createObject(av, mi, ma, l) {
  const obj = {
    average: av,
    min: mi,
    max: ma,
    length: l,
  };

  return obj;
}

const analyzeArray = (arr) => {
  if (arr.length == 0) {
    return "Array is empty";
  } else {
    let length = arr.length;

    var minInt = Number.MAX_SAFE_INTEGER;
    var maxInt = Number.MIN_SAFE_INTEGER;
    var sum = 0;
    for (let i = 0; i < length; i++) {
      sum += arr[i];
      if (arr[i] > maxInt) {
        maxInt = arr[i];
      }

      if (arr[i] < minInt) {
        minInt = arr[i];
      }
    }

    var average = Math.ceil(sum / length);

    const object = createObject(average, minInt, maxInt, length);
    return object;
  }
};

module.exports = analyzeArray;
