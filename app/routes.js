var Nerd=require(__dirname+'/models/nerd');
var path = require('path');
module.exports=function(app){
app.get('/api/nerd',function(req,res){
	Nerd.find(function(err,nerds){
	if(err)
	res.send(err);
	res.json(nerds);	
	});
});

app.get('*',function(req,res){
res.sendFile(path.resolve(app.get('appPath') +'/public/views/index.html'));
});	
};
