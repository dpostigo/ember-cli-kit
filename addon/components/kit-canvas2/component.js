import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  	layout: layout,
	actions: {
	    slide: function() {

	    	// var index = this.get('param');
	    	// console.log("[slide], ", this);
	    	// console.log("index = ", index);

	    	console.log("this.get('item') = ", this.get('item'));
	    	console.log("this.get('index') = ", this.get('index'));
	    	console.log("this.get('param') = ", this.get('param'));
	    	// this.set('canvasIndex', index);

	    	// this.set('canvas', 'canvas-' + index);



			// transform: translate3d(-100%,0,0); 

	    }
	}
});
