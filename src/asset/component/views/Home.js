import React, { Component } from 'react'
import Page from './Page';
import Header from '../headerComponent/Header'

export default class Home extends Component {
    render() {
        return (
           <Page className= "bg-image">
           <Header/>
           </Page>
        )
    }
}
