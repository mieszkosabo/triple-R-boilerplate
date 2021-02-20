import { firebase } from 'firebase';
export const loginWithEmail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const { user } = userCredential;
            console.log('signed in!');
            console.log(user);
        })
        .then(() => firebase.auth().currentUser.getIdToken(true))
        .then((idToken) => {
            console.log(idToken);
            return fetch('http://localhost:3001/', {
                headers: {
                    Authorization: `Bearer ${idToken}`
                }
            });
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};
