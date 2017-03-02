console.log("Listen port 8082 on WebSocket...");

var wsserver = new require('ws');

var clients = {};

var wss = new wsserver.Server({
	port: 8082
});



wss.on('connection', function connection(ws) {
	
  ws.on('message', function incoming(data) {
    var a = JSON.parse(data);
    switch(a.type){
		case "AUTH" : 
			console.log("AUTH");
			if( (a.login == "Grebe" || a.login=="Zaverzin") && a.pass == "12345")
	    	{
	    		ws.send("1");
	    	}
			else 
			{
		        ws.send("0");
		    }
			break;
	};
  });
});


