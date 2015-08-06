module.exports = {
  description: '',
  afterInstall: function() {
    return this.addBowerPackageToProject('kit-ember'); // is a promise
  }
};
