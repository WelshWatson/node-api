const router = require('express').Router();

router.get('/:id', function(req, res) {
	try {
		var id = req.params.id;
		if (id === '1') {
			res.json({ Message: 'Person 1 has been routed' });
		}
		if (id === '2') {
			res.json({ Message: 'Person 2 has been routed' });
		}
	
		res.json({Message: 'No person found' });
	}
	catch(err) {
		res.json({ Error: err });
	}
});

module.exports = router;
