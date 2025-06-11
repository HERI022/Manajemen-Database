const database = 'UAS_MBD';
const collection = 'Validasi';


use(database);


db.createCollection(collection);

db.createCollection("validasiTiket", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["namaPenumpang", "kodePenerbangan", "harga"],
        properties: {
          namaPenumpang: {
            bsonType: "string",
            description: "wajib diisi dan harus string"
          },
          harga: {
            bsonType: "int",
            minimum: 0,
            description: "harus angka dan minimal 0"
          }
        }
      }
    }
  });
  