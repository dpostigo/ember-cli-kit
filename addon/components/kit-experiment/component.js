import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,


  onInit: Ember.on('init', function() {
  	// this.parseSections();
  }),


  // sections: Ember.computed('sectionNames', function() {
   
  //   var array = this.sectionNamesAsArray();

  //   console.log("array = ", array);
  //   console.log("this.get('sectionsAsHash') = ", this.get('sectionsAsHash'));

  //   return array;
  // }),




  /**
   * section names and parameters
   * 
   */
  // parameter: 'section1 section2',
  // sectionNames: Ember.computed('parameter', function() {
  //   return this.get('parameter').split(' ');
  // }),


	sections: 'section1 section2 header',
  sectionsParameterName: 'parameter',
  sectionNames: Ember.computed('sectionsParameterName', function() {
  	return this.get(this.get('sectionsParameterName')).split(' ');
  }),



});
