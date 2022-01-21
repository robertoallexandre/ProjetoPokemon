const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

app.use('/', require('./src/routes/routes'));

app.listen(3000, ()=> console.log("Servidor está sendo executado"));