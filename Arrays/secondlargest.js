function secondLargest(arr){
  let uniqueArr = [...new Set(arr)]; //remove duplication
  uniqueArr.sort((a,b)=>b-a); //sort in descending
  console.log(uniqueArr[1]);
}

secondLargest([3,6,1,80,90,45,68,92]);