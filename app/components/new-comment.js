import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        author: this.get('title'),
        content: this.get('content'),
        post: this.get('post')
        timestamp: new Date().getTime(),
      };
      this.set('addNewRental', false);
      this.sendAction('saveComment', params);
    }
  }
});
