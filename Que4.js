// Given an array of Objects with fruits name and value 
// Return an object with the usm of all the fruits 

const fruits = [
    {
    apples:4,
    pears:6,
    oranges:5,
   },{
    apples:2,
    pears:2,
    oranges:3,
   },{
    apples:4,
    pears:2,
    oranges:2,
   }
]

// const mergeFruits = data =>{
//     const result ={};

//     data.forEach(basket => {
//         for(let[key,value] of Object.entries(basket)){
//             if(result[key]){
//                 result[key] += value
//             }
//             else{
//                 result[key] = value
//             }
//         }
//     });
//     return result
// }

// console.log(mergeFruits(fruits))

// function sumFruits(fruitsArray){
//     const total ={}
//     for(const fruitObj of fruitsArray){
//         for(const fruitName in fruitObj){
//             if(total.hasOwnProperty(fruitName)){
//                 total[fruitName] +=fruitObj[fruitName]
//             }
//             else{
//                 total[fruitName] = fruitObj[fruitName]
//             }
//         }
//     }
//     return total
// }
// console.log(sumFruits(fruits))

// USING REDUCE METHOD

const sum = fruits.reduce((acc,curr)=>{
    for(const [fruitName,fruitValue] of Object.entries(curr)){
        acc[fruitName] = (acc[fruitName]||0)+fruitValue
    }
    return acc;
},{})
console.log(sum)