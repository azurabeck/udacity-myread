import React, { Component } from 'react'
import * as BookAPI from './BookApi'

let titl
let subt
let auth
let scor
let desc
let imag
let page
let pDat
let publ


class WantToRead extends Component {

    state = {
        info: {}
    }

    getArray(index, book = {}, info) {

        this.setState(info = book)

        titl = book.title
        subt = book.subtitle
        auth = book.authors
        scor = book.averageRating
        desc = book.description
        imag = book.imageLinks.thumbnail
        page = book.pageCount
        pDat = book.publishedDate
        publ = book.publisher

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

    showInfo(info) {

        const infoDiv = document.getElementById('main-book')

        if (this.state.info !== {}) {
            infoDiv.style.display = 'block'
        } else {
            infoDiv.style.display = 'none'
        }

    }

    render() {

        const { books } = this.props
        let showWantToRead
        let status = "wantToRead"

        if (status) {
            showWantToRead = books.filter((book) => book.shelf === status)
        }

        return (

            <div>

                <div className='main-book' id='main-book' style={{ display: 'none' }}>
                    <div className='row'>

                        <div className='col-md-2'>
                            <div className="main-card" style={{
                                backgroundImage: 'url(' + `${imag}` + ')'
                            }}></div>
                        </div>

                        <div className='col-md-4'>

                            <span className='book-title'>{titl}</span>
                            <div className='line'></div>
                            <div className='desc-scroll'><p className='book-desc'>{desc}</p></div>

                        </div>

                        <div className='col-md-1'></div>

                        <div className='col-md-4 line-left' style={{ marginTop: '70px' }}>

                            <div className='row'>
                                <span className='details-title'>Title: </span>
                                <span className='details-desc'>{titl}</span>
                            </div>
                            <div className='row'>
                                <span className='details-title'>Subtitle: </span>
                                <span className='details-desc'>{subt}</span>
                            </div>
                            <div className='row'>
                                <span className='details-title'>Author: </span>
                                <span className='details-desc'>{auth}</span>
                            </div>
                            <div className='row'>
                                <span className='details-title'>Page numbers: </span>
                                <span className='details-desc'>{page}</span>
                            </div>
                            <div className='row'>
                                <span className='details-title'>Book Score: </span>
                                <span className='details-desc'>{scor}</span>
                            </div>
                            <div className='row'>
                                <span className='details-title'>Publisher: </span>
                                <span className='details-desc'>{publ}</span>
                            </div>
                            <div className='row'>
                                <span className='details-title'>Publisher Date: </span>
                                <span className='details-desc'>{pDat}</span>
                            </div>

                        </div>

                    </div>
                </div>


                <div className='shelf'>

                    <p className='header-links'>List of books I <strong>want to read</strong></p>

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
                                    <div className="book-shelf info"
                                        onClick={() => {
                                            this.getArray(index, book)
                                            this.showInfo()
                                        }}>
                                    </div>
                                    <div className="book-shelf changer">
                                        <select
                                            onClick={() => this.updateStatus(index, book)}
                                            onChange={() => window.location.reload()}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="wantToRead" id='wantToRead'>Actual status: Want to Read</option>
                                            <option value="currentlyReading" id='currentlyReading'>Currently Reading</option>
                                            <option value="read" id='read'>Read</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
              
                </div>


            </div>
        )
    }

}

export default WantToRead