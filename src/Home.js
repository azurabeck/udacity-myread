import React, {Component} from 'react'
import book from './img/books.png'

class Home extends Component {
    render() {
        return (
            <div className='role'>

                <div className='col-md-6'> 
                    <div className='welcome-text'>
                        <p className='welcome-text-title'>Welcome to <span style={{color:'#FF6861'}}> B-STORY!! </span></p>
                        <p className='welcome-text-parag'>this is my first reactive project. 
                            <span style={{color:'#FF6861'}}> B-STORY</span> is a site that will be used to list books 
                            which I will read, am reading, or have read. </p>
                        <p className='welcome-text-parag'>Start your experiment by adding content to the 
                            "add new books to library" button, and enjoy!</p>
                        <p className='welcome-text-parag'>and, before I forget, after that, quit the pc and go read a book</p>
                    </div>
                </div>

                <div className='col-md-6'> 
                    <div className='welcome-img'> 
                        <img src={book}/> 
                    </div> 
                </div>
            </div>
        )
    }
}

export default Home