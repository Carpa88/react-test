import React  from 'react';
import { Fragment } from 'react';

import './Template.scss';
import Home from './Home/index.jsx';
import Users from './Users/index.jsx';
import { Link, Route } from 'react-router-dom';



function Template(props){
   
    function onNavMenuClick(event){
        const namepage = event.target.attributes.namepage.nodeValue;
        props.switchPage(namepage);
        console.log(namepage);
    };

    return( 
    < Fragment>
        <header>
            <h3 className="logo">My App</h3>
            <div className="userName">
                <p> {props.userName} </p>
            </div>
        </header>
        <main>
            <aside>
                <nav>
                    <ul>
                    <Link to='/home'>
                        <li onClick={onNavMenuClick} 
                            namepage='Home'
                            className={props.pageName === 'Home' ? 'active-item' : ''}>
                            
                            Главная
                        </li>
                        </Link>
                
                        <Link to='/users'>
                        <li onClick={onNavMenuClick} 
                            namepage='Users' 
                            className={props.pageName === 'Users' ? 'active-item' : ''}>
                               
                            Пользо<wbr/>ва<wbr/>те<wbr/>ли
                        </li>
                        </Link>
                    </ul>
                </nav>
            </aside>
            
            <div className='content'>
                <h2 className='content-title'>Добро Пожаловать</h2>
                <div className='content-body '>
                    <Route path='/home' component={Home}/>
                    <Route path='/users' component={Users}/>
                </div>
            </div>    
        </main>

    </Fragment>
    
    )};

  export default Template;