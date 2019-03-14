'use strict';

const koa = require('koa'); // ядро
const app = new koa();

const http = require('http');
const serve = require('koa-static'); // модуль, который отдает статические файлы типа index.html из заданной директории
const bodyParser = require('koa-bodyparser'); // парсер для POST запросов

const router = require('./rootRouter'); // маршрутизация

app.use(serve('./public')); //
app.use(bodyParser()); //
app.use(router.routes()); // потом маршруты

http
    .createServer(app.callback())
    .listen(
        8200,
        function () {
        const {port} = this.address();
        console.info(`Application started on ${port}`);
    });

module.exports = app;