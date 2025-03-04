function reverseArray(arr){
  let reversed = arr.reverse();
  console.log(reversed);
}
 reverseArray([2,6,1,7,43,67,23]);



//  without reverse()

function reverseArray(arr){
  let reversed = [];
  for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i]);
  }
  console.log(reversed);
}