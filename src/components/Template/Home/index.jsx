import React from 'react';

import './Home.scss';


function Home(){

 return( 

<div className='custom-style'>
    <figure className="figure">
        <img src={require("../../../assets/img/content_img.jpg")} className="figure-img img-fluid rounded" alt="..."/>
        <figcaption className="figure-caption text-end">All you need for photo.</figcaption>
    </figure>
    <div>   
        <h3 className='content-body-title'>Post Office scandal: lives ruined and lives taken by false accusations</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quaerat impedit odio deleniti quisquam accusantium explicabo, autem culpa veritatis quia soluta illum voluptate nihil aperiam illo incidunt voluptatibus eius obcaecati?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quaerat impedit odio deleniti quisquam accusantium explicabo, autem culpa veritatis quia soluta illum voluptate nihil aperiam illo incidunt voluptatibus eius obcaecati?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quaerat impedit odio deleniti quisquam accusantium explicabo, autem culpa veritatis quia soluta illum voluptate nihil aperiam illo incidunt voluptatibus eius obcaecati?</p>

    </div>
</div>

)};

export default Home;