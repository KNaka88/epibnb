import Ember from 'ember';

export default Ember.Component.extend({
  reviewForm: false,
  actions: {
    reviewFormShow(){
      this.set("reviewForm", true);
    },

    createReview(){
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content')
      };
      console.log(params);
      this.set('reviewForm', false);
      this.sendAction('saveReview', params);
    }
  }
});
