import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i+1;
  },
  done: false,
  name: faker.lorem.word
});
