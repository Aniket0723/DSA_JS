// Given a sorted array nums , remove the duplicates
// in place such that each element appears only once

const nums = [7, 9, 7, 2, 5, 9, 3, 2, 3, 5];
const sorted = nums.sort();
console.log(`Array length = ${sorted.length}`)
console.log(sorted);

// using pointer i and j 
// i pointing to arr[0] and j to arr[1]
// i marks where unique numbers will go.
// We compare the number at i with the number at j. 
// If they're different, we move i to the next spot and put the new unique number there.
// we remove the extra numbers at the end and give arr.length = i+1


function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  arr.length = i + 1;
  console.log(`Array length = ${arr.length}`)
  return arr;
}
console.log(removeDuplicates(sorted));


function removeDuplicatesOp(arr){
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]===arr[i+1]){
      arr.splice(i+1,1);
      i--;
    }
  }
  console.log(`Array length = ${arr.length}`)
  return arr
}
//Time Complexity - O(n)
//Space Complecity - O(1)

console.log(removeDuplicatesOp(sorted));