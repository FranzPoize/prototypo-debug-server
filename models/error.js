import mongoose from 'mongoose';

const errorSchema = new mongoose.Schema({
	message: String,
	stack: String,
	events: Array,
	date: Date,
	values: mongoose.Schema.Types.Mixed,
}, {
	collection: 'errors'
});

mongoose.model('Error', errorSchema);
