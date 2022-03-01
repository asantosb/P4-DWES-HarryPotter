var fs = require('fs');
var mongo = require('mongodb');

var MongoClient = mongo.MongoClient;
var mongoUrl = "mongodb://localhost:27017/";

exports.importar = function (rutaJson, miCallback) {
    MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) {
            console.log(err);
            return miCallback('KO1');
        }

        var dbo = db.db("harry");
        dbo.createCollection("personajes", function (err, res) {
            if (err && err.codeName != 'NamespaceExists') {
                console.log(err);
                return miCallback('KO2');
            } else if (err && err.codeName == 'NamespaceExists') {
                console.log("La colección ya existe.");
            } else {
                console.log("Colección creada!");
            }
            fs.readFile(rutaJson, function (err, dato) {
                if (err) {
                    console.log(err);
                    return miCallback('KO3');
                }
                let datos = JSON.parse(dato);
                dbo.collection("personajes").deleteMany({}, function (err, res) {
                    if (err) {
                        console.log(err);
                        return miCallback('KO4');
                    }
                    dbo.collection("personajes").insertMany(datos, function (err, res) {
                        if (err) {
                            console.log(err);
                            return miCallback('KO5');
                        }
                        console.log("Se han insertado " + res.insertedCount + " documentos");
                        db.close();
                        return miCallback('OK');
                    });
                });
            });
        });
    });
};
exports.consulta = function (parametro, myCallback) {

    if (parametro != undefined && parametro != '') {
        if (parametro == "human") {
            query = { species: parametro };
        } else if (parametro == 1979) {
            query = { yearOfBirth: { $lt: 1979 } };
        } else if (parametro == "holly") {
            query = { "wand.wood": "holly" };
        } else if (parametro = true) {
            query = { alive: true, hogwartsStudent: true };
        }
    } else {
        query = {};
    }
    MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) {
            console.log(err);
            return myCallback('KO1');
        }

        var dbo = db.db("harry");
        dbo.collection("personajes").find(query).toArray(function (err, result) {
            if (err) {
                console.log(err);
                return myCallback('KO2');
            }
            db.close();
            return myCallback(JSON.stringify(result));
        });
    });
};

exports.agregar = function (parametroImg, parametroNombre, parametroEspecie, parametroGenero, parametroCasa, parametroNacimiento, myCallback) {
    if(parametroNombre !='' && parametroEspecie !='' && parametroGenero != '' && parametroCasa != '' && parametroNacimiento != ''){
        query = { "image": parametroImg, "name": parametroNombre, "species": parametroEspecie, "gender": parametroGenero, "house": parametroCasa, "yearOfBirth": parametroNacimiento };
    }else{
        console.log('Rellena los campos necesarios');
        return myCallback('KO6');
    }
    
    MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) {
            console.log(err);
            return myCallback('KO1');
        }
        var dbo = db.db("harry");
        dbo.collection("personajes").insertOne(query, function (err, res) {
            if (err) {
                console.log(err);
                return myCallback('KO5');
            }
            console.log("Se han insertado " + res.insertedCount + " documentos");
            db.close();
            return myCallback(JSON.stringify(res));
        });
    });
}

exports.borrar = function (parametroNombre, myCallback) {
    let query = { name: parametroNombre };
    
    MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) {
            console.log(err);
            return myCallback('KO1');
        }
        var dbo = db.db("harry");
        dbo.collection("personajes").deleteOne(query, function (err, result) {
            if (err) {
                console.log(err);
                return myCallback('KO2');
            }
            db.close();
            return myCallback(JSON.stringify(result));
        });
    });
};