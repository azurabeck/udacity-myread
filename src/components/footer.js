import React , { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {

    render(){
        return(
            <div className='app-footer'>
                <div className='app-footer-menu'>
                     <Link className='header-links' to='/search-books'> Add new books on your library! </Link>
                </div>
            </div>
        )
    }

}

export default Footer