/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-kit',
  included: function(app) {
    this._super.included(app);

    // app.import(app.bowerDirectory + '/x-button/dist/js/x-button.js');
    app.import(app.bowerDirectory + '/basscss/css/basscss.css');
  }
};
