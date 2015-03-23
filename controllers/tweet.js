Tweeter.TweetController = Ember.ObjectController.extend({
  dateShowing: false,
  replyShowing: false,
  actions: {
    showTime: function(){
      this.set('dateShowing', !this.get('dateShowing'));
    },

    showReply: function() {
      this.set('replyShowing', !this.get('replyShowing'));
    }
  }

});
