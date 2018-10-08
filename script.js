function create_account(){
 var userEmail = document.getElementById().value;
 var userPass = document.getElementById().value;
 
 firebase.auth.createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
   var errorCode = error.code;
   var errorMessage = error.Message;
 });
}

function login(){
 var userEmail = document.getElementById().value;
 var userPass = document.getElementById().value;
 
 firebase.auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.Message;
 });
}
