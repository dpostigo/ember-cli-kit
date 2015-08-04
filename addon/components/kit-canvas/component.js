import Ember from 'ember';
import layout from './template';

var CANVAS_CLASS = 'canvasClass';

export default Ember.Component.extend({
	layout: layout,
	testProperty: 'test',
	items: 'something',
	didInitAttrs: function() {
	  // log('didInitAttrs');
	  // console.log("[didInitAttrs], this.get('titles') = ", this.get('titles'));

		console.log("[didInitAttrs], this.numberOfContentDivs = ", this.get('numberOfContentDivs'));
		this.logContentDivs();
	},
	
	didReceiveAttrs: function() {
	  // console.log("[didReceiveAttrs], this.get('titles') = ", this.get('titles'));
	  	console.log("[didReceiveAttrs], this.get('numberOfContentDivs') = ", this.get('numberOfContentDivs'));
		this.logContentDivs();
	},

	didUpdateAttrs: function() {
	  // console.log("[didUpdateAttrs], this.get('titles') = ", this.get('titles'));
		console.log("[didUpdateAttrs], this.get('numberOfContentDivs') = ", this.get('numberOfContentDivs'));
		this.logContentDivs();
	},
	
	willRender: function() {
	  // console.log("[didInitAttrs], this.get('titles') = ", this.get('titles'));
		console.log("[willRender], this.get('numberOfContentDivs') = ", this.get('numberOfContentDivs'));
		this.logContentDivs();

		console.log("Ember.A() = ", Ember.A());

		this.set('children', Ember.A());
	},


	// titles2: Ember.computed('titles2', function() {
	// 	// var contentDivs = this.$('.kit-canvas-content > div');

	// 	// var titles = this.getWithDefault('titles2', []);
	// 	// if (contentDivs.length > 0 && titles.length == 0) {
	// 	// 	for (var i = 0; i < contentDivs.length; i++) {
	// 	// 		titles.push(i + 1);
	// 	// 	}
	// 	// }
	// 	return ['one'];
	// }),

	componentTitles: Ember.computed('titles', function() {
		var contentDivs = this.$('.kit-canvas-content > div');

		var titles = this.getWithDefault('titles', []);
		console.log("[componentTitles], titles = ", titles);
		// if (contentDivs.length > 0 && titles.length == 0) {
		// 	for (var i = 0; i < contentDivs.length; i++) {
		// 		titles.push(i + 1);
		// 	}
		// }
		return ['one'];
	}),
    // layout: function() {
    // 	var ret = Ember.HTMLBars.compile("<div class='my-decorative-class'>{{yield}}</div>");
    // 	console.log("ret = ", ret);
    // 	ret = Ember.HTMLBars.compile(layout);
    // 	console.log("ret = ", ret);
    // 	return ret;
    // },

    titlesDidChange: Ember.on('init', Ember.observer('titles', function() {
    	var titles = this.get('titles');
    	console.log("[titlesDidChange], titles = ", titles);

	  	console.log("[titlesDidChange], this.get('numberOfContentDivs') = ", this.get('numberOfContentDivs'));
	
		// console.log("Ember.Handlebars.helpers.yield = ", Ember.Handlebars.helpers.yield);

	})),

    thingDidHappen: Ember.on('didInsertElement', function() {
    	var titles = this.get('titles');

    	console.log("[didInsertElement], titles = ", titles);
		console.log("[didInsertElement], this.get('numberOfContentDivs') = ", this.get('numberOfContentDivs'));
		this.logContentDivs();
    }),

    thingWillHappen: Ember.on('willInsertElement', function() {
    	var titles = this.get('titles');

    	console.log("[willInsertElement], titles = ", titles);
    	this.logContentDivs();
    }),
    logContentDivs: function() {
    	var contentDivs = this.$('.kit-canvas-content > div');
    	if (contentDivs != undefined) {
    		console.log("contentDivs.length = ", contentDivs.length);
    		this.calculateTitles();
    	}
    	else console.log("No content.");
    },
    // numberOfContentDivs: Ember.computed(function() {
    // 	var ret = 0;
    // 	var contentDivs = this.$('.kit-canvas-content > div');
    // 	if (contentDivs != undefined) {
    // 		ret = contentDivs.length;
    // 	}
    // 	return ret;
    // }).property('numberOfContentDivs'),

    numberOfContentDivs: Ember.computed(function() {
    	var ret = 0;
    	var contentDivs = this.$('.kit-canvas-content > div');
    	if (contentDivs != undefined) {
    		ret = contentDivs.length;
    	}
    	return ret;
    }).property(),

    calculateTitles:  function() {
    	var contentDivs = this.$('.kit-canvas-content > div');

    	var titles = this.getWithDefault('titles', []);
    	if (contentDivs.length > 0 && titles.length == 0) {
    		for (var i = 0; i < contentDivs.length; i++) {
    			titles.push(i + 1);
    		}
    	}

		// this.set('titles', titles);

	},



	renderBlock: function(buffer) {
		console.log("[renderBlock], ", this);
	},





	classNames: ['site-canvas'],
	classNameBindings: [CANVAS_CLASS],

	canvasIndex: 0,
	canvasStyle: 'transform: translate3d(0%,0,0)',
	canvasStyle2: Ember.computed('canvasIndex', function() {
		var value = this.get('canvasIndex') * -100;
		var string = 'transform: translate3d(' + value + '%,0,0)';
		return new Ember.Handlebars.SafeString(string);
	}),

	actions: {
		slideToIndex: function(index) {
			this.set('canvasIndex', index);
			this.set(CANVAS_CLASS, 'canvas-' + index);

			var value = index * -100;
			this.set('canvasStyle', Ember.String('transform: translate3d(%@%,0,0)').fmt(value));

		},
		slide: function() {
		// console.log(this.get('pages'));


		// var index = parseInt(this.get('param'), 10);
		var index = this.get('param');
		console.log("[slide], ", this);
		console.log("index = ", index);


	}
}
});
