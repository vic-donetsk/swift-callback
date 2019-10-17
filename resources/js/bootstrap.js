import Vue from "vue";
import localization from './mixins/localization.js';
import WidgetComponent from './components/widget/widget.vue';
import WidgetButton from './components/widget-button/widget-button.vue';
import WidgetPopup from './components/widget-popup/widget-popup.vue';

import PageCall from './pages/call/call.vue';
import PageVK from './pages/vk/vk.vue';
import PageTelegram from './pages/telegram/telegram.vue';
import PageViber from './pages/viber/viber.vue';
import PageMessenger from './pages/messenger/messenger.vue';
import PageWhatsapp from './pages/whatsapp/whatsapp.vue';
import PageMail from './pages/mail/mail.vue';

import PageChooseTime from './pages/choose-time/choose-time.vue';


window._ = require('lodash');

// Init #swift-widget
let widget = document.createElement('div');
widget.setAttribute('id', 'swift-widget');
document.body.appendChild(widget);

//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.SwiftWidgetEventBus = new Vue();

Vue.mixin(localization);
Vue.component('widget-component', WidgetComponent);
Vue.component('widget-button', WidgetButton);
Vue.component('widget-popup', WidgetPopup);

Vue.component('page-call', PageCall);
Vue.component('page-vk', PageVK);
Vue.component('page-telegram', PageTelegram);
Vue.component('page-viber', PageViber);
Vue.component('page-messenger', PageMessenger);
Vue.component('page-whatsapp', PageWhatsapp);
Vue.component('page-mail', PageMail);

Vue.component('page-chooseTime', PageChooseTime);

// Init base component
const LayoutComponent = Vue.extend(WidgetComponent);
const vm = new LayoutComponent();


axios.get('./lang/en.json').then((request) => {
    window.swiftCallbackTranslations  = request.data;
    vm.$mount('#swift-widget');
});

