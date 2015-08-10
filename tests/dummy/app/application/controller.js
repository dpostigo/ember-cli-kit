import Ember from 'ember';

export default Ember.Controller.extend({
	firstName: "Tom",

	slides: ['slide1', 'slide2', 'slide3'],
	items: '1 2 3 4 5'.split(' ')
});
