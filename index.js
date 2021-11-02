//Incluir el módulo y definir constantes y variables necesarias
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const mydb = "Empresa";
const coleccion = "Clientes";
const coleccion2 = 'Proveedores'

const url = "mongodb://localhost:27017/";

const myobj1 = { "nombre": "Ana", "direccion": "C/Alcalá 1" };
const myobj2 = { "nombre": "Gustavo", "direccion": "C/Francisco de Huerta y Vega 4" };
const myobj3 = { "nombre": "Alvaro", "direccion": "C/Colón 15" };
const myobj4 = { "nombre": "Ruben", "direccion": "C/Vallejas 8" };
const myobj5 = { "nombre": "Alicia", "direccion": "C/Alcatarra 32" };

//Creacion de una BD 
// MongoClient.connect(url+mydb, (err, db) => {
//     if (err) throw err;
//     console.log("Base de datos creada");
//     db.close();
// });
  
//Creacion de una coleccion dentro de una BD
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     var dbo = db.db(mydb);

//     dbo.createCollection(coleccion, (err, res) => {
//         if (err) throw err;
//         console.log("Colección creada");
//         db.close();
//     });
// });

//Insertar dentro de una coleccion de una BD
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbo = db.db(mydb);
    
//     dbo.collection(coleccion).insertOne(myobj3, (err, res) => {
//         if (err) throw err;
//         console.log("Documento insertado");
//     });

//     dbo.collection(coleccion).insertOne(myobj4, (err, res) => {
//         if (err) throw err;
//         console.log("Documento insertado");
//     });

//     dbo.collection(coleccion).insertOne(myobj5, (err, res) => {
//         if (err) throw err;
//         console.log("Documento insertado");
//         db.close();
//     });
// });

//Obtener datos del primer elemento dentro de una coleccion
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.collection(coleccion).findOne({}, (err, result) => {
//       if (err) throw err;
//       console.log(result.nombre);
//       db.close();
//     });
// }); 

//Ver todos 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.collection(coleccion).find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

// Query simple  
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     var query = { "direccion": "C/Alcalá 1" };
//     dbo.collection(coleccion).find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

//Sort por un criterio (campo)
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     var mysort = { "nombre": 1 };
//     dbo.collection(coleccion).find().sort(mysort).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//Busquedas paginadas
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.collection(coleccion).find().limit(3).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//Borrar  
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     var myquery = { "direccion": 'C/Alcalá 1' };
//     dbo.collection(coleccion).deleteOne(myquery, function(err, obj) {
//         if (err) throw err;
//         console.log("Documento borrado");
//         db.close();
//     });
// });

// Creacion de una coleccion para borrar
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     var dbo = db.db(mydb);

//     dbo.createCollection(coleccion2, (err, res) => {
//         if (err) throw err;
//         console.log("Colección creada");
//         db.close();
//     });
// });

// Borrar coleccion
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.collection(coleccion2).drop(function(err, delOK) {
//         if (err) throw err;
//         if (delOK) console.log("Coleccion borrada");
//         db.close();
//     });
// });

//actualizar
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myquery = { "direccion": "C/Vallejas 8" };
    var newvalues = { $set: {"nombre": "Pedro SL", "direccion": "C/Serrano" } };
    dbo.collection(coleccion).updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
    });
});