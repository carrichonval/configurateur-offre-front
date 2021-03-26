import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.generated.css';

import { createBrowserHistory } from 'history'

import {
  Router,
  Route,
  Switch
} from 'react-router-dom'


import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Animals from './components/categories/Animals';
import Animes from './components/categories/Animes';
import AstrologicalSigns from './components/categories/AstrologicalSigns';
import Cars from './components/categories/Cars';
import Cities from './components/categories/Cities';
import Destinations from './components/categories/Destinations';
import Drinks from './components/categories/Drinks';
import FilmTypes from './components/categories/FilmTypes';
import Foods from './components/categories/Foods';
import MusicTypes from './components/categories/MusicTypes';
import Regions from './components/categories/Regions';
import Sports from './components/categories/Sports';
import Users from './components/categories/Users';
import VideoGames from './components/categories/VideoGames';
import Compatibility from './components/Compatibility'

import PrivateRoute from "./components/SpecialRoutes/PrivateRoute"
import User from './components/categories/User';


const customHistory = createBrowserHistory()

const routing = ( 
  <Router history={customHistory}>
    <Header/>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/" component={Home} />
            <Route exact path="/animals" component={Animals} />
            <Route exact path="/animes" component={Animes} />
            <Route exact path="/astrologicalSigns" component={AstrologicalSigns} />
            <Route exact path="/cars" component={Cars} />
            <Route exact path="/cities" component={Cities} />
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/drinks" component={Drinks} />
            <Route exact path="/filmTypes" component={FilmTypes} />
            <Route exact path="/foods" component={Foods} />
            <Route exact path="/musicTypes" component={MusicTypes} />
            <Route exact path="/regions" component={Regions} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/videoGames" component={VideoGames} />
            <PrivateRoute exact path="/compatibility" component={Compatibility} />
            <Route exact path="/users/:id" component={User} />
        </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

