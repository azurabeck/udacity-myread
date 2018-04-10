import React, {Component} from 'react'
import book from './img/books.png'
import { Link } from 'react-router-dom'

const bg = 'url(' + book + ')'

class Home extends Component {
    render() {

        const { books } = this.props
       
        let showOnlyRead
        let showOnlyReading
        let showWantToRead

        let statusRead = 'read'
        let statusReading = 'currentlyReading'
        let showOnlyWantToRead = 'wantToRead'
    
        if (statusRead) {
            showOnlyRead = books.filter((book) => book.shelf === statusRead)
        } 
        
        if (statusReading) {
            showOnlyReading = books.filter((book) => book.shelf === statusReading)
        }
    
        if (showOnlyWantToRead) {
            showOnlyWantToRead = books.filter((book) => book.shelf === showOnlyWantToRead)
        }

        return (
            <div className='row'>
                <div className="image-aboutus-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="lg-text">Welcome to <span style={{color:'#FF6861'}}> BS!! </span></h1>
                                <p>this is my first reactive project. 
                                    <span style={{color:'#FF6861'}}> B-STORY</span> 
                                    is a site that will be used to list books 
                                    which I will read, am reading, or have read.  </p>
                                    <p className='welcome-text-parag'>Start your experiment by adding content to the 
                                     "add new books to library" button, and enjoy!</p>
                                     <p className='welcome-text-parag'>and, before I forget, after that, quit 
                                     the pc and go read a book</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='shelf onHome'>
                    
                    <Link className='header-links' to='/reading'>

                    <p className='header-links'>List of books I'm <strong>Reading</strong></p>

                    <div className="scrolling-wrapper">

                        {showOnlyReading.map((book, index) => (
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

                                </div>
                            </div>
                        ))}

                    </div>

                    </Link>

                </div>

                <div className='shelf onHome'>
                    
                    <Link className='header-links' to='read'>

                    <p className='header-links'>List of books I've <strong>Read</strong></p>

                    <div className="scrolling-wrapper">

                        {showOnlyRead.map((book, index) => (
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
                                 

                                </div>
                            </div>
                        ))}

                    </div>

                    </Link>

                </div>

                <div className='shelf onHome' style={{marginBottom:100}}>

                    <Link className='header-links' to='want-to-read'>
                    <p className='header-links'>List of books I <strong>Want to read</strong></p>

                    <div className="scrolling-wrapper">

                        {showOnlyWantToRead.map((book, index) => (
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

                                </div>
                            </div>
                        ))}

                    </div>
                    </Link>
                </div>
                
            </div>
        )
    }
}

export default Home