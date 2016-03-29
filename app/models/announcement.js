import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  details: DS.attr(),
  date: DS.attr()
});
