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