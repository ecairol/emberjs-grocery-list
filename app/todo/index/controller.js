import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newItem(itemName) {
      let newItem = this.store.createRecord('list-item', {
        name: itemName,
        done: false
      });
      
      newItem.save();
    }
  }
});
