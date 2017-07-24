import Ember from 'ember';
//import swal from 'sweetalert'; //for popus to allow user to confirm if they want to delete the question or not

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),//injecting the service favoriteList
  actions: {
    addToFavorites(question) {//defining the function addToFavorites resposnble for pushing favorite questions to users list
      this.get('favoriteList').add(question);
    },
    delete(question) {
      if (confirm("Are you sure you want to delete this question??")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
