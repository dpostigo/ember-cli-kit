import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  // tagName: 'li',
  // classNameBindings: ['active'],
  
  // navLinks: null,
  
  // active: Ember.computed('navLinks.@each.active', function(){
  //   var links = this.get('navLinks');
  //   console.log("links = ", links);
  //   return null;
  // 	// return Ember.any(links, function(item){
  // 	// 	return item.get('active');
  // 	// });
  // }),
  // initLinks: Ember.on('init', function(){
  // 	this.set('navLinks', []);
  // }),

  // activeNav: Ember.computed('navLinks', {
  // 	set: function(key, value){
  // 		value.get('navLinks').addObject(this);
  // 	}
  // }),

 
  // didInsertElement: Ember.on('didInsertElement', function() {
  //   console.log("[didInsertElement], this.parentView = ", this.parentView);
  // })

  
});
