import Ember from 'ember';
import { alias } from '@ember/object/computed';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    this.selectAll = false;
  },

  actions: {
    done(id) {
      this.sendAction('done', id);
    },

    delete(id) {
      //confirm(`Are you sure you want to delete item #${id}?`);
      Ember.$(`.id-${id}`).hide();
      this.sendAction('delete', id);
    },

    bulkDelete() {
      this.sendAction('bulkDelete');
    },

    toggleSelectAll() {
      let currentSelectAll = this.get('selectAll');
      this.items.forEach((item) => {
        item.set('done', !currentSelectAll);
      });
      this.set('selectAll', !currentSelectAll);
    }
  }
});
