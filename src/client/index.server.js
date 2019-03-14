import "babel-polyfill";//
import React from 'react';//
import {renderToString} from 'react-dom/server';//
import {StaticRouter} from 'react-router-dom'; //
// import {extractCritical} from 'emotion-server';
// import serialize from 'serialize-javascript';
import {Provider} from 'react-redux';//
import App from './components/app/app';//
import createStore from "./store";//

module.exports = (location, context = {}) => {

    const store = createStore();

    const app = renderToString(
        <StaticRouter location={location} context={context}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>
    );
    // const app = renderToString(<App data={appData} />);
    // const {html, ids, css} = extractCritical(app);
    // const viewData = `window.__data=${serialize({ids, appData})};`;

    return renderToString(
        <html>
        <head>
            <meta charSet='utf-8'/>
            <title>Тысяча дорог - Тайное общество путешественников</title>
            {/*<link rel='shortcut icon' href='/public/favicon.ico' />*/}
            <link rel='stylesheet' href='./normalize.css'/>
            <link rel='stylesheet' href='./assets/fonts/source-sans-pro-webfontkit/stylesheet.css'/>
            <link rel='stylesheet' href='./index.css'/>
            {/*<style type='text/css' dangerouslySetInnerHTML={{__html: css}}/>*/}
        </head>
        <body>
        <div id='root' dangerouslySetInnerHTML={{__html: app}}/>
        {/*<script dangerouslySetInnerHTML={{__html: viewData}}></script>*/}
        <script type='application/javascript' src='babelPolyfill.js'/>
        {/*<script type='application/javascript' src='index.js'/>*/}
        </body>
        </html>
    );
};
