var http = require('http');
var url  = require('url');

http.createServer(function handler(req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query; //?tag=1234
	console.log('GET ?tag=' + query.tag);
	
	var tagObj = [
		{ tagId: "201745090000000000000000", bicId: "20174509", userId: "kaist001" },
		//{ tagId: "E20051161615027620204402", bicId: "20174515", userId: "kaist002" },
		{ tagId: "E20051161615027720204406", bicId: "20174516", userId: "kaist003" },
		{ tagId: "E2005116161502422020437A", bicId: "20174517", userId: "kaist004" }
	];
	
	var retTag = null;
	for(var i=0; i<tagObj.length; i++){
		//console.log(i + ' > ' + JSON.stringify(tagObj[i]));
		if(query.tag === tagObj[i].tagId){
			//console.log(query.tag + ' = ' + JSON.stringify(tagObj[i].tagId));
			retTag = tagObj[i];
			break;
		}
	}
	
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(retTag));
}).listen(1337, '192.168.1.71');

console.log('Server running at http://192.168.1.71:1337/');
