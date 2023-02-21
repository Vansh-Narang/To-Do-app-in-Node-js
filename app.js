const express = require('express');
const mongoose = require('mongoose');
const url = "monogdb://localhost:27017/todolistDatabase"
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs')//will find the view folder
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(url, { useNewUrlParser: true });

con.on('open', function () {
    console.log("connected");
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

Item.insertMany(d, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Updated");
    }
})//Insert in schema

app.get('/', (req, res) => {
    // let today = new Date().toLocaleDateString()
    // console.log(today)
    res.render('list', { newlistitems: newitems })
    //render will file list and will find of kind of day and today will provide it value of today

})
app.post('/', (req, res) => {
    let newitem = req.body.newItem
    newitems.push(newitem)
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