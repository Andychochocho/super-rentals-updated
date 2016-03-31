import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },


  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      var newCity = this.store.createRecord('city', params);
      newRental.save();
      newCity.save();
      this.transitionTo('index');
    }
  }
});
