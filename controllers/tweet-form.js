Tweeter.TweetFormController = Ember.Controller.extend({
  actions: {
    newTweet: function() {
      var tweet = {
        user: this.get('inputUser'),
        text: this.get('inputText'),
        dateTime: new Date
      };

      this.set('inputUser', null);
      this.set('inputText', null);

      tweets.addObject(tweet);

    }
  }
});
