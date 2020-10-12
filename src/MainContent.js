import React from 'react';
import './App.css';
import Inputs from './Inputs.js';
import Data from './Data.js';

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            loadData: false,
            city: "",
            country: "", 
            temp: "",
            desc: "",
            imhsrc: ""
        }
    }
    handleUp = (result) => {
        console.log(result)
        let x = result
        this.setState({
            city: x.name,
            country: x.sys.country,
            temp: Math.round(x.main.temp),
            desc: x.weather[0].main,
            imgsrc: x.weather[0].icon,
            loadData: true
        })
        console.log(this.state)

    }

    render() {
        return (
            <div id = "main-content">
            <Inputs handleUp = {this.handleUp}/>
            {this.state.loadData && <Data 
            city = {this.state.city}
            country = {this.state.country}
            temp = {this.state.temp}
            desc = {this.state.desc}
            imgsrc = {this.state.imgsrc}
            />}
            </div>
        )
    }
}

export default MainContent;