import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['site-canvas'],
  classNameBindings: ['canvas'],
  canvas: 'canvas-0',

  // computedAngle: function(){
  //   // parseInt because we want Numbers and inputs value actually are Strings
  //   var value    = parseInt(this.get('value'), 10);
  //   var maxValue = parseInt(this.get('maxValue'), 10);
  
  //   var angle = Math.floor( 180 * value/maxValue - 90 );
  //   var styles = 'transform: rotate('+angle+'deg)';
  
  //   return styles;
  // }.property('maxValue', 'currentValue'),

  canvasIndex: 0,
  canvasStyle: 'transform: translate3d(0%,0,0)',
  actions: {
      slide: function() {
      	// console.log(this.get('pages'));


      	// var index = parseInt(this.get('param'), 10);
      	var index = this.get('param');
      	console.log("[slide], ", this);
      	console.log("index = ", index);

      	// this.set('canvasIndex', index);

      	// this.set('canvas', 'canvas-' + index);



		// transform: translate3d(-100%,0,0); 

      }
  }
});
