

const database = 'UAS_MBD';
const collection = 'Heri_D0222544';


use(database);


db.createCollection(collection);

db.pemesanan.find(); // Menampilkan semua data
db.pemesanan.find({ kelas: "Ekonomi" }); // Filter berdasarkan kelas
