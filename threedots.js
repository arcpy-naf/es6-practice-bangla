const age = [12, 15, 45];
const age2 = [12, 16, 14];
const age3 = [45, 22, 66];

const allAges = age.concat(age2).concat(age3);
const allAges2 = [...age, ...age2, 5, ...age3]
console.log(allAges);
console.log(allAges2);

const x= 100;
const y = 200;
const z = 500;
const xyz = [100, 500, 200, 3000]
//const maximum = Math.max(x, y, z);
const maximum = Math.max(...xyz);

console.log(maximum);