import Ember from 'ember';

export default Ember.Component.extend({

  addNewQuestion:false,
  actions:{
      showQuestionForm(){
        this.set('addNewQuestion', true);
      },
      saveQuestion1() {
          var params = {
       author: this.get('author')? this.get('author') : "",
       qst: this.get('qst')? this.get('qst') : "",
       notes: this.get('notes')? this.get('notes') : "",
       image: this.get('image')? this.get('image') : ""
      //  author: this.get('author')? this.get('author') : "",
      //  qst: this.get('qst')? this.get('qst') : "",
      //  notes: this.get('notes')? this.get('notes') : "",
      //  image: this.get('image')? this.get('image') : ""
     };
     this.set('addNewQuestion', false);
     this.sendAction('saveQuestion2', params);
   }
  }

});
