import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import ResizeMixin from 'ember-nrg-ui/mixins/resize';
import Component from '@ember/component';
import layout from './template';

export default Component.extend(ResizeMixin, {
  layout,

  title: 'App Title',

  classNames: ['ui', 'menu', 'main', 'fixed', 'inverted'],

  router: service(),

  isMobileScreen: alias('responsive.isMobileScreenGroup'),

  environmentDisplay: computed(
    'applicationSettings.localEnvironment',
    function() {
      const environment = this.get('applicationSettings.localEnvironment');
      if (environment && environment !== 'prod') {
        return environment.toUpperCase();
      }
      return null;
    }
  ),

  actions: {
    toggleSidebar() {
      this.sendAction('toggleSidebar');
    },
  },
});
