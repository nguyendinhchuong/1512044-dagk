import React, { Component } from 'react';
import './style.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'



class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
        this.props.getSearch(e.target.value);
    }
    render() {
        return (
            <div class="search">
                <input type="text" placeholder="search" onChange={this.handleChange} />
                <i class="fa fa-search"></i>
            </div>
        )
    }
}

export default Search;