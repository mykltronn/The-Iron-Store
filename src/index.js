import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/index.css'
// vv  import route components
import Splash from './components/splash/Splash.js';
import Shop from './components/shop/Shop.js';
import Checkout from './components/checkout/Checkout.js';
import Reviews from './components/reviews/Reviews.js';
import Admin from './components/admin/Admin.js';
// remove for produciton v v
import TempHeader from './TempHeader.js';


ReactDOM.render(
    <BrowserRouter>
        <TempHeader> {/*this can be removed, it's just for development navigation */}
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/shop" component={Shop} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </TempHeader>
    </BrowserRouter>
    , document.getElementById('root'));
