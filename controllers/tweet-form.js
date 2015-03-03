Tweeter.TweetFormController = Ember.Controller.extend({
  actions: {
    newTweet: function() {
      var tweet = {
        user: this.get('inputUser'),
        text: this.get('inputText'),
        dateTime: new Date
      };

      tweets.addObject(tweet);

    }
  }
});
