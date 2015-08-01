import Ember from 'ember';
import layout from './template';

var CANVAS_CLASS = 'canvasClass';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['site-canvas'],
  classNameBindings: [CANVAS_CLASS],

  canvasIndex: 0,
  canvasStyle: 'transform: translate3d(0%,0,0)',
  canvasStyle2: Ember.computed('canvasIndex', function() {
    var value = this.get('canvasIndex') * -100;
    var string = 'transform: translate3d(' + value + '%,0,0)';
    return new Ember.Handlebars.SafeString(string);
  }),

  actions: {
      slideToIndex: function(index) {
        this.set('canvasIndex', index);
        this.set(CANVAS_CLASS, 'canvas-' + index);

        var value = index * -100;
        this.set('canvasStyle', 'transform: translate3d(%@%,0,0)'.fmt(value));
        
      },
      slide: function() {
      	// console.log(this.get('pages'));


      	// var index = parseInt(this.get('param'), 10);
      	var index = this.get('param');
      	console.log("[slide], ", this);
      	console.log("index = ", index);


      }
  }
});
