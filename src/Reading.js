import React, {Component} from 'react'

class Reading extends Component {

    render() {
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
                                    <span className='details-title'>Book page numbers: </span>
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


                <div>
                    <p className='header-links'>Also Reading</p>
                  
                    <div className="scrolling-wrapper">
                        <div className="card"><h2>Card</h2></div>
                        <div className="card"><h2>Card</h2></div>
                        <div className="card"><h2>Card</h2></div>
                        <div className="card"><h2>Card</h2></div>
                        <div className="card"><h2>Card</h2></div>
                    </div>

                </div>
                
            </div>
        )
    }

}

export default Reading