const task = {
    title: "ini judul kerja-nya",
    description: "ceritain detail pekerjaanya disini",
    isDone: false,
};
  
const taskSpread = { ...task };                     // taskSpread = mengumpulkan (...) semua isi dari object task
console.log("task spread: ", taskSpread);

const { title, description, isDone } = task;        // mirip dengan (...task) namun tiap key value dapat dijadikan variabel tersendiri
console.log("destruct -> title: ", title);
console.log("destruct -> description: ", title);
console.log("destruct -> isDone: ", isDone);

const taskStringFromDestruct = `task title: ${title}, description: ${description}, isDone: ${isDone}`;                  //akses value dari tiap variabel pada variasi ke-2
const taskStringFromObject = `task title: ${task.title}, description: ${task.description}, isDone: ${task.isDone}`;     //akses value langsung dari object 'task'

console.log("taskStringFromDestruct: ", taskStringFromDestruct);
console.log("taskStringFromObject: ", taskStringFromObject);