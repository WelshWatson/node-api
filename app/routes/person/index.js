var router = require('express').Router();
var Person = require('../../models/Person');
var mongoose = require('mongoose');
var url = ('mongodb+srv://limitedUser:Password123@clusterone-1zyu1.mongodb.net/FirstDatabase?retryWrites=true');
mongoose.connect(url, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
var Schema = mongoose.Schema;

var personSchema = new Schema(Person, { collection: 'person' });

var personModel = mongoose.model('person', personSchema, "person");

// Return all person objects
router.get('/all', function (req, res) {
	personModel.find({}, function (err, response) {
		if (err) {
			res.json({
				Message: err
			});
			console.log('error thrown: ' + err);
		}

		res.status(200).json(response);
	});
});

// Create person
router.post('/create', function (req, res) {
	personModel.create({
		FirstName: req.body.FirstName,
		LastName: req.body.LastName
	}, function (err, result) {
		if (err) res.status(500).json({ Message: err });

		res.sendStatus(204);
	});
});

router.post('/update', function (req, res) {
	personModel.findOneAndUpdate({ _id: req.body._id }, req.body, { returnOriginal:true }, (err, result) => {
		if (err) { console.log('error: ' + err); }
		res.sendStatus(204);
	});
});

router.delete('/delete/:id', function (req, res) {
	personModel.findOneAndDelete({ _id: req.params.id }, function (err, response) {
		if (err) { console.log(err); }

		res.sendStatus(204);
	});
});

// Search by firstname
router.get('/firstname/:id', function (req, res) {
	var name = req.params.id;
	personModel.find({ FirstName: new RegExp(`^${name}$`, 'i') }, function (err, response) {
		if (err) {
			res.json({
				Message: err
			});
			console.log('error thrown: ' + err);
		}

		res.status(200).json(response);
	});
});

// Search by lastname
router.get('/lastname/:id', function (req, res) {
	var name = req.params.id;
	personModel.find({ LastName: new RegExp(`^${name}$`, 'i') }, function (err, response) {
		if (err) {
			res.json({
				Message: err
			});
			console.log('error thrown: ' + err);
		}

		res.status(200).json(response);
	});
});

module.exports = router;
