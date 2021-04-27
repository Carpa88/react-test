import React from 'react';

import './Users.scss';
import DB from '../../../assets/db.json';


function Users(){

 return( 
        <table className="table-lg table-sm align-middle table-borderless table-custom">
                <thead className='thead'>
                    <tr>
                    <td scope="col"></td>
                    <td scope="col">Ф.И.О.</td>
                    <td scope="col">E-mail</td>
                    <td scope="col">Телефон</td>
                    <td scope="col">Организация</td>
                    </tr>
                </thead>
            <tbody>
                {
                    DB.lists.map(item => (
                        <tr key={item.id}>
                            <td scope="row"><img src={require (`../../../assets/img/${item.img}`)} alt="photo"/></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.organization}</td>
                        </tr>  
                    ))
                }
                
            </tbody>
        </table>
)};

export default Users;