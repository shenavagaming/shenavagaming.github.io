firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  email = user.email;
  emailVerified = user.emailVerified;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

  } else {
    // No user is signed in.
    window.prompt("You are not logged in");
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
 
 
 firebase.auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
 });
}
