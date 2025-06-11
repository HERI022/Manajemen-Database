const database = 'UAS_MBD';
const collection = 'Heri_D0222544';


use(database);


db.createCollection(collection);

db.pemesanan.deleteOne({ namaPenumpang: "Heri" });
