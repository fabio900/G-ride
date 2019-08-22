import React, { Component } from 'react';
import Card from './Cardui'
import tg1 from './images/tg1.jpg'
import tg3 from './images/tg3.jpg'
import tg6 from './images/tg6.jpg'


class card extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                     <Card imgsrc ={tg1} title ="Explore"
                     description = "hsjhjngbjsnarkhkagmlmhaangdf "
                     />
                    </div>
                    <div className="col-md-4" >
                    <Card imgsrc ={tg3} title ="seek"
                     description ="seek out the advekmk dijgsio
                        jknknskd"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc ={tg6}title ="Discover"
                    description = "jnjjgsdadhh ahkhsuh fsgujfe fiaknt "
                    />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default card;