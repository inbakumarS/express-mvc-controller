//const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorcontroller=require('./controllers/error');
const apps = express();
apps.set('view engine', 'ejs');
apps.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

apps.use(bodyParser.urlencoded({ extended: false }));
apps.use(express.static(path.join(__dirname, 'public')));

apps.use('/admin', adminRoutes);
apps.use(shopRoutes);

apps.use(errorcontroller.get404);
console.log("hi");
//const routes=require('./routes');

//const server = http.createServer(apps);

apps.listen(3009);
