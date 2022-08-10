import mongoose from "mongoose";

const Pizza = new mongoose.Schema({
	imageUrl: {
		type: "String",
		require: true
	},
	title: {
		"type": "String",
		require: true
	},
	types: {
		type: [
			"Number",
		],
		require: true
	},
	sizes: {
		type: [
			"Number"
		],
		require: true
	},
	price: {
		type: "Number",
		require: true
	},
	category: {
		type: "Number",
		require: true
	},
	rating: {
		type: "Number",
		require: true
	}
})

export default mongoose.model('Pizza', Pizza)