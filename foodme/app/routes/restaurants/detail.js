import Route from '@ember/routing/route';
import OpenMapMixin from 'foodme/mixins/open-map';

export default Route.extend(OpenMapMixin, {
  model({ id }) {
    const parentModel = this.modelFor('restaurants') || [];
    return parentModel.findBy('id', id);
  }
});
