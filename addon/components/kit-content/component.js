import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,



  classNames: ['kit-content'],

  willInsertElement: Ember.on('willInsertElement', function() {
  	console.log("[willInsertElement], this.parentView = ", this.parentView);

  	console.log("this.targetObject = ", this.targetObject);
  }),

  didInsertElement: Ember.on('didInsertElement', function() {
  	console.log("[didInsertElement], this.parentView = ", this.parentView);

  	console.log("this.targetObject = ", this.targetObject);
  })
});
