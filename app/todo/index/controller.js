import Ember from 'ember';
import { debug } from '@ember/debug';

export default Ember.Controller.extend({
  queryParams: ['search'], 
  search: '',

  filtered: Ember.computed('search', 'model', function() {
    const items = this.get('model'); 
    const search = this.get('search').toLowerCase(); 
 
    if (Ember.isEmpty(search)) { 
      return items; 
    } 
 
    return items.filter(function(item) { 
      const name = (item.get('name') || '').toLowerCase(); 
      const id = item.id.toLowerCase();
      if (name.match(search) || id.match(search)) { 
        return true;
      } 
      return false; 
    }) 
  }), 

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
    },

    search(keywords) {
      this.set('search', keywords);
    }
  }
});
