(function () {
  var socket = io();
  // Chat box
  var chatBox = document.getElementById('chatBox');
  chatBox.addEventListener('submit', function (event) {
    var messageBox = document.getElementById('m');
    var nameBox = document.getElementById('name');
    if (messageBox.value.length >= 3) {
      socket.emit('chat message', messageBox.value, nameBox.value);
      chatBox.classList.remove('invalid');
      messageBox.value = '';
    } else {
      chatBox.classList.add('invalid');
    }
    messageBox.focus();
    event.preventDefault();
    return false;
  });
  // Name box
  var nameForm = document.getElementById('nameBox');
  nameForm.addEventListener('submit', function (event) {
    var messageBox = document.getElementById('m');
    messageBox.focus();
    event.preventDefault();
    return false;
  });
  socket.on('chat message', function (msg, name, id) {
    // Check if user is current user or other
    var status;
    var user;
    if (socket.id === id) {
      status = 'current';
      user = 'You';
    } else {
      status = 'other';
      if (name){
        user = name;
      } else {
        user = "Anonymous";
      }
    }
    var messagesContainer = document.getElementById('messages');
    var chatContainer = document.getElementById('chatContainer');
    messagesContainer.innerHTML += '<li data-name="' + user + '" class=" ' + status + '"><span>' + msg + '</span></li>';
    // Jump to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
    if (name === "Chanel") {
      var audioChanel = new Audio('../sounds/murloc.mp3');
      audioChanel.play();
    }
    if (name === "Timo") {
      var audioTimo = new Audio('../sounds/goatScream.mp3');
      audioTimo.play();
    }
  });
})();
