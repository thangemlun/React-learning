import React, { Component } from 'react' ;
import './TrafficLight.css';
import classNames from 'classnames';
const RED = 0 ;
const ORANGE = 1 ;
const GREEN = 2 ;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor : GREEN 
        };

        setInterval(() => {
            this.setState ({
                currentColor : this.getNextColor(this.state.currentColor)
            });
        },1000);

    }

    getNextColor(color){
        switch(color){
            case GREEN :
                return ORANGE;
            case ORANGE : 
                return RED ;
            default:
                return GREEN;
        }
    }

    render() {
        const{ currentColor } = this.state;

        console.log('rendering ... ' , currentColor);
        return(
            <div className="TrafficLight">
                <div className={classNames('bulb','red',{
                    active: currentColor === RED  
                })}/>
                <div className={classNames('bulb','orange',{
                    active: currentColor === ORANGE  
                })} ></div>
                <div className={classNames('bulb','green',{
                    active: currentColor === GREEN  
                })} ></div>
            </div>
        );
    }
}

export default TrafficLight;