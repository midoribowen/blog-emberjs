import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  timestamp: DS.attr(),
  content: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
