
function moveZeroes(arr) {
  let nonZeroes = arr.filter(num => num !== 0);
  let zeroes = arr.filter(num => num === 0);
  console.log([...nonZeroes, ...zeroes]);
}
moveZeroes([0, 1, 0, 3, 12]);
