import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement){
      if (confirm("Are you sure?")){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }

});
