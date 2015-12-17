import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

const error = mongoose.model('Error');

const router = express.Router();

router.post('/', (req, res, next) => {
	const {message, stack, events, date} = req.body;

	const newError = new error({
		message,
		stack,
		events,
		date,
	});

	console.log('error created');
	
	newError.save((err, savedError) => {
		if (err) {
			res.send(err);
		}

		fs.writeFile(`public/events-logs/${savedError.id}.json`, JSON.stringify(savedError.events), (err) => {
			if (err) {
				return console.log(err);
			}
			res.send();
		});
	});
});

router.delete('/:id', (req, res, next) => {
	error.find({_id: req.params.id}).remove((err) => {
		if (err) {
			res.send(err);
		}
		res.send();
	});
});

module.exports = router;
