import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout.js';
import Home from './components/Home.js'
import ProductInfo from './components/ProductInfo.js';
import ProductMenu from './ProductMenu.js';


ReactDOM.render(
    <BrowserRouter>
      <PageLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/people/:actor" component={ProductInfo} />
              <Route path="/people" component={ProductMenu} />
            </Switch>
        </PageLayout>
    </BrowserRouter>
    , document.getElementById('root'));
