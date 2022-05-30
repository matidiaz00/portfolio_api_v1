const firebaseConfig = {
    apiKey: "AIzaSyAMXi68UvU338mChuGrRZzEWsDDhx_LXco",
    authDomain: "matidiaz-f3c64.firebaseapp.com",
    databaseURL: "https://matidiaz-f3c64.firebaseio.com",
    projectId: "matidiaz-f3c64",
    storageBucket: "matidiaz-f3c64.appspot.com",
    messagingSenderId: "625117640370",
    appId: "1:625117640370:web:80b4d97ca2c754767d3bab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const cookie_name = 'firebase_token';
const firebase_token = getCookie(cookie_name);
const account_url = 'http://localhost:3001/auth/account';