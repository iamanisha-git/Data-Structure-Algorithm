function removeDuplicates(arr){
  return [...new Set (arr)];

}
console.log(removeDuplicates([1,1,5,6,3,7,3,5,9]));