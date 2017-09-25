require('setimmediate')

var chromatic = require('react-chromatic').default;

var React = require('react')
var {render} = require('react-dom')
var Router = require('react-router/lib/Router')
var createHashHistory = require('history/lib/createHashHistory')
var useScroll = require('react-router-scroll/lib/useScroll')
var applyRouterMiddleware = require('react-router/lib/applyRouterMiddleware')
var history = createHashHistory()

var routes = require('./routes')

chromatic({
  appCode: 's684zqqn8f',
  // This regexp stops us from including `.test.js` files
  componentContext: require.context('.', true, /\/[^\.]*\.js$/)
});

render(<Router history={history} render={applyRouterMiddleware(useScroll())} routes={routes}/>, document.getElementById('app'))
