Tweeter.TweetController = Ember.ObjectController.extend({
  dateShowing: false,
  actions:{
    showTime: function(){
      this.set('dateShowing', !this.get('dateShowing'));
    }
  }

});
