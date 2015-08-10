import Ember from 'ember';
import layout from './template';
import Sectionable from '../../mixins/sectionable';

export default Ember.Component.extend(Sectionable, {
  layout: layout,
  classNames: ['kit-page-control'],


  sections: 'previous navigation next',

  radius: 2.5,
  spacing: 4,

  style: Ember.computed('spacing', function() {
    return Ember.String.fmt('margin: 0 %@px', this.get('spacing'));
  }),


  selectedIndexClass: Ember.computed('selectedIndex', function() {


  }),

  actions: {
    clickIndex: function(index) {
      console.log("clickIndex");
      console.log("index = ", index);
      this.set('selectedIndex', index)
    }
  },

  items: Ember.computed(function() {
  	
  	var ret = null;
  	var titles = this.get('titles');


  	if (titles) {
  		ret = titles;
  	} else {
  		var count = this.get('count');
  		ret = [];
  		for (var i = 0; i < count; i++) {
  			ret[i] = i;
  		}
  	}
  	return ret;
  }),

  hasCount: Ember.computed('count', function() {
  	return this.get('count') !== undefined;
  })
	

});
