import Vue from "vue";
import localization from './mixins/localization.js';
import WidgetComponent from './components/widget/widget.vue';
import WidgetButton from './components/widget-button/widget-button.vue';
import WidgetPopup from './components/widget-popup/widget-popup.vue';

import PageCall from './pages/call/call.vue';
import PageChat from './pages/chat/chat.vue';
import PageMessenger from './pages/messenger/messenger.vue';
import PageTelegram from './pages/telegram/telegram.vue';
import PageVK from './pages/vk/vk.vue';
import PageViber from './pages/viber/viber.vue';
import PageWhatsapp from './pages/whatsapp/whatsapp.vue';
import PageMail from './pages/mail/mail.vue';

import PageChooseTime from './pages/choose-time/choose-time.vue';
import PageChooseTimeNonumber from './pages/choose-time-nonumber/choose-time-nonumber.vue';
import PageNotWorking from './pages/not-working/not-working.vue';
import PageNoManager from './pages/no-manager/no-manager.vue';


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
Vue.component('page-chat', PageChat);
Vue.component('page-messenger', PageMessenger);
Vue.component('page-telegram', PageTelegram);
Vue.component('page-vk', PageVK);
Vue.component('page-viber', PageViber);
Vue.component('page-whatsapp', PageWhatsapp);
Vue.component('page-mail', PageMail);

Vue.component('page-chooseTime', PageChooseTime);
Vue.component('page-chooseTimeNonumber', PageChooseTimeNonumber);
Vue.component('page-notWorking', PageNotWorking);
Vue.component('page-noManager', PageNoManager);

// Init base component
const LayoutComponent = Vue.extend(WidgetComponent);
const vm = new LayoutComponent();


axios.get('./lang/en.json').then((request) => {
    window.swiftCallbackTranslations  = request.data;
    vm.$mount('#swift-widget');
});

