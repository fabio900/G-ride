import React from 'react';
import * as serviceWorker from './serviceWorker'

// import Foot from './asset/component/footerComponent/Foot'
import Home from './asset/component/views/Home'
import MakeRequest from './asset/component/views/MakeRequest'
import Nav from './asset/component/headerComponent/Nav'


import './asset/css/main.css'


import { 
  Route, 
  Switch, 
  BrowserRouter,
} from 'react-router-dom';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';



const supportsHistory = 'pushState' in window.history;


const App = () => (
  <BrowserRouter forceRefresh={!supportsHistory}>
     
      <Nav />
      <main>
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup>
                <CSSTransition 
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 1000,
                    exit: 1000,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                        <Route
                          exact
                          path="/"
                          component={Home}
                        />
                        <Route
                          path="/make request"
                          component={MakeRequest}
                        />
                       
                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </main>
  
  </BrowserRouter>
);
export default App;
