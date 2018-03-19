import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i;
  },
  done: false,
  name: faker.lorem.word
});
