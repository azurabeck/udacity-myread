import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'

class WantToRead extends Component {


    render() {

        const { books } = this.props
        let showWantToRead        
        let status = "wantToRead"

        if ( status ) {
            showWantToRead = books.filter((book) => book.shelf === status)            
        }

        return (

            <div>

                <div className='main-book'>
                    <div className='row'>

                        <div className='col-md-2'>
                            <div className="main-card"></div>
                        </div>
                        
                        <div className='col-md-4'>

                            <span className='book-title'>Book title</span>
                            <div className='line'></div>
                            <p className='book-desc'>Lorem ipsum</p>

                        </div>

                        <div className='col-md-1'></div>

                        <div className='col-md-4 line-left' style={{marginTop:'70px'}}>
                        
                                <div className='row'>
                                    <span className='details-title'>Author: </span>
                                    <span className='details-desc'>Author Name</span>
                                </div>
                                <div className='row'>
                                    <span className='details-title'>Page numbers: </span>
                                    <span className='details-desc'>860</span>
                                </div>
                                <div className='row'>
                                    <span className='details-title'>Book Score: </span>
                                    <span className='details-desc'>10.0</span>
                                </div>
                                <div className='row'>
                                    <span className='details-title'>Book Series: </span>
                                    <span className='details-desc'>Yes </span>
                                </div>

                        </div>

                    </div>
                </div>


                <div className='shelf'>
                   
                    <p className='header-links'>Also want to read</p>
                  
                    <div className="scrolling-wrapper">

                            {showWantToRead.map((book, index) => (
                                <div className="book book-scroll" key={index}>
                                    
                                        <div className="book-top">
    
                                            <div 
                                            className="book-cover" 
                                            style={{ 
                                                width: 128, 
                                                height: 193, 
                                                backgroundImage: 'url(' + `${book.imageLinks.thumbnail}` + ')' 
                                                }}>
                                            </div>
                                            <div className="book-shelf info"></div>
                                            <div className="book-shelf changer">
                                                <select>
                                                    <option value="none" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                                    
                                        </div>
                                </div>
                            ))} 

                    </div>   

                    <div className='shelf-footer'>
                        <Link className='header-links' to='/search-books'> Add new books on your library! </Link>
                    </div>
                </div>
                

            </div>
        )
    }

}

export default WantToRead