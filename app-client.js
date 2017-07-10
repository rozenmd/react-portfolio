import React from 'react'
import {render} from 'react-dom'
import Root from './routes'
import ReactGA from 'react-ga'
import siteID from './analytics.js'

ReactGA.initialize(siteID);

render(
    <Root />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept("./routes", () => {
            const NewRoot = require('routes').default;

            render(
                <NewRoot />,
                document.getElementById('app')
            )
        }
    )
}
