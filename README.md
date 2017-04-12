# Minor Real-Time web chat app
Real-Time chat app with websockets.

Chat app: [Live demo](https://rtw-tv-1337.herokuapp.com/)

## Used packages
* [x] Socket.io for real-time updates.
* [x] Express server.
* [x] Compression for gzip.
* [x] Handlebars for templating.

## Finished features
* [x] Own chats right, other users chat left.
* [x] Notification sound.
  * [x] See also the easter egg section :rabbit:
* [x] Chats start from bottom and goes up, so the latest message is on the bottom.
* [x] Auto scroll to bottom when a message is added.
* [x] Option to use an username.
* [x] Removed jQuery.

## Wishlist
* [ ] Multiple chat rooms.
* [ ] Save messages in database, so the user doesn't end up with a clear chat when reloading.
* [ ] Login system so only authorized users can use the chat.
* [ ] Less bugs on mobile devices.
* [ ] Upload images.
* [ ] Add message when user connected to chat room.

## Build / Install and start project

### Clone this repo

```
  git clone https://github.com/TimoVerkroost/minor-real-time-web
  cd minor-real-time-web
```

### Install the dependencies
```
npm install
```

### Build CSS and JS
This will build the minified and cleaned CSS and JavaScript files.
```
npm run build
```

### Start server
```
npm start
```

### Start server with live updates
```
npm run start-update
```

### Watch changes
```
npm run watch
```

## Easter eggs
* When you are a specific user.
  * "Titus"   = Penguin :penguin:
  * "Elton"   = Cookie monster :cookie:
  * "Chanel"  = Murloc :frog:
  * "Colin"   = Homer Simpson "Doh!" :persevere:
  * "Shyanta" = Yoshi :turtle:
  * "Timo"    = Goat scream :goat:

## Licence
MIT © Timo Verkroost
