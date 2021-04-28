import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

import SingIn from './components/SingIn/index.jsx';
import Template from './components/Template/index.jsx';
import './style.scss';

import './components/adaptive.scss'


function App(){
  const [page, setPage] = useState(localStorage.getItem('login') ? `${localStorage.getItem('currentPage')}`:'SingIn');
  const [login, setLogin] = useState(localStorage.getItem('login') || '');

  useEffect(() => {
    localStorage.setItem('currentPage', page || 'Home');
  }, [page]);

  function switchPage(pageName){
     setPage(pageName);
  };
  function setUserName(name){
    setLogin(name);
  }

  return(
      <div className='container overflow-hidden'>
          {page === 'SingIn' && <SingIn 
                                switchPage={switchPage}
                                userName={login}
                                setUserName={setUserName}/>}
                                
          {(page === 'Home' || page === 'Users')  && <Template 
                                                      switchPage={switchPage} 
                                                      pageName={page}
                                                      userName={login}/>}
      </div>
  )
};

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));