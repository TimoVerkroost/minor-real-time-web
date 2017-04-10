(function () {
  var socket = io();
  var chatBox = document.getElementById("chatBox");
  chatBox.addEventListener("submit", function (event) {
    var messageBox = document.getElementById("m");
    if (messageBox.value.length >= 3) {
      socket.emit('chat message', messageBox.value);
      chatBox.classList.remove("invalid");
      messageBox.value = "";
    } else {
      chatBox.classList.add("invalid");
    }
    messageBox.focus();
    event.preventDefault();
    return false;
  });
  socket.on('chat message', function(msg, id){
    // Check if user is current user or other
    var status;
    if (socket.id === id) {
      status = "current";
    } else {
      status = "other";
    }
    var messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML += '<li class=" ' + status + '"><span>' + msg + '</span></li>';
    // Jump to last message
    var lastMessage = document.querySelector("#messages li:last-child");
    messagesContainer.scrollTop = lastMessage.offsetTop;
  });
})();