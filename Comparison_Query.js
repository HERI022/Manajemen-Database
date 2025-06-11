const database = 'UAS_MBD';
const collection = 'Heri_D0222544';


use(database);


db.createCollection(collection);

// Cari tiket dengan harga lebih dari 1 juta
db.pemesanan.find({ harga: { $gt: 1000000 } });
