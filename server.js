var express 		= require('express');
var bodyParser 		= require('body-parser');
var app 			= express();
var person        	= require('./app/routes/person');

var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
var router = express.Router();
router.use('/person', person);

router.get('/', function(req, res) {
	res.json({ message: 'Yay it worked!' });
});

router.get('/test', function(req, res) {
	res.json({ response: 'This is the test endpoint response' });
});



app.listen(port, () => {
	console.log('API is live on port ' + port);
});
