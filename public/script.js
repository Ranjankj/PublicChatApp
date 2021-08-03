
let userInput = document.querySelector(".user-input");
let chatwindow = document.querySelector(".chat-window");
let myName = document.querySelector(".me .user-name");
let onlineList = document.querySelector(".online-list");
let username = prompt("Enter your name: ");
myName.textContent = username;

userInput.addEventListener("keypress", function (e) {

  if (e.key == "Enter") {
    if (userInput.value) {
      let chatDiv = document.createElement("div");
      chatDiv.classList.add("chat");
      chatDiv.classList.add("right");
      chatDiv.textContent = username + " : " + userInput.value;

      chatwindow.append(chatDiv);
      socket.emit("chat", { username, chat: userInput.value });
      userInput.value = "";

      chatwindow.scrollTop = chatwindow.scrollHeight;


    }


  }
})