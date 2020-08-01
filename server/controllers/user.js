const User = require('../models/user');
const Project = require('../models/project');
const jwt = require('jsonwebtoken');


exports.auth = (req,res)=> {
    const {email , password} = req.body ;
    
    if(!email || !password){
        return res.status(422).send({error : {title:"Data missing!" , detail: "Provide email and password"}});
    }

    User.findOne({email}, (err, user) => {
        if(err){
            return res.status(422).send({error : "error findig user during login"});
        }

        if(!user){
            return res.status(422).send({error : "user does not exist"});
        }

        if (user.hasSamePassword(password)) {
            const token = jwt.sign({
              userId: user.id,
              username: user.username
            }, "secret", { expiresIn: '40d'});
      
            return res.json(token);
          } else {
            return res.status(422).send({errors: [{title: 'Wrong Data!', detail: 'Wrong email or password'}]});
          }
    });               
}

exports.register = (req,res) =>{
    const {username, email , password } = req.body ;

    if(!email || !password){
        return res.status(422).send({error : {title:"Data missing!" , detail: "Provide email and password"}});
    }
    
    User.findOne({email} , (err , foundUser)=>{
        if(err){
            return res.status(422).send({error : "error in finding user by email"});
        }

        if(foundUser){
            return res.status(422).send({error : "User with this email already exist"});
        }

        const user = new User({username , email , password}) ;

        user.save((err) => {
            if(err){
                return res.status(422).send({error : "error in registering the user"});
            }

            return res.json({'registered':true});
        })
        
    })
}

exports.authMiddleware = function(req, res, next) {

  const token = req.headers.authorization;
  if (token) {
    const user = parseToken(token);

    User.findById(user.userId, function(err, user) {
      if (err) {
        return res.status(422).send({"errors": "User not found in authorization"});
      }

      if (user) {
        res.locals.user = user;
        next();
      } else {
        return notAuthorized(res);
      }
    })
  } else {
    return notAuthorized(res);
  }
}

function parseToken(token) {
  return jwt.verify(token.split(' ')[1], "secret");
}

function notAuthorized(res) {
  return res.status(401).send({errors: [{title: 'Not authorized!', detail: 'You need to login to get access!'}]});
}


// Get and add current Projects for user

exports.getCurrentProject =async (req, res) => {
   const user = res.locals.user;

  await Project.findById( user.current , (err , currentProject) => {
        if(err){
          return res.json("err in getting current");
        }

        return res.json(currentProject);
   });
}

exports.addToCurrent=  (req , res) => {

  const user = res.locals.user;
  const project = req.body;

      user.current.push(project) ;
      user.save()

      return res.json(project);
  
};