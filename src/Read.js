import React, { Component } from 'react'
import { Link } from 'react-router-dom'

let titl
let subt
let auth
let scor
let desc
let imag
let page
let pDat
let publ

class Read extends Component {

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

    render() {

        const { books } = this.props
        let showOnlyRead
        let status = 'read'

        if (status) {
            showOnlyRead = books.filter((book) => book.shelf === status)
        }

        return (

            <div>

                <div className='main-book'>
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

                    <p className='header-links'>Also Read</p>

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
                                    <div className="book-shelf info" onClick={() => this.getArray(index, book)}></div>
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

export default Read