import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash ({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review'),
      announcements: this.store.findAll('announcement')
    });
  },

  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    },

    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },

    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined){
          rental.set(key, params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    }
  }
});
