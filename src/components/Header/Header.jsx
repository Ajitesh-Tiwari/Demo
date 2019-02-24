import React from 'react';
import './Header.style.scss';

class Header extends React.Component {
  render() {
    return (

      <div className='header'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <a className='navbar-brand' href='/'>
              <img src={process.env.PUBLIC_URL + '/img/sr_logo.png'} width='117' alt=''/>
            </a>
            <div className='header__button-section'>
              <button className='btn btn-primary my-2 my-sm-0'>Sign up</button>
              <button className='btn btn-outline-primary my-2 my-sm-0'>Login</button>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}

export default Header;