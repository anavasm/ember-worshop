import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Controller.extend({
  cuisineOptions: computed('model', function () {
    return this.get('model').mapBy('cuisine').filter((elem, pos, arr) => arr.indexOf(elem) === pos).map((cuisine) => {
      return {
        name: cuisine,
        title: cuisine.replace('/', ' / ').capitalize()
      };
    });
  }),
  // Filter criterias
  filterCuisins: A(),

  // Filter function
  filteredRestaurants: computed('model', 'filterCuisins', function () {
    let filteredRestaurants = this.get('model');

    const filterCuisins = this.get('filterCuisins');

    // Filter by cuisine
    if (isPresent(filterCuisins)) {
      filteredRestaurants = filteredRestaurants.filter((item) =>
        filterCuisins.mapBy('name').includes(item.cuisine)
      );
    }

    return filteredRestaurants;
  })
});
