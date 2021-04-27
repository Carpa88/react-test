import React, { useState }  from 'react';
import { Fragment } from 'react';

import './Template.scss';
import Home from './Home/index.jsx';
import Users from './Users/index.jsx';



function Template(props){
   
    function onNavMenuClick(event){
        const namepage = event.target.attributes.namepage.nodeValue;
        props.switchPage(namepage);
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
                        <li onClick={onNavMenuClick} 
                            className={props.pageName === 'Home' ? 'active-item' : ''}
                            namepage='Home'>
                            Главная
                        </li>
                        <li onClick={onNavMenuClick} 
                            namepage='Users' 
                            className={props.pageName === 'Users' ? 'active-item' : ''}>
                            Пользо<wbr/>ва<wbr/>те<wbr/>ли
                        </li>
                    </ul>
                </nav>
            </aside>
            
            <div className='content'>
                <h2 className='content-title'>Добро Пожаловать</h2>
                <div className='content-body '>
                   {props.pageName==="Home" && <Home />}
                   {props.pageName==="Users" && <Users />}
                </div>
            </div>    
        </main>

    </Fragment>
    
    )};

  export default Template;