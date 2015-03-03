Tweeter.TweetRoute = Ember.Route.extend({

  model: function(params) {
    return tweets.findBy('id', params.post_id);
  }

});
