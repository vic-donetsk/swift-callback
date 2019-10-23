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
import PageRating from './pages/rating/rating.vue';

//import 'vue-cool-select/dist/themes/bootstrap.css';


window._ = require('lodash');

// Init #swift-widget
let widget = document.createElement('div');
widget.setAttribute('id', 'swift-widget');
document.body.appendChild(widget);

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
Vue.component('page-rating', PageRating);

// Init base component
const LayoutComponent = Vue.extend(WidgetComponent);
const vm = new LayoutComponent();


var script_link = document.getElementsByTagName('script')[0].src;
var url = new URL(script_link);
var key = url.searchParams.get("key");
var lang = url.searchParams.get("lang");
lang = (lang)?lang:'en';

console.log([key,lang]);

const options = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},json:true
};
axios.post('https://swift.mdhtcdn.net/api/init/', {lang:lang, key:key},options).then((request) => {
    if (request.data.status != 'ok') {
        console.error(request.data.error[0]);
        return false;
    }
     window.swiftCallbackTranslations  = request.data.lang;
     window.swiftCallbackSocial = request.data.social;
     vm.$mount('#swift-widget');
});

