const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
		max: [128, "Too long , max is 128 character"],
	},
	slug: String,
	image: { type: String },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Folder", folderSchema);
