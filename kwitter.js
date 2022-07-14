function Log(){
      user_name = document.getElementById("Key").value;
      localStorage.setItem("UserName", user_name);
      window.location = "kwitter_room.html";
}                          

