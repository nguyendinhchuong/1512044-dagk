import database, { firebase, GoogleAuthProvider as provider } from '../../Firebase/index';

export const login = (uid, displayName) => ({
    type: 'LOGIN',
    uid,
    displayName
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithRedirect(provider);
    }
}

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};