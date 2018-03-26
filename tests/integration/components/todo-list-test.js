import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import { startMirage } from "ember-todo-list/initializers/ember-cli-mirage";

moduleForComponent("todo-list", "Integration | Component | todo list", {
  integration: true,
  beforeEach() {
    this.server = startMirage();
    this.items = this.server.createList('list-item', 8);
  },
  afterEach() {
    this.server.shutdown();
  }
});

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('items', this.items);

  this.render(hbs`{{todo-list items=items}}`);

  this.items.forEach(item => {
    assert.equal(this.$(`[data-test-todo-item="${item.attrs.id}"]`).text().trim(), item.attrs.name);
  });
});

test("it renders and shows edit button", function(assert) {
  this.set('items', this.items);

  this.render(hbs`{{todo-list items=items}}`);

  this.items.forEach(item => {
    assert.equal(this.$(`[data-test-edit-button="${item.attrs.id}"]`).text().trim(), 'Edit');
  });
});
