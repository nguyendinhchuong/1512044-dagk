import React, { Component } from 'react';
import './style.css'
import ChatBox from './ChatBox';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    getAllMessage = () => {

    }

    render() {
        let messages = this.props.messages.filter(message => {
            return message.keyRoom === this.props.keyRoom
        })
        console.log(messages)
        return (
            <div className="chat">
                <div class="chat-header clearfix">
                    <img className="fix" src={this.props.user.avatarUrl} alt="avatar" />

                    <div class="chat-about">
                        <div class="chat-with">{'Chat with ' + this.props.user.displayName}</div>
                        <div class="chat-num-messages">already 1 902 messages</div>
                    </div>
                    <i class="fa fa-star"></i>
                </div>
                <div class="chat-history">
                    <ul>
                        {
                            messages.map((message) => {
                                return (
                                    this.props.uid !== message.userID
                                        ?
                                        < li class="clearfix" >
                                            <div class="message-data align-right">
                                                <span class="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
                            <span class="message-data-name">{this.displayName}</span> <i class="fa fa-circle me"></i>

                                            </div>
                                            <div class="message other-message float-right">
                                                {message.type === 'text'
                                                    ? message.message
                                                    : <img src={message.message} alt="" />
                                                }
                                            </div>
                                        </li>
                                        : <li>
                                            <div class="message-data">
                                                <span class="message-data-name"><i class="fa fa-circle online"></i>{this.props.user.displayName}</span>
                                                <span class="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div class="message my-message">
                                                {message.type === 'text'
                                                    ? message.message
                                                    : <img src={message.message} alt="" />
                                                }
                                            </div>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ChatBox userID={this.props.user.providerData[0].uid} keyRoom={this.props.keyRoom} />
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.providerData[0].uid,
        displayName: state.firebase.auth.displayName,
        email: state.firebase.auth.email,
        messages: state.firestore.ordered.messages ? state.firestore.ordered.messages.map(c => c) : [],
    }
}
const mapDispatchToProps = {}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => {
        if (!props.uid) return []
        return [
            {
                collection: 'messages',
                orderBy: ['dateTime']
            }
        ]
    })
)(ChatRoom)