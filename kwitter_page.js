
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
function Go_back() {
  localStorage.removeItem("Host");
  localStorage.removeItem("UserName");
  window.location = "index.html";

}

room_name = localStorage.getItem("Host");
user_name = localStorage.getItem("UserName");

function send() {
  my_msg = document.getElementById("Msg_Send").value;

  firebase.database().ref(room_name).push({
    name: user_name,
    likes: 0,
    message: my_msg


  });
  document.getElementById("Msg_Send").value = "";
}

function getData() {
  firebase.database().ref("/" + room_name).on("value", function (snapshot) {

    document.getElementById("page").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      child_data = childSnapshot.val();
      if (childKey != "purpose") {
        message_id = childKey;
        message_data = child_data;

        user_Name = message_data['name'];
        user_Likes = message_data['likes'];
        user_Message = message_data['message'];

        name_tag = "<h3>" + user_Name + "</h3> <br>";


        message_tag = "<h3>" + user_Message + "</h3> <br>";

        like_button = "<button id='" + message_id + "' onclick = 'update_likes(this.id)'  value = " + user_Likes + "> <span class = 'glyphicon glyphicon-thumbs-up'> </span> Like: " + user_Likes + "</button> <hr>";

        row = name_tag + message_tag + like_button;

        document.getElementById("page").innerHTML += row;

      }

    });

  });

}

getData();

function update_likes(button_id) {

  likes = document.getElementById(button_id).value;
  update_like = Number(likes) + 1;
  firebase.database().ref(room_name).child(button_id).update({
    likes: update_like
  }

  );

}
