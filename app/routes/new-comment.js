import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('comment');
  },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
