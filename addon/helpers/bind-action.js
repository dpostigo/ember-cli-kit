import Ember from 'ember';

export function bindAction(params, fash) {
  // return params;

  var component = this;
  
  var action = component._actions[params[0]];
  
  return function() {
    action.apply(component, arguments);
  }
}

export default Ember.HTMLBars.helper(bindAction);

