import Ember from 'ember';
import Sectionable from '../../mixins/sectionable';
import layout from './template';

export default Ember.Component.extend(Sectionable, {
	layout: layout,
	sections: 'toggle sidebar body',
	classNames: ['kit-offcanvas'],
	classNameBindings: ['open'],
	open: false,
	actions: {
	    toggle: function() {
			this.toggleProperty('open');
	    }
	},

	// toggle: Ember.computed(function() {
	// 	console.log("yo");

	// 	return {toggle: true};
	// })
	// onInit: Ember.on('init', function() {
	// 	console.log("helo");

	// }),
	// didInsertElement: Ember.on('didInsertElement', function() {
	// 	console.log("didInsertElement");

	// })
});
