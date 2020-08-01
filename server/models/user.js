const bcrypt = require('bcrypt');
const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const userSchema = new Schema({
    username:{
        type:String,
        min:[2,"Too short, min is 2 characters"],
        max:[32,"Too long, max is 32 characers"]
    },
    email:{
        type:String,
        min:[2,"Too short, min is 2 characters"],
        max:[32,"Too long, max is 32 characers"],
        unique:true,
        lowecase:true,
        required:"email is required"
    },
    password:{
        type:String,
        min:[2,"Too short, min is 2 characters"],
        max:[32,"Too long, max is 32 characers"],
        required:"Password is required"
    },
    current: [{type:Schema.Types.ObjectId, ref: 'Project'}],

});

userSchema.methods.hasSamePassword = function(requestedPassword) {
  return bcrypt.compare(requestedPassword, this.password);
};

userSchema.pre("save", function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User" , userSchema);