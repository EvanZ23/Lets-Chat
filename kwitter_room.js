
//ADD YOUR FIREBASE LINKS HERE


var firebaseConfig = {
      apiKey: "AIzaSyCXqaV7nigp06ywvZorb78hSU_TrnL3fGE",
  authDomain: "lets-chat-33eac.firebaseapp.com",
  databaseURL: "https://lets-chat-33eac-default-rtdb.firebaseio.com",
  projectId: "lets-chat-33eac",
  storageBucket: "lets-chat-33eac.appspot.com",
  messagingSenderId: "559905794558",
  appId: "1:559905794558:web:9fb8abb4bd195c1a2f38af"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


   user_name = localStorage.getItem("UserName");
   document.getElementById("Welcome").innerHTML = "Welcome " + user_name;


function Room(){

     room_name = document.getElementById("Room_Name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose: "adding new user"
      });

      localStorage.setItem("Host",room_name);
      window.location = "kwitter_page.html"


}




function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {

            document.getElementById("output").innerHTML = "";

            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       
                  Room_names = childKey;
      //Start code
      console.log(Room_names);
                  room_row = "<div id = '"+ Room_names + "'  class = 'room_name'  onclick = 'reDirect_RoomName(this.id)'> #" + Room_names + "</div> <hr>"
                  document.getElementById("output").innerHTML += room_row;
      //End code
            });
      });
}
getData();


function reDirect_RoomName(room_name){

      localStorage.setItem("Host",room_name);
      window.location = "kwitter_page.html";
      
}

function log_out(){

      localStorage.removeItem("Host");
      localStorage.removeItem("UserName");
      window.location = "index.html";

}

