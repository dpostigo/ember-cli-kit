import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('kit-offcanvas', 'Unit | Component | kit offcanvas', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  // needs: ['component:kit-offcanvas', 'template:components/template/kit-offcanvas'],
  needs: ['component:kit-offcanvas'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject();
  // Renders the component to the page
  this.render();

  // assert.equal(this.$().text().trim(), '');
  console.log("component.$() = ", component.$());
  console.log("component.$('.kit-offcanvas') = ", component.$('.kit-offcanvas'));
  console.log("component.$('.ember-view') = ", component.$('.ember-view'));
  console.log("this.$('.ember-view') = ", this.$('.ember-view'));

  console.log("this.classNames = ", this.classNames);
  console.log("component.classNames = ", component.classNames);
  // assert.equal(component.$('.kit-offcanvas-sidebar').length, 1);
});
