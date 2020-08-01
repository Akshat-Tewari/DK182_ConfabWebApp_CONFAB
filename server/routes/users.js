const express = require('express') ;
const router = express.Router() ;

const User = require('../controllers/user');


router.post('/auth' , User.auth);

router.post('/register',User.register)

router.get('/current', User.authMiddleware, User.getCurrentProject) ;

router.patch('/add', User.authMiddleware, User.addToCurrent );
 
module.exports = router ;

