// Untuk koneksi ke MongoDB
const dbo = require("./conn");
// Konversi string ke ObjectId di MongoDB
const { ObjectId } = require("mongodb");
const Util = require("../lib/Util");

// Class Model yang bertugas memanipulasi data pada database sesuai dengan permintaan dari middleware
class UjianTerjadwalModel {

    constructor() {
        this.collectionName = "ujian_terjadwal";
    }

    getDb() {
        return dbo.getDb();
    }

    findAll() {
        // MongoDB Database Object
        let db = this.getDb();
        // Query
        // .. lengkapi logika kode dengan query yang sesuai di sini ..
        return db.collection(this.collectionName).find({});
    }

    findOneById(id, callback) {
        // MongoDB Database Object
        let db = this.getDb();
        // Query
        // .. lengkapi logika kode dengan query yang sesuai di sini ..
        return db.collection(this.collectionName).findOne({ _id: ObjectId(id) }, callback);
    }

    addNew(obj, callback) {
        // MongoDB Database Object
        let db = this.getDb();
        // Query
        // .. lengkapi logika kode dengan query yang sesuai di sini ..
        return db.collection(this.collectionName).insertOne(obj, callback);
    }

    edit(id, updatedObj, callback) {
        // MongoDB Database Object
        let db = this.getDb();
        // Query
        // .. lengkapi logika kode dengan query yang sesuai di sini ..
        // var data = Util.reqToObjNotId(updatedObj);
        // console.log(data);
        // console.log(updatedObj);
        return db.collection(this.collectionName).updateOne({ _id: ObjectId(id) }, { $set: updatedObj }, callback);
    }

    deleteOneById(id, callback) {
        // MongoDB Database Object
        let db = this.getDb();
        // Query
        // .. lengkapi logika kode dengan query yang sesuai di sini ..
        return db.collection(this.collectionName).deleteOne({ _id: ObjectId(id) }, callback);
    }
}

module.exports = new UjianTerjadwalModel();