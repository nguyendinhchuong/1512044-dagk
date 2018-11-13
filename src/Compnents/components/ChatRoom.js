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
        console.log(this.props.messages)
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
                        <li class="clearfix">
                            <div class="message-data align-right">
                                <span class="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
                            <span class="message-data-name">Olia</span> <i class="fa fa-circle me"></i>

                            </div>
                            <div class="message other-message float-right">
                                Hi Vincent, how are you? How is the project coming along?
                        </div>
                        </li>

                        <li>
                            <div class="message-data">
                                <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                                <span class="message-data-time">10:12 AM, Today</span>
                            </div>
                            <div class="message my-message">
                                Are we meeting today? Project has been already finished and I have results to show you.
                        </div>
                        </li>

                        <li class="clearfix">
                            <div class="message-data align-right">
                                <span class="message-data-time">10:14 AM, Today</span> &nbsp; &nbsp;
                            <span class="message-data-name">Olia</span> <i class="fa fa-circle me"></i>

                            </div>
                            <div class="message other-message float-right">
                                Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you
                                faced any problems at the last phase of the project?
                        </div>
                        </li>

                        <li>
                            <div class="message-data">
                                <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                                <span class="message-data-time">10:20 AM, Today</span>
                            </div>
                            <div class="message my-message">
                                Actually everything was fine. I'm very excited to show this to our team.
                        </div>
                        </li>

                        <li>
                            <div class="message-data">
                                <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                                <span class="message-data-time">10:31 AM, Today</span>
                            </div>
                        </li>

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
                queryParams: ['orderByKey']
            }
        ]
    })
)(ChatRoom)