const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs')//will find the view folder
app.use(bodyParser.urlencoded({ extended: true }));
let newitems = []
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