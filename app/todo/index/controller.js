import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newItem(itemName) {
      let newItem = this.store.createRecord('list-item', {
        name: itemName,
        done: false
      });
      
      newItem.save();
    },

    deleteItem(itemId) {
      this.store
        .findRecord('list-item', itemId, { backgroundReload: false })
        .then(function(record) {
          record.destroyRecord();
        });
    }
  }
});
