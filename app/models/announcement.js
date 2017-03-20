import DS from 'ember-data';

export default DS.Model.extend({
  bigNews: DS.attr(),
  upcomingSales: DS.attr(),
  weatherWarnings: DS.attr()
});
