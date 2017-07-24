import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question=params[0];
  if(question.get('answers').get('length') >= 5){//for questions with answers greater than or equal to 5 return 5 graduation hats
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education"></span><span class="glyphicon glyphicon-education"></span>');
  }
 else if(question.get('answers').get('length') == 4){//for questions with 4 answers  return 4 graduation hats
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education">');
 }
 else if(question.get('answers').get('length') == 3){ //for questions with 3 answers  return 3 graduation hats
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education">');
 }
 else if(question.get('answers').get('length') == 2){ //for questions with 2 answers  return 2 graduation hats
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-education"><span class="glyphicon glyphicon-education">');
 }
 else if(question.get('answers').get('length') == 1){ //for questions with 1 answer  return 1 graduation hats
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-education">');
 }
else { //for questions with no answers  return glyphicon to suggest submission of an answer
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-pencil"><h5>(Submit an answer)</h5></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
