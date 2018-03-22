import { Factory, faker } from 'ember-cli-mirage';

const items = ["Milk", "Apples", "Avocado", "Chips", "Beer", "Oranges", "Cereal", "Soap"];

export default Factory.extend({
  id(i) {
    return i+1;
  },
  done: false,
  name() {
    return items[Math.floor((Math.random()*items.length))];
  }
});
