var express 		= require('express');
// var MongoClient 	= require('mongodb').MongoClient;
var bodyParser 	= require('body-parser');
var app 		= express();
var person        	= require('./app/routes/person');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var router = express.Router();

router.use('/person', person);

router.get('/', function(req, res) {
	res.json({ message: 'Yay it worked!' });
});

router.get('/test', function(req, res) {
	res.json({ response: 'This is the test endpoint response' });
});

app.use('/api', router);

app.listen(port, () => {
	console.log('API is live on port ' + port);
});
