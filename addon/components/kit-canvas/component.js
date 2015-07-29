import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: ['canvas'],
  canvas: '0'
});
