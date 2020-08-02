const express = require('express') ;
const cors = require('cors');
const bodyParser = require('body-parser');
const projectsRoutes = require('./routes/projects'),
      usersRoutes = require('./routes/users'),
      foldersRoutes = require('./routes/folders');


const mongoose = require('mongoose') ;


const app = express() ;
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@confabatlas.q5wv4.mongodb.net/Confab?retryWrites=true&w=majority' ,{ useNewUrlParser: true } )

app.use('/api/v1/projects' , projectsRoutes);
app.use('/api/v1/user' , usersRoutes);
app.use('/api/v1/folders', foldersRoutes);

const PORT = process.env.PORT || '3001' ;


app.listen(PORT , () => {
    console.log(`app is running on ${PORT}`);
})
