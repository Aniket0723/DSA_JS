// Rotating the array by two places
// two places forward --> to the left

const input = [2,7,11,4,-2]
// console.log(input)

function rotateArrayl(input){
    for(let i =0;i<2;i++){
        let temp = input[0];
        for(let i=0;i<input.length;i++){
            input[i]= input[i+1];
        }
        input[input.length-1] = temp
    }
    // console.log(input)

}
// rotateArrayl(input)
//for loop declare temp var with input of 0
//input[i] =input[i+1] next element ith element
//i become last element
// for loop is for 2 time
// time complexity = depend on number of rotation
// 2n^2


//Rotating array through whole axis
const input1 = [2,7,11,4,-2]
const rotateArr = input1.map((e,i)=>input1[input1.length-i-1])
// console.log(rotateArr)

// Rotating array by the value of k 

const nums =[1,2,3,4,5,6,7]
console.log(nums)
const k = 3;

function arrayRotation(arr,shiftby){
    for(let i=0;i<shiftby;i++){
        arr.unshift(arr.pop());
        console.log(`step ${i+1}`,arr);
    }
}
//arr.pop(): Removes the last element from the array and returns it.
//arr.unshift(...): Adds the returned element to the beginning of the array, effectively shifting all other elements to the right.
arrayRotation(nums,k)


const nums1 =[1,2,3,4,5,6,7]
console.log(nums1)
const k1 = 3;

function rotate(arr,shiftby){
    let deleteArray = arr.splice(arr.length-shiftby)
    for(let i=0;i<deleteArray.length;i++){
        arr.splice(i,0,deleteArray[i]);
        console.log(`step ${i+1}`,arr);
    }
}
rotate(nums1,k1)

//The function rotate takes two parameters: an array arr and a shiftby value.

//Inside the function, deleteArray is created by using the splice method on the input array arr. The splice method is used to remove elements from the array starting from the index arr.length - shiftby and extending to the end of the array. The removed elements are stored in the deleteArray variable.
//A for loop is used to iterate over each element in the deleteArray.
//Inside the loop, the splice method is used again, but this time to insert an element from the deleteArray back into the original array arr. The insertion is done at index i, effectively shifting the existing elements to the right.
//The loop also contains a console.log statement that prints the modified arr at each step, along with the step number.


const nums2 =[1,2,3,4,5,6,7]
console.log(nums2)
const k2 = 3;

function rotate1(arr, shiftby) {
    let deleteArray = arr.splice(arr.length - shiftby);
    arr.unshift(...deleteArray); // Insert elements at the beginning of arr
    console.log("Rotated array:", arr);
}
rotate1(nums2,k2)
