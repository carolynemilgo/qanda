import Ember from 'ember';

export default Ember.Service.extend({
  questions:[],
  add(question){
    this.get('questions').pushObject(question);
  }
});


//
// import Ember from 'ember';
//
// export default Ember.Service.extend({
//   items: [],
//
//   add(item) {
//     this.get('items').pushObject(item);
//   }
// });
