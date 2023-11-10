//Make an Output Object which has only property/value 
//which are common in Input Obbect
const input1 = {a:1,b:2,c:3,d:10,e:12}
const input2 = {a:2,b:2,e:12}

function check(input1,input2){
    let obj = {};
    for(let i in input1){
        if(input1[i]==input2[i]){
            obj[i] = input1[i];
        }
    }
    return obj;
}
console.log(check(input1,input2))

// first declare obj
// then looping through input1 each key
// checking if both the keys are equals 
// and its values are also equals 
// if it is equals 
// then i can make a new key value pair obj