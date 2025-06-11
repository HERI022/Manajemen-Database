const database = 'UAS_MBD';
const collection = 'Heri_D0222544';


use(database);


db.createCollection(collection);

db.pemesanan.bulkWrite([
    {
      insertOne: {
        document: {
          namaPenumpang: "Ani",
          kodePenerbangan: "SJ456",
          tujuan: "Jakarta - Bali",
          tanggal: new Date("2025-07-01"),
          kelas: "Ekonomi",
          harga: 850000
        }
      }
    },
    {
      updateOne: {
        filter: { namaPenumpang: "Ani" },
        update: { $set: { kelas: "Bisnis", harga: 1350000 } }
      }
    }
  ]);
  