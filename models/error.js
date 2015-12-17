import mongoose from 'mongoose';

const errorSchema = new mongoose.Schema({
	message: String,
	stack: String,
	events: Array,
	date: Date,
}, {
	collection: 'errors'
});

mongoose.model('Error', errorSchema);
