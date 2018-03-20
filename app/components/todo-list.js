import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    markAsDone(id) {
      console.log(id);
    },
    
    edit(id) {
      console.log(id);
    },

    delete(id) {
      confirm(`Are you sure you want to delete item #${id}?`);
      console.log(id);
    }
  }
});
