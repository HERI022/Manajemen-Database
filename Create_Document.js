

const database = 'UAS_MBD';
const collection = 'Heri_D0222544';


use(database);


db.createCollection(collection);

db.pemesanan.insertOne({
    namaPenumpang: "Heri",
    kodePenerbangan: "GA123",
    tujuan: "Mamuju - Makassar",
    tanggal: new Date("2025-06-15"),
    kelas: "Ekonomi",
    harga: 750000
  });
  