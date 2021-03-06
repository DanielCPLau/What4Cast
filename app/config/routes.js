//necessary objects
var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

//routes
var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer')
var ForecastContainer = require('../containers/ForecastContainer');
var DetailsContainer = require('../containers/DetailsContainer');


var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer} />
			<Route path='forecast/:city' component={ForecastContainer} />
			<Route path='detail/:city' component={DetailsContainer} />
		</Route>
	</Router>
);

module.exports = routes;