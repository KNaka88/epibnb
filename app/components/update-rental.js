import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set("updateRentalForm", true);
    },

    update(rental) {
      var params = {
        owner: this.get('owner'),
        type: this.get('type'),
        city: this.get('city'),
        bedrooms: this.get('bedrooms'),
        image: this.get('image')
      };
      this.set("updateRentalForm", false);
      this.sendAction('update',rental, params);
    }
  }
});
