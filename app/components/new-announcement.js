import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

  save1() {
    var params = {
      date: this.get('date'),
      details: this.get('details'),
      title: this.get("title"),
    };
    this.set('addNewAnnouncement', false);
    this.sendAction('save2', params);
    }
  }
});
