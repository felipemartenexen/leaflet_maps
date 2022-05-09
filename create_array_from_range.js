
function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

console.log(result);
