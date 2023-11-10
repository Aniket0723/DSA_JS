// Second largest number in the array

const input = [1, 3, 19, 53, -45, 40];

function secondLargest(input) {
  let arr = [...new Set(input)].sort((a, b) => a - b);
  const sec = arr[arr.length - 2];
  const first = arr[arr.length - 1];
  console.log(sec, first);
}
secondLargest(input);

//without using Set

// first sort it
// take last element
// whenever it is equal i will continue
// and when it is changed i will assign it value
// Time complexity -O(nlogn) - because it was sorting

function func(input) {
  let arr = input.sort((a, b) => a - b);
  let res = arr[arr.length - 1];
  let first = res;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (res != input[i]) {
      res = input[i];
      break;
    }
  }
  console.log(res, first);
}
func(input);

///////////////////////////
// BEST SOLUTION
// taken minimum number in both these variables because we'll be traversing through this array.
// taken 2 pointers
// adding if condition and comparing if that number is greater than the first largest number.
// pick each and every element and we'll verify with first
// and second elements if it is greater number than the first element, will assign that largest element
// also we assgin firstlarge no to secondlarge no
//  assign.the second large number. And we are assigning the first large number to the second large number.

// else if array of I if that is greater than the. The second largest element which we have defined
// If that is the case, then. We need to assign that number.
//So also we need to check one more condition like the current element. Should not be equal to the first element as well.
//  in this condition you will be identifying whether the number is lies between the large number.And the. Short number, min number.




//////////////
// This loop iterates through each element of the array using the index i.
// It compares the current element (arr[i]) with the current first largest number (fLargNum).
// If the current element is greater than fLargNum, it updates both fLargNum and secLargNum accordingly.
// If the current element is greater than secLargNum but not equal to fLargNum, it updates only secLargNum.


function secondLargestN(arr) {
  let fLargNum = (secLargNum = Math.min(...arr)); //give minimum no in array
  if(arr.length<2){
    console.log("Array should have more than 2 Values")
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > fLargNum) {
      secLargNum = fLargNum;
      fLargNum = arr[i];
    } else if (arr[i] > secLargNum && arr[i]!==fLargNum) {
      secLargNum = arr[i];
    }
  }
  if(secLargNum == Math.min(...arr) && secLargNum == fLargNum) {
    console.log("NO SECOND LARGEST NO IN ARRAY")
  }else{
      console.log(secLargNum, fLargNum);
  }
}
secondLargestN(input);
secondLargestN([-10,-2,-13,-40]);
secondLargestN([10,5,10,10]);
secondLargestN([10,10,10,10])
secondLargestN([10])


function secondLargestOptimised(arr){
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
      secondLargest= largest
      largest=arr[i]
    }else if(arr[i] !=largest && arr[i]>secondLargest){
      secondLargest = arr[i]
    }
  }
  console.log(secondLargest,largest)
}
secondLargestOptimised([1, 3, 19, 53, -45, 40])
secondLargestOptimised([-10,-2,-13,-40]);
secondLargestOptimised([10,5,10,10]);
secondLargestOptimised([10,10,10,10])
secondLargestOptimised([10])

// Time complexity for loop once operation for array.length
// O(n)
// Space complexity O(1)