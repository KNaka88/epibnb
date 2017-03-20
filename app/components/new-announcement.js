import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,

  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        bigNews: this.get('bigNews') ? this.get('bigNews') : "",
        upcomingSales: this.get('upcomingSales') ? this.get('upcomingSales') : "",
        weatherWarnings: this.get('weatherWarnings') ? this.get('weatherWarnings') : ""
      };

      this.set('addNewAnnouncement', false);
      this.set('bigNews', "");
      this.set('upcomingSales', "");
      this.set('weatherWarnings', "");
      this.sendAction('saveAnnouncement', params);
    }

  }

});
