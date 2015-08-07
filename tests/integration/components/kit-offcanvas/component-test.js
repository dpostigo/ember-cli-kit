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


test('it has correct structure', function(assert) {

	assert.expect(2);


  // // Template block usage:
  // this.render(hbs`
  // 	{{#kit-offcanvas}}
  // 	template block text
  // 	{{/kit-offcanvas}}
  // 	`);
	this.render();

  // assert.equal(find('ul.posts li:first').text(), 'My new post');
  assert.equal(this.$('.kit-offcanvas .kit-offcanvas-sidebar').length, 1);
  assert.equal(this.$('.kit-offcanvas-content').text().trim(), 'template block text');
  
	// assert.equal(this.$().attr('class'), 'ember-view kit-offcanvas');



  // var component = this.subject();
  // this.render();

  // // console.log("this.element = ", this.element);
  // // console.log("this.elementId = ", this.elementId);
  


  // assert.equal(this.$('.kit-offcanvas').text().trim(), 'template block text');
  // // assert.equal(this.$().find('kit-offcanvas'), );
  // // var $el = assert.findWithAssert('.doesnt-exist');

});