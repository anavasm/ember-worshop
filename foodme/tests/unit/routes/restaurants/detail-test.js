import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | restaurants/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:restaurants/detail');
    assert.ok(route);
  });
});
