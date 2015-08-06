/* jshint node: true */
'use strict';

module.exports = {
	name: 'ember-cli-kit',
	included: function(app) {
		this._super.included(app);
		app.import(app.bowerDirectory + '/kit-ember/css/kit-ember.css');
	},
	isDevelopingAddon: function() {
		return true;
	}
};
