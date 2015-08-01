import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  actions: {
      save: function(param) {
      	console.log("save");
      	console.log("this.get('param') = ", this.get('param'));
      	console.log("param = ", param);
      }
  }
});
