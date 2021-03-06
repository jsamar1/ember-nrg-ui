import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | nrg-context-menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.contextServiceStub = EmberObject.create({
      contextItems: [
        {
          label: 'item1',
        },
        {
          label: 'item2',
        },
      ],
    });

    await render(
      hbs`{{nrg-context-menu title='' contextService=contextServiceStub}}`
    );

    const text = this.$().text();
    assert.ok(/item1/.test(text));
    assert.ok(/item2/.test(text));
  });
});
