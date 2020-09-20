import Component from '@ember/component';
import { inject } from '@ember/service';
import { observer } from '@ember/object';

const languages = [{
  name: 'Español',
  code: 'es'
}, {
  name: 'English',
  code: 'en'
}];

export default Component.extend({

  isMenuOpened: false,

  i18n: inject(),

  languages,

  selectedLanguage: languages[1],

  onSelectedLanguageChange: observer('selectedLanguage', function () {
    this.set('i18n.locale', this.get('selectedLanguage.code'));
  }),

  actions: {
    toogleMenu() {
      this.toggleProperty('isMenuOpened');
    }
  }
});
