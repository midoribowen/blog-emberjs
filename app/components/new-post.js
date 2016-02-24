import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        timestamp: new Date().getTime(),
      };
      this.sendAction('savePost', params);
    }
  }
});
