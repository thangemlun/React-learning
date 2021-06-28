import React, { Component } from 'react' ;
import './TrafficLight.css';

const RED = 0 ;
const ORANGE = 1 ;
const GREEN = 2 ;

class TrafficLight extends Component {
    constructor() {
        super();
        this.currentColor = RED ;

        setInterval(() => {
            this.currentColor = this.getNextColor(this.currentColor);
            console.log(this.currentColor);
        },1000);

    }

    getNextColor(color){
        switch(color){
            case RED :
                return ORANGE;
            case ORANGE : 
                return RED ;
            default:
                return RED;
        }
    }

    render() {
        return(
            <div className="TrafficLight">
                <div className="bulb red" ></div>
                <div className="bulb orange" ></div>
                <div className="bulb green" ></div>
            </div>
        );
    }
}

export default TrafficLight;