import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	layout: layout,
	// slideAction: Ember.computed('parentView.slideToIndex', function() {
	// 	return this.get('parentView').get('slideToIndex');
	// }),
	action: 'slideToIndex',
	// slideAction:
	
	actions: {
		slideToIndex: function() {
			console.log("slideAction");
			return true;
		}
	},
	willInsertElement: Ember.on('willInsertElement', function() {
		console.log("[willInsertElement], this.parentView = ", this.parentView);
		console.log("this.parentView.actions = ", this.parentView.actions);
		// console.log("[willInsertElement], this.element = ", this.element);
		// console.log("this.get('itemsCount') = ", this.get('itemsCount'));

		var parent = this.parentView;
		console.log("parent.slideToIndex = ", parent.slideToIndex);
		console.log("parent.actions = ", parent.actions);

	}),

});
