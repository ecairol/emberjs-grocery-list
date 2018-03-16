import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.groceryList = [];
  },
  actions: {

    addNewItem(itemName) {
      this.get('groceryList').pushObject({
        id: Date.now(),
        name: itemName,
        done: false
      });
      this.set('itemName', '');
    },

    markAsDone(id) {
      //console.log(id);
    }
  }
});
