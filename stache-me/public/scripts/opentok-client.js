$(function() {
  var session = TB.initSession(sessionId); // Sample session ID. 
			
	session.addEventListener("sessionConnected", sessionConnectedHandler);
	session.addEventListener("streamCreated", streamCreatedHandler);
	session.connect(apiKey, token); // OpenTok sample API key and sample token string. 

  function sessionConnectedHandler(event) {
     subscribeToStreams(event.streams);
     var publisher = TB.initPublisher(apiKey, 'tok', { height: 240, width: 320 });
     session.publish(publisher);
  }

  function streamCreatedHandler(event) {
    subscribeToStreams(event.streams);
  }

  function subscribeToStreams(streams) {
    for (i = 0; i < streams.length; i++) {
      var stream = streams[i];
      if (stream.connection.connectionId != session.connection.connectionId) {
        session.subscribe(stream);
      }
    }
  }
});
