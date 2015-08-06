import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('/kit-canvas-scroller', 'Integration | Component | kit canvas scroller', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kit-canvas-scroller}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kit-canvas-scroller}}
      template block text
    {{/kit-canvas-scroller}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
