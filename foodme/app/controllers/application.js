import Controller from '@ember/controller';

/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

export default Controller.extend({
  appName: 'Foodme',
  menuLinks: [
    {
      label: 'restaurants',
      url: 'restaurants'
    },
    {
      label: 'about',
      url: 'about'
    }
  ]
});
