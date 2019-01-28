var express 		= require('express');
var bodyParser 		= require('body-parser');
var app 			= express();
var person        	= require('./app/routes/person');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;
var router = express.Router();

// Route all person urls here
router.use('/person', person);

// Default route
router.get('/', function(req, res) {
	res.json({ message: 'Default route!' });
});

// Listen to port
app.listen(port, () => {
	console.log('API is live on port ' + port);
});

// Append /api on the url
app.use('/api', router);
