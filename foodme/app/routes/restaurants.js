import Route from '@ember/routing/route';
import $ from 'jquery';

const host = 'https://raw.githubusercontent.com/shokmaster/ember-workshops-3/master/';

export default Route.extend({
  model() {
    return $.getJSON(`${host}resources/restaurants.json`);
  }
});
