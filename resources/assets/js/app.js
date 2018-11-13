
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('header-component', require('./components/HeaderComponent.vue'));
Vue.component('watcher-example-component', require('./components/WatcherExampleComponent.vue'));
Vue.component('conditional-component', require('./components/ConditionalComponent.vue'));
Vue.component('example-component', require('./components/ExampleComponent.vue'));

import HeaderComponent from './components/HeaderComponent.vue';

const app = new Vue({
    el: '#app',
    components: {
      'header-component' : HeaderComponent
    },
    data: {
        posts: [
            {stt: 1, title: 'bai dang 1', author: 'nguyen van a'},
            {stt: 2, title: 'bai dang 2', author: 'nguyen van b'},
            {stt: 3, title: 'bai dang 3', author: 'nguyen van c'},
            {stt: 4, title: 'bai dang 4', author: 'nguyen van d'}
        ],
        fontSizePost: 1
    },
    methods: {
        changeFontSize: function(newFontSize) {
            this.fontSizePost += newFontSize;
        }
    }
});
