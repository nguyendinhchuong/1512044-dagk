import React, { Component } from 'react';
import './style.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    saveMessage = () => {
        this.props.firestore.add(
            { collection: 'messages' },
            {
                message: this.state.message,
                keyRoom: this.props.keyRoom,
                userID: this.props.userID,
                type: 'text'
            })
    }
    render() {
        return (
            <div className="chat-message clearfix">
                <textarea
                    name="message-to-send"
                    id="message-to-send"
                    placeholder="Type your message"
                    rows="3"
                    onChange={this.handleChange}
                ></textarea>

                <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-file-image-o"></i>

                <button onClick={this.saveMessage}>Send</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.providerData[0].uid,
        email: state.firebase.auth.email,
        users: state.firestore.ordered.users ? state.firestore.ordered.users.map(c => c) : [],
    }
}
const mapDispatchToProps = {}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect()
)(ChatBox)