Tweeter.Router.map(function() {
  this.resource('application');
  this.resource('tweets', {path: '/'}, function(){
    this.resource('tweet-form', function() {});
  });
});
