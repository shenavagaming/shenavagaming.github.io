firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  email = user.email;
  emailVerified = user.emailVerified; 
  window.prompt("Login Successful, Welcome " + email + "Email Verified : " + emailVerified);// The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

  } else {
    // No user is signed in.
    
  }
});



function create_account(){
 var userEmail = document.getElementById("email_id").value;
 var userPass = document.getElementById("pass_id").value;
 
 
 //firebase.auth.createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
   //var errorCode = error.code;
   //var errorMessage = error.message;
 //});
}

function login(){
 var userEmail = document.getElementById("email_id").value;
 var userPass = document.getElementById("pass_id").value;
 
 
         firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
}
