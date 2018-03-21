import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    this.selectAll = false;
    this.isBulkDeleteDisabled = true;
  },

  willRender() {
    this.set('isBulkDeleteDisabled', true);
    this.items.forEach((item) => {
      if (item.get('done')) {
        this.set('isBulkDeleteDisabled', false);
      }
    });
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
