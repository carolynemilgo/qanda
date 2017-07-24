import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false, //set form to false
  actions:{
    showAnswerForm(){
      this.set('addNewAnswer',true);//activate form for user to fill the fields
    },
    saveAnswer(){//to collect answers from user and store for access in question details
      var params={
        author:this.get('author'),
        content:this.get('content'),
        question:this.get('question')
      };
      this.set('addNewAnswer',false);
      this.sendAction('saveAnswer',params);
    }
  }
});
