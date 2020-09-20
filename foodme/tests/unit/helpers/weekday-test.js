import { weekday } from 'foodme/helpers/weekday';
import { module, test } from 'qunit';
//import { setupTest } from 'ember-qunit';

module('Unit | Helper | weekday', function () {
  //setupTest(hooks);

  test('it returns the day number', async function (assert) {
    const result = weekday([0]);

    assert.equal(result, 'sunday')
  });

  test('it returns an empty string when receives an incorrect day number', async function (assert) {
    const result = weekday([10]);
    assert.equal(result, '');
  });

});
