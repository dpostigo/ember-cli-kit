import Ember from 'ember';
import layout from './template';


export default Ember.Component.extend({
	layout: layout,
	
	logContentDivs: function() {
		var contentDivs = this.$('.kit-canvas-content > div');
		if (contentDivs !== undefined) {
			console.log("contentDivs.length = ", contentDivs.length);
			this.calculateTitles();
		}
		else {
			console.log("No content.");
		}
	},


	classNames: ['site-canvas'],
	classNameBindings: ['canvasClass'],

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
			this.set('canvasStyle', Ember.String('transform: translate3d(%@%,0,0)').fmt(value));

		}
	}
});
