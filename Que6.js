// Given a number in string format , return a 
// Single-digit no by recursively adding the digits 
// in a string format 


const string = "9325831368"
const string2 ="64"






















function sumofDigitsinString(str){

    let sumofDigits =0;
    
    for(let i=0;i<str.length;i++){
        const char = str.charAt(i);
        if(!isNaN(char)){
            sumofDigits += parseInt(char)
        }
    } 
    console.log(sumofDigits)
}
sumofDigitsinString(string2)


  
