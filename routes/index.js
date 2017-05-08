var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let morals = req.cookies.morals;
  if (!morals) morals = 'good';
  console.log(req.cookies);
  let flash = req.cookies.insanity ? (1 / parseInt(req.cookies.insanity)) : 0;
  if (flash == 1) flash = 0;
  res.render('index', { title: 'CSS Garden of Good and Evil',
                        morals: (morals === 'good'),
                        favFood: req.cookies.favFood || 'Favorite Food',
                        favColor: req.cookies.favColor || 'black',
                        flash: flash.toString() + 's',
                        insanity: req.cookies.insanity || 1
                      });
});

/* Post home page. */
router.post('/', function(req, res, next) {
  res.cookie("morals", req.body.morals);
  res.cookie("favFood", req.body.favFood || req.cookies.favFood);
  res.cookie("favColor", req.body.favColor || req.cookies.favColor);
  res.cookie("insanity", req.body.insanity || req.cookies.insanity)
  res.redirect("back");
});

module.exports = router;
