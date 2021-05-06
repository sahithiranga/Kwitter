
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-JFEnh-32ISIl3DllOYsGg7O4r83tMA8",
    authDomain: "classtest-928da.firebaseapp.com",
    databaseURL: "https://classtest-928da-default-rtdb.firebaseio.com",
    projectId: "classtest-928da",
    storageBucket: "classtest-928da.appspot.com",
    messagingSenderId: "319271945657",
    appId: "1:319271945657:web:30b933598fc3161b0f6268"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}