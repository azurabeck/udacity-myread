import React, {Component} from 'react'
import book from './img/books.png'


const bg = 'url(' + book + ')'

class Home extends Component {


    render() {
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
            </div>
        )
    }
}

export default Home