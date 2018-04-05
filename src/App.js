import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header'
import * as BookAPI from './BookApi'

import Home from './Home'
import Reading from './Reading'
import AddBook from './AddBooks'

import './css/home.css'

class App extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BookAPI.getAll().then((books) => {
          this.setState({ books })
          console.log(books)
        })
    }

    render() {
      return (
        <div>
            <Header />
             <div className='content-wrapper'> 

                <Route exact path='/' render={() => (                
                    <Home />
                )}/>

                <Route exact path='/reading' render={() => (                
                    <Reading />
                )}/>

                <Route exact path='/search-books' render={() => (                
                    <AddBook  books={this.state.books} />
                )}/>

            </div>  
            
        </div>
      )
    }

}

export default App