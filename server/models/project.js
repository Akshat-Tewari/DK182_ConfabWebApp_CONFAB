const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	title: {
		type: String,
		max: [128, "Too long , max is 128 character"],
		unique:false,
		default:"www.confab.com"
	},
	text : String,
	description: { type: String},
	slug:String,
	folder:{type:String , default: "personal" },
    image:String,
	createdAt: { type: Date, default: Date.now },
	author: { type: String, required: false },
    user:{type:Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model("Project", projectSchema);
