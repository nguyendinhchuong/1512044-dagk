import React, { Component } from 'react';
import './style.css';
import PeopleList from './PeopleList';
import ChatRoom from './ChatRoom';

class Home extends Component{
    render(){
        return(
            <div className="container clearfix">
                <PeopleList />
                <ChatRoom />
            </div>
        )
    }
}

export default Home