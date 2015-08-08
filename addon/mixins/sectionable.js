import Ember from 'ember';

export default Ember.Mixin.create({

	onInit: Ember.on('init', function() {
		this.sectionableParse();
	}),

	sectionsParameterName: 'sections',
	sectionNames: Ember.computed('sectionsParameterName', function() {
		return this.get(this.get('sectionsParameterName')).split(' ');
	}),



	/**
	 * sectionableParse
	 *
	 * 
	 */
	sectionableParse: function() {
		console.log("[sectionableParse]");
		var sections = this.get('sectionArray');
		for (var i = 0; i < sections.length; i++) {
			var object = sections[i];
			var name = object.meta.name;
			this.set(name, object);
			this.set(object.meta.has, true);
		}
	},

	sectionableParseDebug: function() {
		var sections = this.get('sectionArray');

		for (var i = 0; i < sections.length; i++) {
			var object = sections[i];
			var name = object.meta.name;
			console.log("this.get(", object.meta.name, ") = ", this.get(object.meta.name));
			console.log("this.get(", object.meta.has, ") = ", this.get(object.meta.has));
		}
	},





	/**
	 * sectionHash
	 * @type {hash}
	 * 
	 *
	 */
	sectionHash: Ember.computed.alias('sectionsAsHash'),
	sectionsAsHash: Ember.computed('sectionNames', function() {
	  var array = this.get('sectionsAsArray');

	  var ret = {};
	  for (var i = 0; i < array.length; i++) {
	    var object = array[i];
	    ret[object.name] = object;
	  }
	  return ret;
	}),


	/**
	 * 
	 * sectionArray
	 * @type {array}
	 * 
	 */
	sectionArray: Ember.computed.alias('sectionsAsArray'),
	sectionsAsArray: Ember.computed('sectionNames', function() {
	  var names = this.get('sectionNames');
	  
	  var ret = [];
	  for (var i = 0; i < names.length; i++) {
	    var name = names[i];
	    var meta = {name: name, has: 'has' + Ember.String.capitalize(name) };

	    var object = {meta: meta};
	    object[name] = true;
	    ret[i] = object;

	    // var object = {name: name};
	    // object['has'] = 'has' + Ember.String.capitalize(name);


	    // object[meta.has] = true;

	  }
	  return ret;

	}),
});
