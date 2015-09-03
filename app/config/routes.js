import React  from 'react';
import Main from "../components/main";
import Home from "../components/home";
import Router from "react-router";
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
	<Route name="app" path="/" handler={Main}>

	</Route>
);