var express 		= require('express');
var bodyParser 		= require('body-parser');
var app 		= express();
var path		= require('path');
var person        	= require('./app/routes/person');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;
var router = express.Router();

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Route all person urls here
router.use('/person', person);

// Listen to port
app.listen(port, () => {
	console.log('API is live on port ' + port);
});

// Append /api on the url
app.use('/api', router);
