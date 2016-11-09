var React = require('react'),
	ReactDOM = require('react-dom'),
	ReactRouter = require('react-router');

var Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');

var jsx = (
	<Router history={hashHistory}>
		<Route path='/' component={App}></Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));