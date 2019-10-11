import Vue from "vue";
import localization from './mixins/localization.js';
import WidgetComponent from './components/widget/widget.vue';
import WidgetButton from './components/widget-button/widget-button.vue';
import WidgetPopup from './components/widget-popup/widget-popup.vue';

import PageVK from './pages/vk/vk.vue';
import PageTelegram from './pages/telegram/telegram.vue';
import PageViber from './pages/viber/viber.vue';


window._ = require('lodash');

// Init #swift-widget
let widget = document.createElement('div');
widget.setAttribute('id', 'swift-widget');
document.body.appendChild(widget);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.SwiftWidgetEventBus = new Vue();

Vue.mixin(localization);
Vue.component('widget-component', WidgetComponent);
Vue.component('widget-button', WidgetButton);
Vue.component('widget-popup', WidgetPopup);

Vue.component('page-vk', PageVK);
Vue.component('page-telegram', PageTelegram);
Vue.component('page-viber', PageViber);


// Init base component
const LayoutComponent = Vue.extend(WidgetComponent);
const vm = new LayoutComponent();
vm.$mount('#swift-widget');
