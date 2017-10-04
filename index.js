var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/dashboard', function(request, response) {
  response.render('pages/dashboard');
});

app.get('/issues', function(request, response) {
  response.render('pages/issues');
});

app.get('/report-issue', function(request, response) {
  response.render('pages/report-issue');
});

app.get('/manage-application', function(request, response) {
  response.render('pages/manage-application');
});

app.get('/manage-properties', function(request, response) {
  response.render('pages/manage-properties');
});

app.get('/profile', function(request, response) {
  response.render('pages/profile');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
