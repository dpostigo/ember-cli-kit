import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['site-canvas'],
  classNameBindings: ['canvas'],
  canvas: 'canvas-0',
  actions: {
      slide: function() {
      	// console.log(this.get('pages'));
      	var index = this.get('param');
      	this.set('canvas', 'canvas-' + index);

		// transform: translate3d(-100%,0,0); 

      }
  }
});
