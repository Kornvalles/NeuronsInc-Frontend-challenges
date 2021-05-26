import React from 'react';

import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div style={Container}>
            <img src={logo} alt='logo' style={Logo} />
        </div>
    )
}

const Container = {
    position: 'relative',
    borderRadius: '15px',
    backgroundColor: '#fff',
    margin: '0 2em',
    padding: '.75em'
}

const Logo = {
    height: '18px',
    marginLeft: '1em'
}

export default Header;