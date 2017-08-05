import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/index.css'
// vv  import route components
import Splash from './components/splash/Splash.js';
import Shop from './components/shop/Shop.js';
import Reviews from './components/reviews/Reviews.js';
import Admin from './components/admin/Admin.js';
// remove for production v v
//import TempHeader from './TempHeader.js';

ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/shop" component={Shop} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/admin" component={Admin} />
            </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
