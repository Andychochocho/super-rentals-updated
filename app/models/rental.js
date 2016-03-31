import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.belongsTo('city', {async: true}),
  type: DS.attr(),
  bedrooms: DS.attr(),
  image: DS.attr()
});
