import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import WebFont from 'webfontloader';


import LogIn from './assets/pages/LogIn';
import FirstPage from './assets/pages/FirstPage';
import SecondPage from './assets/pages/SecondPage';
import Test from './assets/testing/test';
import ComponentComponent from './assets/testing/xd/ComponentComponent.js';
import WebComponent from './assets/testing/xd/WebComponent.js';




import './index.css';
import './assets/css/navbar.css';
import './assets/css/sidebar.css';
import './assets/css/first-pannel.css';
import './assets/css/second-pannel.css';
import './assets/css/second-page-sideL.css';
import './assets/css/downbar.css';
import './assets/css/leftbar.css';
import './assets/css/leftbar_res.css';



import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import rootReducer  from './redux/reducers/index';
import logger from 'redux-logger'

// const creat = ()=>{
//   const instore=
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  applyMiddleware(logger)
// }
const store= createStore(rootReducer, applyMiddleware(logger))



WebFont.load({
    google: {
      families: [ 'Mirza', 'cursive']
    }
  });

class First extends React.Component{
    render(){
        return(
            <Provider store={store}>
              <Router>               
                <Switch>
                  <Route exact path={'/'} component={LogIn}/>
                  <Route exact path={'/dash'} component={FirstPage}/>
                  <Route exact path={'/maps'} component={SecondPage}/>
                  <Route exact path={'/test'} component={Test}/>
                  <Route exact path={'/test2'} component={ComponentComponent}/>
                  <Route exact path={'/test3'} component={WebComponent}/>               
                </Switch>               
              </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<First/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
