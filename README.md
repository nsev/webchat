[![Build Status](https://travis-ci.org/nsev/webchat.svg?branch=master)](https://travis-ci.org/nsev/webchat)

# Description

Based on the socket.io [tutorial](http://socket.io/get-started/chat/)

Mostly for testing/playing with Socket.IO and AngularJS, but will at some point put a bit more work in on the nodejs-side of things. Other used technologies include jade and stylus.

# Basic Usage

For development you need to start gulp 

```
gulp
```

and the node-server

```
node server/index.js
```

If you just want to build the stuff for the front-end. Currently doest not minify js, but does concat it. 
```
gulp build
```