import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search(keywords) {
      this.sendAction('search', keywords);
    }
  }
});
