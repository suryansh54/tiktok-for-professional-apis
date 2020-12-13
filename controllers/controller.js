const User = require('../dbModels/schema');
const useragent = require('express-useragent');

/**
 * controller to save user Information as well as its interests
 * @param {*} req 
 * @param {*} res 
 */
exports.saveInformation = async (req, res) => {
  // getting Information about user Agent and parsing it
  let source = req.headers['user-agent'],
  ua = useragent.parse(source);

  // user information from req.body
  const { geolocation, languages, connection, userInterest } = req.body;
  try {
    // console.log(req.body);
    const user = await  User.create({
      ipAddress: req.ip,
      location: geolocation,
      prefferedLanguages: languages,
      connectionType: connection,
      browser: ua.browser,
      browserVersion: ua.version,
      userInterest: userInterest,
      creationDate: new Date().toJSON()
    }) ;
    res.status(200).json({
      status: 'SUCCESS',
      id: user._id
    });
  } catch(err) {
    res.status(400).json({
      status: 'Error',
      error: err
    });
  }
}


/**
 *  Get All Stored User Information
 * @param {*} req 
 * @param {*} res 
 */
exports.getData = async (req,res) => {
  const users = await User.find({});
  res.status(200).json({
    status: "SUCCESS",
    user: users
  });
}

exports.getDateById =  async (req, res) => {
  try {
    const user = await User.find({_id: req.params.id});
  if(user) {
    res.status(200).json({
      status: 'Success',
      data: user
    });
  } else {
    res.status(404).json({
      status: 'Error',
      message: 'No user with such ID Exists'
    });
  }
  } catch(err) {
    res.status(400).json({
      status: 'Error',
      message: "Some Error Occured"
    }); 
  }
}

exports.delete = async (req,res) => {
  await User.deleteMany({});
  res.status(200).json({
    message:'deleted'
  });
}