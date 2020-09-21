import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import OpenMapMixin from 'foodme/mixins/open-map';

export default Controller.extend(OpenMapMixin, {
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
  filteredRestaurants: computed('model', 'filterCuisins', 'filterValue', function () {
    let filteredRestaurants = this.get('model');

    const filterCuisins = this.get('filterCuisins');

    let filterValue = this.get('filterValue');

    // Filter by cuisine
    if (isPresent(filterCuisins)) {
      filteredRestaurants = filteredRestaurants.filter((item) =>
        filterCuisins.mapBy('name').includes(item.cuisine)
      );
    }

    if (isPresent(filterValue)) {
      filterValue = filterValue.toLowerCase();
      filteredRestaurants = filteredRestaurants.filter((item) =>
        item.name.toLowerCase().includes(filterValue)
      );
    }

    return filteredRestaurants;
  }),

  filterValue: null,

  actions: {
    cleanFilters() {
      this.get('filterCuisins').clear();
      this.set('filterValue', null);
    }
  }
});
