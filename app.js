const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const url = "monogdb://localhost/todolistDatabase"
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/todo')
const con = mongoose.connection

con.on('open', function () {
    console.log("connected ");
})
app.set('view engine', 'ejs')//will find the view folder
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("request from the middleware");
    next();
})
//Schema create to store in db

const itemSchema = {
    name: String
}
const Item = mongoose.model('Item', itemSchema);
//creating items
const Item1 = new Item({
    name: "Welcome",
})
const Item2 = new Item({
    name: "garvit",
})
const Item3 = new Item({
    name: "vansh",
});

const d = [Item1, Item2, Item3]
/*
Item.insertMany(d, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Updated");
    }
})//Insert in schema*/


app.get('/', (req, res) => {
    // let today = new Date().toLocaleDateString()
    // console.log(today)
    Item.find({}, function (err, f) {
        if (f.length == 0) {
            Item.insertMany(d, function (error) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Updated");
                }
            });
            res.redirect('/')//when if condition then update and store in browser
        }
        else {
            //normal intailized if length ==0
            if (err) {
                console.log(err);
            }
            else {
                res.render('list', { newlistitems: f })
            }
        }
    })//finding all items
    // res.render('list', { newlistitems: newitems })
    //render will file list and will find of kind of day and today will provide it value of today

})
app.post('/', async (req, res) => {
    const itemname = req.body.n
    console.log(itemname);
    const item = new Item({
        name: itemname

    });
    await item.save();
    res.redirect('/')
})

app.listen(3000, () => {
    console.log("listening");
})


//In date
//0 - Sunday
//1 - Monday
// and ....So on


//Ejs - Embedded JavaScript
//Use for embedding html in Node js

//scriptlet tag for control-flow
//Output tag for output value