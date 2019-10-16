import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlag from './containers/flag-container.component';
import CountryDetails from './containers/country-detail-container.component';
import Continents from './containers/continents-container.component';


import './index.css'

render(
    <Provider store={store}>
        <Router routes={routes}>
            <Navigation/>
            <Switch> 
                <Route exact path='/' component={Home}/>  
                <Route exact path='/countries' component={CountryFlag}/>
                <Route path='/countries/country/:id' component={CountryDetails}/>  
                <Route path='/continents' component={Continents}/>                             
                <Route path='/contact' component={Contact}/>
                <Route path='*' component={NotFound}/>   
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);