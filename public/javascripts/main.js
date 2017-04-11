(function () {
  var socket = io();
  var chatBox = document.getElementById('chatBox');
  chatBox.addEventListener('submit', function (event) {
    var messageBox = document.getElementById('m');
    if (messageBox.value.length >= 3) {
      socket.emit('chat message', messageBox.value);
      chatBox.classList.remove('invalid');
      messageBox.value = '';
    } else {
      chatBox.classList.add('invalid');
    }
    messageBox.focus();
    event.preventDefault();
    return false;
  });
  socket.on('chat message', function (msg, id) {
    // Check if user is current user or other
    var status;
    if (socket.id === id) {
      status = 'current';
    } else {
      status = 'other';
    }
    var messagesContainer = document.getElementById('messages');
    var chatContainer = document.getElementById('chatContainer');
    messagesContainer.innerHTML += '<li class=" ' + status + '"><span>' + msg + '</span></li>';
    // Jump to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
    if (msg === "Chanel") {
      var audio = new Audio('../sounds/messageSound.mp3');
      audio.play();
    }
  });
})();
