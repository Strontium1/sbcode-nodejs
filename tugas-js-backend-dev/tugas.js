// Nomer 1 //
const tasks = {
    id: 1,
    name: 'Akbar',
    desc: 'Mengerjakan tugas',
    isDone: true,
    submitDate: '30/10/2024' 
}

function objectReader(tasks){
    console.log(`id: ${tasks.id}`);
    console.log(`nama: ${tasks.name}`);
    console.log(`Deskripsi: ${tasks.desc}`);
    console.log(`Sudah?: ${tasks.isDone ? 'Sudah' : 'Belum'}`);
    console.log(`Submit Date: ${tasks.submitDate}`);
}

objectReader(tasks)


// Nomer 2 // 
function sumOfNumbers(...numbers) {                                     //function ini mengumpulkan seluruh argumen input ke dalam satu object yaitu numbers
    return numbers.reduce((total, number) => total + number, 0);        //variabel numbers dilakukan reduksi (sum) dengan argumen total mengandung akumulasi sum dari tiap number
                                                                        //dengan nilai awal total yaitu 0, simpelnya seperti berikut:
                                                                        //total = 0 -> number = 1, total = 0 + 1 -> total = 1 -> number = 2, total = 1+2 -> total = 3, dst
}

const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);
