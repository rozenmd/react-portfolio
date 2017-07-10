import React from 'react'

import ReactDOMServer from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import express from 'express'
import hogan from 'hogan-express'
import routes from './routes'
import favicon from 'serve-favicon'

const app = express();
app.engine('html', hogan);
app.set('views', __dirname + '/views');
app.use('/', express.static(__dirname + '/public/'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.set('port', (process.env.PORT || 3000));

app.get('*', (req, res) => {

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        const reactMarkup = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />);

        res.locals.reactMarkup = reactMarkup;

        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.status(200).render('index.html')
        } else {
            res.status(404).render('index.html')
        }
    })
});

app.listen(app.get('port'));
console.info(`==> server listening in ${process.env.NODE_ENV} mode`);
console.info(` booyah port ${app.get('port')}!!!`);
