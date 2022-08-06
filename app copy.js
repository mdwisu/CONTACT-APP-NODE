// ! lanjutan
const yargs = require("yargs")
// mengambil argumen dari command line
const command = process.argv[2];
if (command === 'add') {
    
} else if (command === 'remove') {
    
}

console.log(yargs.argv);








// ! versi lama
// const { tulisPertanyaan, simpanContact } = require('./contacts')

// const main = async () => {
//   const nama = await tulisPertanyaan('Masukan nama anda : ');
//   const email = await tulisPertanyaan('Masukan email anda : ');
//   const noHP = await tulisPertanyaan('Masukan np HP anda : ');

//   simpanContact(nama, email, noHP)
// };

// main();
