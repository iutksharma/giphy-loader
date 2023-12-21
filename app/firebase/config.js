import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCzYPyA4J-2E42n_6GjST7FR8QliHGQFnI",
    authDomain: "giphy-d19fe.firebaseapp.com",
    projectId: "giphy-d19fe",
    storageBucket: "giphy-d19fe.appspot.com",
    messagingSenderId: "1076885936144",
    appId: "1:1076885936144:web:e66087792ef8d67ebc1295"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export { app, auth }