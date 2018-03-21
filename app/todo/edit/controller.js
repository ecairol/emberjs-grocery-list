import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editItem(item) {
      this.store.findRecord('list-item', item.id).then((record) => {
        record.save();
        this.transitionToRoute('todo');
      });
    }
  }
});
