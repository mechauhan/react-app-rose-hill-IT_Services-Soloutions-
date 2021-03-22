const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

// const bcrypt = require('bcrypt')
// const saltRounds = 10


const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "rosehill",
    database: "rosehilldatabase",

});


//  const sqlInsert= `INSERT into rosehilluser( name, email, password, cnfpassword, phone) VALUES ( 'nikhil', 'na8008983@gmail.com', 'nikhil', 'nikhil' , 25256090 ) `

//  db.query(sqlInsert , (error , result)=>{

//          if(error){
//             return console.log(error)
//          }
//          return

//        console.log(result);
//     });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const cnfpassword = req.body.cnfpassword;
    const phone = req.body.phone;

    const sqlGet = "SELECT * FROM rosehilluser";

    db.query(sqlGet, [name, email, password, cnfpassword, phone], (error, result) => {

        res.send(result);
        console.log(result);
    });

});


app.get('/users/:id', (req, res) => {

    const id = req.params.id;

    const sqlGet = "SELECT * FROM rosehilluser  WHERE id =?"

    db.query(sqlGet, id, (err, result) => {

        if (err) {
            console.log(err);
        } else {

            res.send(result);
        }

    })
});


app.post('/register', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const cnfpassword = req.body.cnfpassword;
    const phone = req.body.phone;

    // bcrypt.hash(password ,cnfpassword ,saltRounds ,(err , hash)=>{

    // })

    db.query("INSERT INTO rosehilluser( name, email, password, cnfpassword ,phone) VALUES ( ?, ?, ?, ? , ?  )"
        , [name, email, password, cnfpassword, phone], (error, result) => {

            if (error) {
                return console.log(error)
            }
            return console.log(result);

        });
});



app.post('/contact', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const service = req.body.service;
    const comments = req.body.comments;


    db.query("INSERT INTO contactus( name, email, phone,service, comments ) VALUES ( ?, ?, ?, ? , ?  )"
        , [name, email, phone, service, comments], (error, result) => {

            if (error) {
                return console.log(error)
            }
            return console.log(result);

        });
});




app.post('/Login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM rosehilluser WHERE  email = ? AND password = ? ",
        [email, password], (err, result) => {

            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: "Worng email/password Combination " });
            }

        });
});




app.put('/adminEditUser/:id', (req, res) => {

    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const cnfpassword = req.body.cnfpassword;
    const phone = req.body.phone;

    const sqlUpdate = "UPDATE rosehilluser SET name=?,email=?,password=?,cnfpassword=?,phone=? WHERE id= ?";

    db.query(sqlUpdate, [name, email, password, cnfpassword, phone, id], (err, result) => {
        if (err) {
            console.log(err);
        }

    })

});




app.put('/updateUser/:id', (req, res) => {

    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const cnfpassword = req.body.cnfpassword;
    const phone = req.body.phone;

    const sqlUpdate = "UPDATE rosehilluser SET name=?,email=?,password=?,cnfpassword=?,phone=? WHERE id= ?";

    db.query(sqlUpdate, [name, email, password, cnfpassword, phone, id], (err, result) => {
        if (err) {
            console.log(err);
        }

    })

});







app.get('/viewUser/:id', (req, res) => {

    const id = req.params.id;

    const sqlView = 'SELECT * FROM rosehilluser WHERE id = ? ';
    db.query(sqlView, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result);
            console.log(result);

        }

    })


});


app.delete('/delete/:id', (req, res) => {


    const id = req.params.id;

    const sqlDelete = "DELETE FROM rosehilluser WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }

    })



})


app.listen(3001, () => {

    console.log('server is running on port 3001')
});