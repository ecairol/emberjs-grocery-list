import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },

  actions: {
    newItem(itemName) {
      this.sendAction('newItem', itemName);
      this.set('itemName', '');
    }
  }
});
