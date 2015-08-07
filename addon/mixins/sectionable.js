import Ember from 'ember';

export default Ember.Mixin.create({
	didInsertElement: Ember.on('didInsertElement', function() {
		// this.parseSections();
	}),

	parseSections: function () {
		var sections = this.get('sections').split(' ');

		// var section = {};
		// for (var i = 0; i < sections.length; i++) {
		// 	section[sections[i]] = true;
		// };
		// this.set('section', section);
		// console.log("section = ", section);

		var section = {};
		for (var i = 0; i < sections.length; i++) {
			var name = sections[i];
			// var obj = {};
			// obj['has' + Ember.String.capitalize(name)] = true;
			var obj = {};
			obj[name] = true;
			this.set(name, obj);

			var hasString = 'has' + Ember.String.capitalize(name);
			this.set(hasString, true);

			// console.log("this.get(name) = ", this.get(name));
			// console.log("this.get(hasString) = ", this.get(hasString));
			// console.log("hasString = ", hasString);	

		};


	}
});
