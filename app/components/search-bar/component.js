import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.currentValue = this.keywords;
    this.debounce = this.debounce || 300;
  },

  actions: {
    search() {
      Ember.run.debounce(this, this.setSearch, this.debounce);
    }
  },

  setSearch() {
    this.set('keywords', this.currentValue);
  }
});
