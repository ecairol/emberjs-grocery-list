import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    markAsDone(id) {
      console.log(id);
    }
  }
});
