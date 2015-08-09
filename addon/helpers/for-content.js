import Ember from 'ember';



// Ember.Helper.registerHelper('test-helper', function(value) {
//   var result = '<a href="http://www.example.com">' + value + '</a>';
//   return new Ember.(result);
// });




// export function forContent(params, hash) {

// 	// console.log("params = ", params);
// 	// console.log("hash = ", hash);
// 	// var result = '<a href="http://www.example.com">' + params + '</a>';


// 	// return new Ember.String.htmlSafe(result);
//  //  // return params;
// }


// export function forContent(params, hash) {
// 	console.log("arguments = ", arguments);
// 	console.log("params = ", params);
// 	console.log("hash = ", hash);
// 	console.log("this = ", this);
// 	var values = Array.prototype.slice.call(arguments, 0, -1);
// 	return values.join('||');

// }


// export default Ember.Helper.helper(forContent);


// Usage: {{greet-someone 'bob' greeting='say hello'}}
// export default Ember.Helper.extend({
//   compute(params, hash) {
//   	console.log("params = ", params);
//   	console.log("hash = ", hash);
//     return `Hello ${params[0]}, nice to ${hash.greeting}`;
//   }
// });


export default Ember.Helper.extend({
  // Same API as components:
  // session: Ember.inject.service(),
  // renderer: Ember.inject.service(),
  // template: Ember.inject.service(),
  application: Ember.inject.service(),
  compute(params, hash) {
  	console.log("params = ", params);	
  	console.log("hash = ", hash);	
  	console.log("this.get('session') = ", this.get('session'));
  	console.log("this.get('renderer') = ", this.get('renderer'));
  	console.log("this.get('template') = ", this.get('template'));
  	console.log("this.get('application') = ", this.get('application'));


    return this.get('session.currentUser.name');
  }
});