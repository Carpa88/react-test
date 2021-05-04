import React  from 'react';
import { Fragment } from 'react';

import './Template.scss';
import { NavLink } from 'react-router-dom';



function Template(props){

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
                    
                        <li><NavLink to='/' activeClassName='active-item' exact> Главная </NavLink></li>
                               
                        <li><NavLink to='/users' activeClassName='active-item'>
                            Пользо<wbr/>ва<wbr/>те<wbr/>ли</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            
            <div className='content'>
                <h2 className='content-title'>Добро Пожаловать</h2>
                <div className='content-body '>
                    {props.content}
                </div>
            </div>    
        </main>

    </Fragment>
    
    )};

  export default Template;