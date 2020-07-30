const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
    auth:{ 
        user: 'Boddah',
        password: '1234'
    }

});
couch.listDatabases().then(function(dbs){
    console.log(dbs);
});
const dbName = 'contactos';
const viewUrl = '_design/all_contactos/_view/all';

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/****************************        -----------------          **************************************/


/***********     Este es el que se trae los contactos     ********/

app.get('/', function(req, res){
    couch.get(dbName, viewUrl).then(
        function(data, headers, status){
            console.log(data.data.rows);
            res.render('index',{
                contactos:data.data.rows
            })
        },
        function(err){
            res.send(err);
        });
});
/***********     Este es el que se trae los contactos     ********/


/****************************        -----------------          **************************************/


/***********     Este es el que se añade los contactos     ********/
app.post('/contacto/add', function(req,res){
    const nombre = req.body.nombre;
    const apellido1 = req.body.apellido1;

    couch.uniqid().then(function(ids){
        const id = ids[0];

        couch.insert(dbName,{
            _id: id,
            nombre: nombre,
            apellido1: apellido1
        }).then(
            function(data,headers,status){
                res.redirect('/');
            },
            function(err){
                res.send(err);
            });
    });
});
/***********     Este es el que se añade los contactos     ********/


/****************************        -----------------          **************************************/


/***********     Este es el que se borra los contactos     ********/
app.post('/contacto/delete/:id', function(req, res){
    const id = req.params.id;
    const rev = req.body.rev;

    couch.del(dbName, id, rev).then(
        function(data, headers, status){
            res.redirect('/');            
        },
        function(err){
            res.send(err);
        });
});
/***********     Este es el que se borra los contactos     ********/


/****************************        -----------------          **************************************/


app.listen(3000, function(){
    console.log('Server started on port 3000');
});