import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	layout: layout,
	action: 'slideToIndex',
	actions: {
		slideToIndex: function() {
			return true;
		}
	},
	// willInsertElement: Ember.on('willInsertElement', function() {
	// }),

});
