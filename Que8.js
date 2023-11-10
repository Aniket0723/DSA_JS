// Reverse only characters
// Do not moved special characters
// Input str = "a,b$c"
// Output str ="c,b$a"
// position of special characters could'nt be modified
  

function reverseOnlyCharacters(S){
    let result = [];
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let stA = S.split('')
    for(let i=0;i<stA.length;i++){
        if(stA[i].match(/[A-Z]/gi)){
            result.push(stA[i]);
        }
    }
    result = result.reverse();
    //cba
    // results charachters no special symbol

    for(let j=0;j<stA.length;j++){
        ///verfying given element is charter or special 
        if(!letters.includes(stA[j])){
            result.splice(j,0,stA[j])
        }
    }
    return result.join('')
}
console.log(reverseOnlyCharacters('a,b$c'))