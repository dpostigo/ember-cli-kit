import Ember from 'ember';
import layout from './template';
import Sectionable from '../../mixins/sectionable';

export default Ember.Component.extend(Sectionable, {
  layout: layout,
  classNames: ['kit-scroller-container'],

  index: 0,
  sections: 'content other frame',


  numberOfItems: Ember.computed('scroller', function() {
    // return this.$('.kit-canvas-content').children().length;
    return this.get('scroller').children().length;
  }),

  // numberOfItems: Ember.computed('parentView', function() {
  //   return this.$('.kit-canvas-content').children().length;
  // }),
  willInsertElement: Ember.on('willInsertElement', function() {
    // this.get('parentView').set('scroller', this);
    this.set('scroller', this.$('.kit-scroller-content'));
  }),

  actions: {
  	goPrevious: function() {
  		var index = this.get('index');
  		if (index > 0) {
  			this.send('slideToIndex', index - 1);
  		}
  	},
  	goNext: function() {
      console.log("[goNext]");
  		var max = this.get('numberOfItems');
      console.log("max = ", max);
  		var index = this.get('index');
  		if (index < max - 1) {
  			this.send('slideToIndex', index + 1);
  		}
  	},
  	slideToIndex: function(index) {
      console.log("[slideToIndex]");
  		this.set('index', index);
  		var value = index * -100;
  		var transform = Ember.String.fmt('translate3d(%@%,0,0)', value);
  		this.set('transform', Ember.Handlebars.SafeString(transform));
  		this.set('canvasStyle', Ember.String.htmlSafe('transform: ' + transform));

  	}
  }
});
