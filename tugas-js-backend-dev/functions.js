function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function substract(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
  
console.log("add: ", add(2, 3));                //return 2+3 = 5
console.log("multiply: ", multiply(2, 3));      //return 2*3 = 6
console.log("substract: ", substract(2, 3));    //return 2-3 = -1
console.log("division: ", division(2, 3));      //return 2/3 = 0.666

const add = function (a, b) {
    return a + b;
};
const multiply = function (a, b) {
    return a * b;
};
const substract = function (a, b) {
    return a - b;
};
const division = function (a, b) {
    return a / b;
};

console.log("add: ", add(2, 3));                //return 2+3 = 5
console.log("multiply: ", multiply(2, 3));      //return 2*3 = 6
console.log("substract: ", substract(2, 3));    //return 2-3 = -1
console.log("division: ", division(2, 3));      //return 2/3 = 0.666
  
const add = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
const substract = (a, b) => {
    return a - b;
};
const division = (a, b) => {
    return a / b;
};

console.log("add: ", add(2, 3));
console.log("multiply: ", multiply(2, 3));
console.log("substract: ", substract(2, 3));
console.log("division: ", division(2, 3));

const add = (a = 10, b = 20) => {
    return a + b;
};
function add(a = 10, b = 20){
    return a + b;
};
const add = function (a = 10, b = 20) {
    return a + b;
}

console.log("add with default parameter: ", add());
console.log("add with custom parameter: ", add(5, 5));


// Perhatikan kode ini, kira - kira hasilnya apa?
// Kode di bawah jika dirun akan error karena 'add' merupakan function yang kemudian diinisialisasi menjadi variable const yang pada dasarnya bersifat immutable
function add(a, b) {
    return a + b;
}

const add = (a, b) => {
    return a + b;
};

console.log("add: ", add(2, 3)); 