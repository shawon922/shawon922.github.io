'use strict';
let localStream = null;
let peer = null;
let existingCall = null;

navigator.mediaDevices.getUserMedia({video: true, audio: true})
  .then(function (stream) {
    $("#my-video").srcObject = stream;
    console.log("User media stream: ", stream);
  })
  .catch(function (err) {
    console.log("User media error: ", err);
  });

peer = new Peer({
  key: '4d6c4179-3ee7-4667-a8db-199cffa91647',
  debug: 3
});

peer.on('open', function () {
  $('#my-id').text(peer.id);
});

peer.on('error', function (err) {
  alert(err.message);
});

peer.on('close', function () {
});

peer.on('disconnected', function () {
});


