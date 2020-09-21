import EmberObject from '@ember/object';
import OpenMapMixin from 'foodme/mixins/open-map';
import { module, test } from 'qunit';

module('Unit | Mixin | open-map', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let OpenMapObject = EmberObject.extend(OpenMapMixin);
    let subject = OpenMapObject.create();
    assert.ok(subject);
  });
});
