import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    saveComment(comment, params) {
      this.sendAction('saveComment', comment, params);
    },
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    },
    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
