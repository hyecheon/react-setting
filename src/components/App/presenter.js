import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import "./styles.scss";
import Footer from '../Footer'
import Navigation from "../Navigation";
import Sample from "../Sample";


const App = props => [
	<Navigation key={1}/>,
	<PublicRoutes key={2}/>,
	<Footer key={3}/>
];

App.propTypes = {};
const PublicRoutes = props => (
	<Switch>
		<Route exact path={"/"} render={() => 'home'}/>
		<Route exact path={"/sample"} component={Sample}/>
	</Switch>
);


export default App;
