const createView = require('./getView');

module.exports = (ctx) => {
    // const data = await getData(ctx);

    // ctx.body = renderToStaticMarkup(indexView());
    ctx.body = createView('/');
};