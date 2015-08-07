import Ember from 'ember';
import SectionableMixin from '../../../mixins/sectionable';
import { module, test } from 'qunit';

module('Unit | Mixin | sectionable');

// Replace this with your real tests.
test('it works', function(assert) {
  var SectionableObject = Ember.Object.extend(SectionableMixin);
  var subject = SectionableObject.create();
  assert.ok(subject);
});
