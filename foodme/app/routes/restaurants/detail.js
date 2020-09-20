import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    const parentModel = this.modelFor('restaurants') || [];
    return parentModel.findBy('id', id);
  }
});