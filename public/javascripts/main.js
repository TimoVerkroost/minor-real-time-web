(function () {
  /* global io */
  // Check if socket is available
  if (io()) {
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
      var audioNotification;
      if (socket.id === id) {
        status = 'current';
        user = 'You';
        // Notification sounds for sender
        audioNotification = new Audio('../sounds/knob.mp3');
        audioNotification.play();
      } else {
        status = 'other';
        if (name) {
          user = name;
        } else {
          user = 'Anonymous';
        }
        // Notification sounds for receivers
        if (name === 'Chanel') {
          audioNotification = new Audio('../sounds/murloc.mp3');
          audioNotification.play();
        } else if (name === 'Timo') {
          audioNotification = new Audio('../sounds/goatScream.mp3');
          audioNotification.play();
        } else if (name === 'Colin') {
          audioNotification = new Audio('../sounds/doh.mp3');
          audioNotification.play();
        } else if (name === 'Shyanta') {
          audioNotification = new Audio('../sounds/yoshi.mp3');
          audioNotification.play();
        } else if (name === 'Elton') {
          audioNotification = new Audio('../sounds/cookieMonster.mp3');
          audioNotification.play();
        } else if (name === 'Titus') {
          audioNotification = new Audio('../sounds/penguin.mp3');
          audioNotification.play();
        } else {
          audioNotification = new Audio('../sounds/capisci.mp3');
          audioNotification.play();
        }
      }
      var messagesContainer = document.getElementById('messages');
      var chatContainer = document.getElementById('chatContainer');
      messagesContainer.innerHTML += '<li data-name="' + user + '" class=" ' + status + '"><span>' + msg + '</span></li>';
      // Jump to last message
      chatContainer.scrollTop = chatContainer.scrollHeight;
    });
  }
})();
