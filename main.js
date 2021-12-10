// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXX",
  measurementId: "XXXXXXXXXXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Listening from Form
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submitting the form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var surname = getInputVal('surname');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, surname, email, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert in 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    //Clear form
    document.getElementById('contactForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, surname, email, message){
    var newMessageRef = newMessageRef.push();
    newMessageRef.set({
    name: name,
    surname: surname,
    email: email,
    message: message
    });
}
