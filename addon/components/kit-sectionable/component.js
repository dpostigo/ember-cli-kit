import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement: Ember.on('didInsertElement', function() {
  	var sections = this.get('sections').split(' ');

  	var section = {};
  	for (var i = 0; i < sections.length; i++) {
  		section[sections[i]] = true;
  	}

  	this.set('section', section);
  }),
});
