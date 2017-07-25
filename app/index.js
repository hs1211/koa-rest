'use strict';

let books = require('./controllers/books');
let route = require('koa-route');
let Koa = require('koa');
let serve = require('koa-static');
const bodyParser = require('koa-bodyParser');
let path = require('path');
let app = module.exports = new Koa();
const logger = require('koa-logger');

app.use(logger());
app.use(bodyParser())

console.log(books.home);
app.use(route.get('/', books.home));
app.use(route.post('/add', books.add));

app.use(serve(path.join(__dirname, 'public')));
//app.use(serve(`${__dirname}/public`));


app.listen(3000);
console.log('listening on port 3000');
