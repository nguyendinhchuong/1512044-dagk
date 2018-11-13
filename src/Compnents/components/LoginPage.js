import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
// import GoogleButton from 'react-google-button' // optional
import Welcome from './Welcome'

export const LoginPage = ({ firebase, auth }) => (
  <div>

    <div>
      {
        isEmpty(auth)
          ? <div>
            <button // <GoogleButton/> button can be used instead
              onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
            >Login With Google</button>
          </div>
          : <div>
            <button // <GoogleButton/> button can be used instead
              onClick={() => firebase.logout()}
            >Logout</button>
            <Welcome />
          </div>
      }
    </div>

  </div>
)

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

export default compose(
  firebaseConnect(), // withFirebase can also be used
  connect(({ firebase: { auth } }) => ({ auth }))
)(LoginPage)