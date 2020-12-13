// getting access to dotenv
const dotenv = require('dotenv');

// getting access to mongoose framework
const mongoose = require('mongoose');

//  defining path for dotenv
dotenv.config({path:'./config.env'});

// getting access to express app
const app = require('./app');

// getting database connection string
const db = process.env.DATABASE;

// connecting to mongoose database
mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connrction successful');
  });

  const port = 3200;

  // creating and listening to a server
  app.listen(port,()=>{
      console.log(`App running on port ${port}`);
  });