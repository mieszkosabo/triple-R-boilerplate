import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../firebise-config';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
