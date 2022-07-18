const express = require('express');
const path = require('path');
const ejs = require('ejs');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

//Routes imports
const customerRoutes = require('./routes/customer');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Routes
app.use('/', customerRoutes);


// Configuration of static documents
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Aplicacion corriendo en el puerto 3000');
})