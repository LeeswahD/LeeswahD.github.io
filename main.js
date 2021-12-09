// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1zAqLtuTywaQVoSfWWjAtToh1Y_TF1U",
  authDomain: "firstproject-334607.firebaseapp.com",
  projectId: "firstproject-334607",
  storageBucket: "firstproject-334607.appspot.com",
  messagingSenderId: "288202342377",
  appId: "1:288202342377:web:8a225f85a6319efeea9578",
  measurementId: "${config.measurementId}"
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