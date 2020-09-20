import Controller from '@ember/controller';

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
