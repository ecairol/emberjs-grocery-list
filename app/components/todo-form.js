import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },

  actions: {
    saveItem(itemName) {
      this.sendAction('saveItem', itemName);
      this.set('itemName', '');
    }
  }
});
