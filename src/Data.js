import React from 'react';
import './App.css';
class Data extends React.Component {

    constructor(props) {
        super()
        this.state = {
            city: props.city,
            country: props.country,
            temp: props.temp,
            desc: props.desc,
            imgsrc: 'http://openweathermap.org/img/wn/' + props.imgsrc + '@2x.png'
        }
    }
    
    render() {
        return (
            <div id = "Data">
            <p>{this.state.city}, {this.state.country}</p>
            <h1>{this.state.temp} &deg;C</h1>
            <div id = "img-border">
                <img width = "100" src = {this.state.imgsrc}></img>
            </div>
            <p>{this.state.desc}</p>
            </div>
        )
    }
}

export default Data;