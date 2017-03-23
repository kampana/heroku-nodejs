var express = require('express');
var app = express();

// Local data, TBD getting from some remote db
const data = [{
	years: '2016 - Present',
	title: 'Full Stack Developer',
	content: ['Hands on development in Java 8', 'AngularJS','ElasticSearch','SaaS development via AWS services', 'Spring', 'Hibernate over MySQL', 'C#'],
	imageName: 'panaya' }, 
	{
		years: '2014-2016',
		title: 'Team Leader',
		content: ['Leading 6-12 team members', 'Hands on development in Java', 'AngularJS'],
		imageName: 'ibm'
	},
	{
		years: '2010-2014',
		title: 'Team Leader',
		content: ['Leading 4 team members worldwide', 'Hands on development in Java','GUI development in SWING'],
		imageName: 'ibm'
	},
	{
		years: '2008-2010',
		title: 'GUI Developer',
		content: ['Hands on development in Java', 'GUI development in SWING'],
		imageName: 'ibm'
	}];

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
	setTimeout(function()
		{ 
			response.setHeader("Access-Control-Allow-Origin", "*"); // Otherwise we'll have an access-control... error
		    response.send(JSON.stringify(data));
		}, 1000); // Sleep just for testing the "Please wait" mechanism
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


