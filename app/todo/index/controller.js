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
    },
    
    deleteItems(itemId) {
      this.store.peekAll('list-item').filter((item) => {
        if (item.get('done')) {
          console.log(item.id);
          item.destroyRecord();
        }
       });
    },
    
    markAsDone(itemId) {
      this.store
        .findRecord('list-item', itemId)
        .then((record) => {
          record.set('done', true);
          record.save();
        });
    }
  }
});
