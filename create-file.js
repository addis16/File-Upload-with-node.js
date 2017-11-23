var fs = require('fs');
fs.appendFile('new-txt-file.txt', 'Hey there, i was created with javaScript by Jacob Addis with node, also fuck you!', function(err){
	if (err) throw err;
		console.log('updated, faggot!');
});