import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'

class Header extends Component {
    render() {
        return (
            <header className='app-header'>
                <Link to='/'> <img className='app-logo' src={logo} /> </Link>
                <div className='app-menu'>
                    <Link className='header-links' to='/reading'> Reading </Link>
                    <Link className='header-links' to='/want-to-read'> Want to Read </Link>
                    <Link className='header-links' to='/read'> Read </Link>
                </div>

            </header>
        )
    }
} 

export default Header