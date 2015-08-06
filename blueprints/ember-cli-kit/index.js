module.exports = {
  description: '',
  afterInstall: function() {
    return this.addBowerPackageToProject('kit-ember'); // is a promise
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
