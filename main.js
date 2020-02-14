// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyC0g2HFccY7Ksk1NU_O_N_qE8U69T5PKlU",
    authDomain: "portfolio-19c6b.firebaseapp.com",
    databaseURL: "https://portfolio-19c6b.firebaseio.com",
    projectId: "portfolio-19c6b",
    storageBucket: "portfolio-19c6b.appspot.com",
    messagingSenderId: "853323510408",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('firstname')
    var name = getInputVal('lastname');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name,  email,  message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstname,
      lastname: name,
      email:email,
      message:message
    });
  }