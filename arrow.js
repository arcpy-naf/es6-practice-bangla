// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num*2;
// }

const doubleIt = num => num*3;

const result = doubleIt (5);
console.log(result);

const doMath = (x, y) => {
    const sum = (x+y);
    const diff = (x-y);
    const result = sum * diff;
    return result;
}

const result1 = doMath(10, 4)
console.log(result1);