import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	layout: layout,
	index: 0, 

	classNames: ['kit-canvas'],

	transform: 'translate3d(0%,0,0)',
	canvasStyle: 'transform: translate3d(0%,0,0)',
	numberOfItems: Ember.computed('scroller.numberOfItems', function() {
		return this.get('scroller').get('numberOfItems');
	}),


	actions: {
		goPrevious: function() {
			var index = this.get('index');
			if (index > 0) {
				this.send('slideToIndex', index - 1);
			}
		},
		goNext: function() {
			var max = this.get('numberOfItems');
			var index = this.get('index');
			if (index < max - 1) {
				this.send('slideToIndex', index + 1);
			}
		},
		slideToIndex: function(index) {
			this.set('index', index);
			var value = index * -100;
			var transform = Ember.String.fmt('translate3d(%@%,0,0)', value);
			this.set('transform', Ember.Handlebars.SafeString(transform));
			this.set('canvasStyle', Ember.String.htmlSafe('transform: ' + transform));

		}


	}

});
