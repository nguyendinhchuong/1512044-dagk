import React, { Component } from 'react';
import './style.css'

class ChatBox extends Component {
    render() {
        return (
            <div className="chat-message clearfix">
                <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

                <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-file-image-o"></i>

                <button>Send</button>
            </div>
        )
    }
}
export default ChatBox;