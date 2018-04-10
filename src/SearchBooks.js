import React, { Component } from 'react'
import * as BookAPI from './BookApi'

import escapeRegExp from 'escape-string-regexp'

class AddBook extends Component {

    state = {
      query: ''
    }
    
    updateQuery = (query) => {
      this.setState({query})
    }

    updateStatus(index, book = {}) {

        const read = document.getElementById('read')
        const reading = document.getElementById('currentlyReading')
        const wantToRead = document.getElementById('wantToRead')
        if (read.selected) {
            BookAPI.update(book, 'read')
        }
        else if (reading.selected) {
            BookAPI.update(book, 'currentlyReading')
        }
        else if (wantToRead.selected) {
            BookAPI.update(book, 'wantToRead')
        }
    }


    render() {

        const { books } = this.props

        console.log(books)
        const { query } = this.state

        let showingBooks
        if(query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((book) =>
                 match.test(book.title) || 
                 match.test(book.authors) ||
                 match.test(book.publisher) || 
                 match.test(book.categories))
        } else {
            showingBooks = books
        }


        return(
          <div className="search-books">

            <div className="search-books-bar">
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title, author, categories or publisher" value={query} 
                  onChange={(event) => this.updateQuery(event.target.value)} />

              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
                  {showingBooks.map((book, index) => (
                    <div className='col-md-2' key={index}>
                        <div className="book">
                            <div className="book-top">
                                <div 
                                  className="book-cover" 
                                  style={{ 
                                    width: 128, 
                                    height: 193, 
                                    backgroundImage: 'url(' + `${book.imageLinks.thumbnail}` + ')' 
                                    }}>
                                </div>
                                <div className="book-shelf changer">
                                        <select 
                                            onClick={() => this.updateStatus(index, book)}
                                            onChange={() => window.location.reload()}>
                                        <option value="none" disabled>Move to...</option>
                                        <option> Set new status</option>
                                        <option value="currentlyReading" id='currentlyReading'>Currently Reading</option>
                                        <option value="wantToRead" id='wantToRead'>Want to Read</option>
                                        <option value="read" id='read'>Read</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </div>
                  ))} 
              </ol>
            </div>

          </div>
        )
    }
}

export default AddBook