import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import SingIn from './components/SingIn/index';
import Home from './components/Template/Home/index';
import Users from './components/Template/Users/index';
import './style.scss';

import './components/adaptive.scss'




function App(){
  const [login, setLogin] = useState(localStorage.getItem('login') || '');

  function setUserName(name){
    setLogin(name);
  }

  return(
      <div className='container overflow-hidden'>
        <Switch>          
                         
          <Route path='/' exact>
            {login ? <Redirect to="/" /> : <Redirect to="/singin" />}
              <Home userName={login}/>
          </Route>
 

          <Route path='/users'>
            <Users userName={login}/>
          </Route>

          <Route path='/singin'>
              <SingIn userName={login} setUserName={setUserName}/> 
          </Route>
  
        </Switch>
      </div>
  )
};

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));