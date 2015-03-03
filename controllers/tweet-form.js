Tweeter.TweetFormController = Ember.Controller.extend({
  remainingChars: 141,
  actions: {
    newTweet: function() {
      var tweet = {
        user: this.get('inputUser'),
        text: this.get('inputText'),
        dateTime: new Date,
        id: tweets.length + 1
      };

      this.set('inputUser', null);
      this.set('inputText', null);

      tweets.addObject(tweet);

    },

    tweetLength: function() {
      var chars = this.get('inputText').length;
      var remainingLength = 141 - chars;
      this.set('remainingChars', remainingLength);
    }
  }
});
