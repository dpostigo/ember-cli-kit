module.exports = {
  description: '',
  name: 'ember-cli-kit',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // },

  afterInstall: function() {
    return this.addBowerPackageToProject('kit-ember'); // is a promise
  }
};
