ReactGA.initialize('UA-42211308-2')

render(<Root />, document.getElementById('App'))

import React from 'react'
import { render } from 'react-dom'
import getRoot from 'get-root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers' //TODO
import thunk from 'redux-thunk'
let store = applyMiddleware(thunk)(createStore)(reducer)

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  link: createHttpLink(),
  cache: new InMemoryCache(),
})
injectTapEventPlugin()
render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" component={App} />
        </div>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  getRoot()
)
