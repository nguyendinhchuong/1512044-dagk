import React, { Component } from 'react';
import './style.css';
import PeopleList from './PeopleList';
import ChatRoom from './ChatRoom';

class Home extends Component{
    constructor(){
        super();
        this.state={
            user:null,
            key:null
        }
    }
    getFriend = (key, user)=>{
        this.setState({
            user:user,
            key:key
        })
    }
 
    render(){
        return(
            <div className="cus-container cus-clearfix">
                <PeopleList getFriend={this.getFriend}/>
                {
                    this.state.user
                    ?<ChatRoom user={this.state.user} keyRoom={this.state.key}/>
                    :<div className="stand-by"><span className="center-text">Welcome to Firebase Chat app</span></div>
                }
                
            </div>
        )
    }
}

export default Home