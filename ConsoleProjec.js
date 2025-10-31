
// ...existing code...
const arr = [12, 3, 4, 5, 4];


const unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);




