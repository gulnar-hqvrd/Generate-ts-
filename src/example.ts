// tsc src\example.js yazanda example js yaranir

function printId(id : number | string){
    return id
}

const stringId = printId("123")
console.log(typeof stringId);

const numberId = printId(123)
console.log(typeof numberId);

