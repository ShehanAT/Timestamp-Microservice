var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , name:'Shehan', h1: 'SHEHAN'});
});


router.get('/:time', function(req, res){
  //check if it is a unix or natural 
  function unixToNatural(unix){
    var date = new Date(unix * 1000);// converting unix to seconds
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    //December would return 11
    //January would return 0
    var month = months[date.getMonth()];
    var day = date.getDate();//the getDate() method returs the day of the month for the specified date according to local time.
    var year = date.getFullYear()

    var result = month + ' ' + day + ',' + year;
    return result 
    //if we make a request with a unix time stamp it is going to ckeck if its a number
    // or not and if state would return true 
    //so if we give the if statement a unix time stamp it would return true,
    //then we are going to call the unixToNatural function and that function
    // is going to return the result variable
    // we are returning json data so unix will be req.params.time and the natural 
    // data would be result variable 
    // both the req.params.time and the result variable MUST be displayed in the 
    // project
    //
  }
  //if the parameter after the forward slash is a unix number if runs
  if (!isNaN(req.params.time)){//if the request is  a unix number return true
    var result = unixToNatural(req.params.time);
    var data = {unix: req.params.time, natural: result};
    res.json(data);
  }
  //if the parameter after the forward slash is a natural number
  else{
    var natural  = new Date(req.params.time)// converts string to natural date
    if (!isNaN(natural)){// check if this is a valid natural date
      var unix = natural / 1000// convert 
      var data = {unix: unix, natural: req.params.time};
      res.json(data);
  }
    else{//if req.params.time is not a unix number or a natural number run this else
    res.json({unix:null , natural: null});
  }
    
  
  }
})

module.exports = router;
//you make a request and instead responding with files you get a json 