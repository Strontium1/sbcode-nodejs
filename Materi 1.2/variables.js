var globalVar = "ini global var";
let globalLet = "ini global let";
const globalConst = "ini global const";

console.log("globalVar: ", globalVar);
console.log("globalLet: ", globalLet);
console.log("globalConst: ", globalConst);

globalVar = "global var diganti isinya";
globalLet = "global let diganti isinya";
//globalConst = "global const diganti isinya"; // menyebabkan error karena const tidak bisa diubah nilainya, dan jika diubah maka tidak bisa dirun

console.log("globalVar (sekarang): ", globalVar);
console.log("globalLet (sekarang): ", globalLet);
console.log("globalConst (sekarang): ", globalConst);