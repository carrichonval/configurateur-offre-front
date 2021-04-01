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
import Header from './components/Header';
import Panier from './components/Panier';


const customHistory = createBrowserHistory()

const routing = ( 
  <Router history={customHistory}>
   { /*<Header/>*/}
        <Switch>
            <Route exact path="/" component={Home} />
           
        </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

