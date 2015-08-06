import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('/kit-offcanvas', 'Integration | Component | kit offcanvas', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kit-offcanvas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kit-offcanvas}}
      template block text
    {{/kit-offcanvas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
