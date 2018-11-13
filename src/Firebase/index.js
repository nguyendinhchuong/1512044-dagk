

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCbI1kIEcn9oaBCftIQG-u0LUI41SNTGso",
    authDomain: "dagk-114c0.firebaseapp.com",
    databaseURL: "https://dagk-114c0.firebaseio.com",
    projectId: "dagk-114c0",
    storageBucket: "dagk-114c0.appspot.com",
    messagingSenderId: "95709885274"
};

export { config as default };

//firebase.auth().signInWithRedirect(provider);

// firebase.auth().getRedirectResult().then(function (result) {
//     if (result.credential) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
// }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });