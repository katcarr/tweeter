Tweeter.TweetsController = Ember.ArrayController.extend({
  itemController: 'tweet',
  sortAscending: false,
  sortProperties: ['dateTime']

});
