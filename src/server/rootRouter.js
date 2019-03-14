const router = require('koa-router')(); // маршрутизация

const mainPage = require('./routers/mainPage');//

/**
 * Статичный клиентский роутинг для SSR
 */
router.get('/', mainPage);

module.exports = router;