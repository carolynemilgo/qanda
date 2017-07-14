import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  qst: DS.attr(),
  notes: DS.attr(),
  image: DS.attr(),
  answers: DS.hasMany('answer', { async: true })

});
