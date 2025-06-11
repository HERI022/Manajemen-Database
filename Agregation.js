const database = 'UAS_MBD';
const collection = 'Heri_D0222544';


use(database);


db.createCollection(collection);

// Total penjualan tiket per kelas
db.pemesanan.aggregate([
    { $group: { _id: "$kelas", total: { $sum: "$harga" } } }
  ]);
  