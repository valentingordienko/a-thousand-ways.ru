const path = require('path');

/**
 * Функция возвращает модуль формирующий статическую разметку (SSR)
 */
function getView() {
    const viewPath = path.resolve(__dirname, '..', 'static-markup', `index.js`);
    delete require.cache[require.resolve(viewPath)];
    return require(viewPath);
}

const createView = getView();


/**
 * Экспортирую функцию для генерации разметки на сервере
 */
module.exports = createView;