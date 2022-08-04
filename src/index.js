
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0){
    return [];
  }
  const arr2 = [];
  const arr = matrix.forEach((item, i) => {
      if (i % 2 !== 0) {
          item = item.reverse();
          arr2.push(...item);
      } else {
          arr2.push(...item);
      }
  });
  return arr2;
}
