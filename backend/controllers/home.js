/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.patient = function(req, res) {
    res.render('patient', {
          title: 'Patient Flow'
              });
};
