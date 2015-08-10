import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	layout: layout,


	tagName: 'svg',

	radius: 2.5,
	attributeBindings: ['width', 'height', 'style'],

	width: Ember.computed('radius', function() {
		return this.get('radius') * 2;
	}),
	height: Ember.computed.alias('width'),
});
