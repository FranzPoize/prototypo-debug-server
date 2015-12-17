import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';
const router = express.Router();

const error = mongoose.model('Error');

/* GET users listing. */
router.get('/', (req, res, next) => {
	error.find({}, (err, errors) => {
		errors.forEach((error) => {
			if (error.date)
				error.date = moment.unix(error.date.getTime()).format('DD/MM/YYYY');
		});
		res.render('error-list', {errors: errors});
	});
});

module.exports = router;
