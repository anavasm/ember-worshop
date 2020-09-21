import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | restaurants', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /restaurants', async function (assert) {
    await visit('/restaurants');

    assert.equal(currentURL(), '/restaurants');
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/restaurants');

    let linkFound = false;

    this.element.querySelectorAll('.navbar-nav li a').forEach(element => {
      if (element.href.includes('restaurants')) {
        linkFound = true;
      }

    });

    assert.ok(linkFound);
  });

  test('should show restaurants list at home page', async function (assert) {
    await visit('/restaurants');

    const mediaElements = this.element.querySelectorAll('div.media-body');

    assert.notEqual(mediaElements.length, 0);

  });

  test('should filter the list of restaurants by name.', async function (assert) {
    await visit('/restaurants');

    await fillIn('input#filterName', 'esther');
    const mediaElements = this.element.querySelectorAll('div.media-body');

    assert.equal(mediaElements.length, 1);
  });

  test('should transition to the selected restaurant details', async function (assert) {
    await visit('/restaurants');

    await click('div.media-body h4 a');

    assert.ok(currentURL().includes('restaurants/detail'));


  });

});
