import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './Home'
import Reading from './Reading'
import './css/home.css'

class App extends Component {

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

            </div>  
            
            <Footer />    
        </div>
      )
    }

}

export default App