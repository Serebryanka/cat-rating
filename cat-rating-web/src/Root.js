import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CatsPage from './pages/cats-page';
import CatPage from './pages/cat-page';
import HomePage from './pages/home-page';


const Root = () => (
	<BrowserRouter>
		<Switch>
    	<Route exact path="/" component={HomePage} />
			<Route exact path="/cats" component={CatsPage} />
			<Route exact path="/cat/:id" component={CatPage} />
		</Switch>
	</BrowserRouter>
);

export default Root;
