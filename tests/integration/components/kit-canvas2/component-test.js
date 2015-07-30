import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('/kit-canvas2', 'Integration | Component | kit canvas2', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kit-canvas2}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#kit-canvas2}}
      template block text
    {{/kit-canvas2}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
