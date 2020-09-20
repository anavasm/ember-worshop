import Component from '@ember/component';

export default Component.extend({

  isMenuOpened: false,

  actions: {
    toogleMenu() {
      this.toggleProperty('isMenuOpened');
    }
  }
});
