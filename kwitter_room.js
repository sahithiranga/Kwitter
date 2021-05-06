
//ADD YOUR FIREBASE LINKS HERE
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
var firebaseConfig = {
      apiKey: "-JFEnh-32ISIl3DllOYsGg7O4r83tMA8",
      authDomain: "classtest-928da.firebaseapp.com",
      databaseURL: "https://classtest-928da-default-rtdb.firebaseio.com",
      projectId: "classtest-928da",
      storageBucket: "classtest-928da.appspot.com",
      messagingSenderId: "319271945657",
      appId: "1:319271945657:web:30b933598fc3161b0f6268"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class ='room_name' id=" +room_names+"onclick = 'redirectToRoomName(this.id)' >#" + room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_page.html";
}

function send()
{
      msg = document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}
