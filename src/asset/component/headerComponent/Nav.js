import React, { Component } from 'react'
import Link from 'react-router-dom/Link';

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav">
            <Link 
              to={{
                pathname: '/',
                state: { prev: false },
              }} 
              className="nav__link"
            >
              Home
            </Link>
            <Link 
              to={{
                pathname: '/make request',
                state: { prev: true },
              }}
              className="nav__link"
            >
              make request
            </Link>
          </nav>
            
        )
    }
}
