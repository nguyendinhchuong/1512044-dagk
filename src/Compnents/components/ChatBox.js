import React, { Component } from 'react';
import './style.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            url: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    handleChangeLink = (e) => {
        this.setState({
            url: e.target.value
        })
    }
    handleSubmit = () => {
        let date = new Date()
        let dateTime = date.getTime()
        dateTime = dateTime.toString()
        this.props.firestore.add(
            { collection: 'messages' },
            {
                message: this.state.url,
                keyRoom: this.props.keyRoom,
                userID: this.props.userID,
                type: 'image',
                dateTime: dateTime
            })
    }
    saveMessage = () => {
        let date = new Date()
        let dateTime = date.getTime()
        dateTime = dateTime.toString()
        this.props.firestore.add(
            { collection: 'messages' },
            {
                message: this.state.message,
                keyRoom: this.props.keyRoom,
                userID: this.props.userID,
                type: 'text',
                dateTime: dateTime
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

                <i class="fa fa-file-o"></i>
                &nbsp;&nbsp;&nbsp;
                <i class="fa fa-file-image-o" data-toggle="modal" data-target="#myModal"></i>
                <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="text" onChange={this.handleChangeLink} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" >Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
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