import React, { Component } from 'react'
import Page from './Page'

export default class MakeRequest extends Component {
    render() {
        return (
            <Page color="#cc99ff" background="#280051">
                <section className="grid-test">
                  <div className="row">
                    <div className="col-1-of-2">
                        col 1 of 2
                    </div>
                    <div className="col-1-of-2">
                    col 1 of 2
                    </div>
                  </div>  
                </section>
          </Page>
        )
    }
}
