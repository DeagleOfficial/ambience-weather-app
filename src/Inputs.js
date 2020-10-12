import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';

class Inputs extends React.Component {

    constructor(props) {
        super()
        this.state = {
            searchTerm: "",
            data: {}
        }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    getData = (e) => {
        let api = 'https://api.openweathermap.org/data/2.5/weather?'
        let key = '&APPID=11c8e92be9bd346ea62a9e154d1b617c&units=metric'
        let url = api + 'q=' + this.state.searchTerm + key

        fetch(api + 'q=' + this.state.searchTerm + key)
        .then(res => res.json())
        .then(result => {
            let x = result
            this.setState({
                data: x
            })
            return result
        }).then(result => this.props.handleUp(result))

    }

    render() {
        return (
            <>
            <input id = "searchbar" type = "search" placeholder = "Search for a city" onChange = {this.handleChange}></input> 
            <button id = "searchbutton" type = "button" onClick = {this.getData}>
                <FontAwesomeIcon icon = {faSearch} />
            </button>
            </>
        )
    }
}

export default Inputs;