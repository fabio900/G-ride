import React, { Component } from 'react'
// import Carousel from './carousel/Carousel'


export default class Header extends Component {
    render() {
        return (
            
           <header className = "bg-image">
            <div className = "heading-wrap">
            <div className = "heading-primary">
            <h1>Discover <br/>Ghana</h1>
            </div>
            <div className="heading-secondary">
                <p>Emabck on a journey</p>
                <p>See beautiful landscapes and cultures</p> 
                <p>Experince a journey of a lifetime</p>
                <a href="#" className ="btn btn-white">Get Started</a>
            </div>
           

            
            </div>
           </header>
        )
    }
}
