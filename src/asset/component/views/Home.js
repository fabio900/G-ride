import React, { Component } from 'react'
import Page from './Page';
import Card from '../cardui/Card'
import Header from '../headerComponent/Header'

export default class Home extends Component {
    render() {
        return (
           <Page>
           <Header/>

           <Card/>
           
           </Page>
        )
    }
}
