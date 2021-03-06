import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import * as BookAPI from './BookApi'

import Home from './Home'
import Reading from './Reading'
import SearchBooks from './SearchBooks'
import WantToRead from './WantRead'
import Read from './Read'

import './css/home.css'

class App extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BookAPI.getAll().then((books) => {
          this.setState({ books })
        })
    }

    updateShelf = (book, shelf) => {
        book.shelf = shelf;
        BookAPI.update(book, shelf).then( () => {
          this.setState({books: this.state.books.filter( (b) => b.id !== book.id).concat([ book ])});
        });
    };

    render() {
      return (
        <div>
            <Header />
             <div className='content-wrapper'> 

                <Route exact path='/' render={() => (                
                    <Home books={this.state.books}  updateShelf={this.updateShelf}/>
                )}/>

                <Route exact path='/reading' render={() => (                
                    <Reading books={this.state.books} updateShelf={this.updateShelf}/>
                )}/>

                <Route exact path='/want-to-read' render={() => (                
                        <WantToRead  books={this.state.books}  updateShelf={this.updateShelf} />
                )}/>
               
                <Route exact path='/read' render={() => (                
                    <Read  books={this.state.books}  updateShelf={this.updateShelf} />
                )}/>

                 <Route exact path='/search-books' render={() => (                
                    <SearchBooks  books={this.state.books} updateShelf={this.updateShelf} />
                )}/>
            </div>  
            <Footer />
            
        </div>
      )
    }

}

export default App