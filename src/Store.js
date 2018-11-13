import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'


import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './Firebase'
import { initialState, rootReducer } from './Compnents/Reducers/rootReducer'

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

const enhancers = [
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
        userProfile: 'users',
        useFirestoreForProfile: true,
    })
]

const composedEnhancers = compose(
    ...enhancers
)

const store = createStore(rootReducer, initialState, composedEnhancers)


export default store