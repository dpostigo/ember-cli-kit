import Ember from 'ember';

export function makeAction(params, hash) {
  // return params;
  console.log("params = ", params);
  var actionName = params[0];


  
  return (...args) => {
    this.send(actionName, ...args);
  };
}

export default Ember.Helper.helper(makeAction);


// export function makeAction(params) {
//   var actionName = params[0];
//   return (...args) => {
//     this.send(actionName, ...args);
//   };
// }

// export default Ember.HTMLBars.makeBoundHelper(makeAction);