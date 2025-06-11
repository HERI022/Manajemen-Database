const database = 'UAS_MBD';
const collection = 'Heri_D0222544';


use(database);


db.createCollection(collection);

// Tiket kelas Ekonomi atau tujuan ke Surabaya
db.pemesanan.find({
    $or: [{ kelas: "Ekonomi" }, { tujuan: /Makassar/ }]
  });
  