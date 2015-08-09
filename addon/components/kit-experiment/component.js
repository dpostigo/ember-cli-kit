import Ember from 'ember';
import layout from './template';
import Sectionable from '../../mixins/sectionable';



export default Ember.Component.extend(Sectionable, {
	layout: layout,

	sections: 'section1 section2 header',
	// sections: 'toggle sidebar body',

  // onInit: Ember.on('init', function() {
  // 	// this.parseSections();
  // }),


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


  // sectionsParameterName: 'parameter',
  // sectionNames: Ember.computed('sectionsParameterName', function() {
  // 	return this.get(this.get('sectionsParameterName')).split(' ');
  // }),



});
