# ember-cli-kit

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


## Recreate

###

* Install npm dependencies.
	```
    "ember-cli-emblem": "^0.3.0"
    ```

* Install devDependencies
    * "ember-cli-less": "^1.3.3" 
    Renamed tests/dummy/styles/app.css to tests/dummy/styles/app.less


* Modify index.js
	```
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
	```

### Create a blueprint inblueprints/ember-cli-kit/index.js

	```
	module.exports = {
	  description: '',
	  afterInstall: function() {
	    return this.addBowerPackageToProject('kit-ember'); // is a promise
	  }
	};

	```

### Create the component.
	```
	ember g component kit-canvas --pod
	```

