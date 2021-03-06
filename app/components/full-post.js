import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('comments', 'sortProperties'),

  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },
    deletePost(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost', post);
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
        this.sendAction('deleteComment', comment);
      }
    }
  }
});
