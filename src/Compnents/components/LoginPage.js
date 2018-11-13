import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import GoogleButton from 'react-google-button' 
import Welcome from './Welcome'
import './style.css'

export const LoginPage = ({ firebase, auth }) => (
  <div>

    <div>
      {
        isEmpty(auth)
          ? <div>
            <GoogleButton className="btn-custom"
              onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
            >Login With Google</GoogleButton>
          </div>
          : <div>
            <button className="btn btn-primary btn-custom"
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