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
 
 window.alert(userEmail + " " + userPass);
 //firebase.auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  //var errorCode = error.code;
  //var errorMessage = error.message;
 //});
}
