import Controller from '@ember/controller';

export default Controller.extend({
  appName: 'Foodme',
  menuLinks: [
    {
      name: 'Resturantes',
      url: 'restaurants'
    },
    {
      name: 'About',
      url: 'about'
    }
  ]
});
