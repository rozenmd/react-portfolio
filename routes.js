import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router'
import ReactGA from 'react-ga'

class App extends Component {

    componentDidMount() {
        document.body.className = ''
    }

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

function logPageView() {
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname)
}

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

const routes = {
    component: App,
    childRoutes: [
        {
            path: '/',
            getComponent(location, cb) {
                System.import('components/home')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: '/projects/can-i-go-outside-yet',
            getComponent(location, cb) {
                System.import('components/stories/CanIGoOutsideYet/index')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: '/projects/nghbr',
            getComponent(location, cb) {
                System.import('components/stories/nghbr/index')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: '/projects/billdivider',
            getComponent(location, cb) {
                System.import('components/stories/billdivider/index')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: '/projects/blog',
            getComponent(location, cb) {
                System.import('components/stories/blog1/index')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: '*',
            getComponent(location, cb) {
                System.import('components/nomatch')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    ]
};

export default () => <Router history={browserHistory} onUpdate={logPageView} routes={routes}/>
