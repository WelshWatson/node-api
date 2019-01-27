var router = require('express').Router();
var mongoose = require('mongoose');
var url = ('mongodb+srv://limitedUser:Password123@clusterone-1zyu1.mongodb.net/FirstDatabase?retryWrites=true');
mongoose.connect(url, { useNewUrlParser: true });
  
var Schema = mongoose.Schema;
var personSchema = new Schema({
	FirstName	: String,
	LastName	: String,
}, {
	collection: 'person'
});

var personModel = mongoose.model('person', personSchema, "person");

router.get('/all', function (req, res) {
	personModel.find({}, function (err, response) {
		if (err) { 
			res.json({ 
				Message: err 
			}); 
			console.log('error thrown: ' + err); 
		}

		res.json(response);
	});
});

router.get('/firstname/:id', function (req, res) {
	var name = req.params.id;
	personModel.find({ FirstName : new RegExp(`^${name}$`, 'i') }, function (err, response) {
		if (err) { 
			res.json({ 
				Message: err 
			}); 
			console.log('error thrown: ' + err); 
		}

		res.json(response);
	});
});

router.get('/lastname/:id', function (req, res) {
	var name = req.params.id;
	personModel.find({ LastName : new RegExp(`^${name}$`, 'i') }, function (err, response) {
		if (err) { 
			res.json({ 
				Message: err 
			}); 
			console.log('error thrown: ' + err); 
		}

		res.json(response);
	});
});

module.exports = router;
