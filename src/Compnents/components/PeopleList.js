import React, { Component } from 'react';
import './style.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Search from './Search'


class PeopleList extends Component {
    constructor() {
        super();
        this.state = {
            searchResult: ''
        }
    }
    getFriend = (userID, user) => {
        let user1 = this.props.uid.slice(0, 6)
        let user2 = userID.slice(0, 6)

        let key = parseInt(user1, 10) + parseInt(user2, 10)
        return this.props.getFriend(key,user);
    }
    getSearch = (search) => {
        this.setState({
            searchResult: search
        })
    }
    render() {
        let users = this.props.users.filter((user) => {
            return user.displayName.indexOf(this.state.searchResult) !== -1;
        })
        return (
            <div className="people-list">
                <Search getSearch={this.getSearch} />
                <ul className="list">
                    {users.map((user) => {
                        return (
                            <li className="clearfix" onClick={() => this.getFriend(user.providerData[0].uid, user)}>
                                <img className="fix" src={user.avatarUrl} alt="avatar" />
                                <div class="about">
                                    <div className="name">{user.displayName}</div>
                                    <div className="status">
                                        <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// export default compose(
//     firebaseConnect(), // withFirebase can also be used
//     firestoreConnect(),
//     connect(({ firestore: { users } }) => ({ users }))


// )(PeopleList)
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
    firestoreConnect((props) => {
        if (!props.uid) return []
        return [
            {
                collection: 'users'
            }
        ]
    })
)(PeopleList)