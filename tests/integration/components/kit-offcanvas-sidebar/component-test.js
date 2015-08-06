import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('/kit-offcanvas-sidebar', 'Integration | Component | kit offcanvas sidebar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kit-offcanvas-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kit-offcanvas-sidebar}}
      template block text
    {{/kit-offcanvas-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});