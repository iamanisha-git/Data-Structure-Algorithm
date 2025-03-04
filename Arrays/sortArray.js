function isSorted(arr){
  for(let i=0; i< arr.length -1;i++){
    if (arr[i]>arr[i+1])return false;
  }
  return true;
}

console.log(isSorted([0,1,2,3,4,5,6,7]));//true
console.log(isSorted([3,6,1,,4,2,7,5,0])) .//false