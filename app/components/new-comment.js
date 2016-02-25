import Ember from 'ember';

export default Ember.Component.extend({
  commentFormShow: false,
  actions: {
    commentFormShow() {
      this.set('commentFormShow', true);
    },
    saveComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        post: this.get('post'),
        timestamp: new Date().getTime(),
      };
      this.set('commentFormShow', false);
      this.sendAction('saveComment', params);
    }
  }
});
