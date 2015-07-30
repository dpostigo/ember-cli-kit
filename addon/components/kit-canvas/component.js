import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: ['canvas'],
  canvas: '0',
  actions: {
      slide: function(param) {
      	// console.log(this.get('pages'));
      	var index = this.get('param');
      	this.set('canvas', 'canvas-' + index)
      	
      }
  }
});
