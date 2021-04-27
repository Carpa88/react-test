import React, { useState }  from 'react';

import './SingIn.scss';

function SingIn(props){
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        if ( !(props.userName && pass) ) {
          setError('Логин и пароль обательны для заполнения!');
          return
        }
        localStorage.setItem('login', props.userName);
        props.switchPage('Home');
      }

    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if (name === 'login') {
          props.setUserName(value);
        } else {
          setPass(value);
        }
        setError(null);
    }

    return( 
    <div className='row'>
      <div className="col-4 sing-in">
        <h3>Авторизация</h3>
        <form id='sing-in-form' onSubmit={onSubmit}>
            <input value={props.userName} name='login' onChange={onChange} className='sing-in-form-input' type='text' placeholder='Введите логин'></input>
            <input value={pass} name='pass' onChange={onChange} className='sing-in-form-input' type='text' placeholder='Введите пароль'></input>
            {error && <p className="error-text">{error}</p>}
            <label className="form-check-label" htmlFor="flexCheckDefault">
                <input type='checkbox' className="form-check-input" id="flexCheckDefault"/>
                Запомнить меня
            </label>
            
            <button className="btn btn-primary sing-in-form-submit" type="submit" form="sing-in-form">Войти </button>
        </form>
      </div>
    </div>
    )
  };

  export default SingIn;