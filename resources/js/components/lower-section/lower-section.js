import SvgSprite from './svg-sprite/svg-sprite.vue'

export default {
    components: {
        'svg-sprite': SvgSprite,
    },
    data: function () {
        return {
            activePage: '',
            mobileState: '',
            isMobile: false
        }
    },
    props: ['active'],
    created() {
        if (document.documentElement.clientWidth < 600) {
            this.isMobile = true;
        }
        this.activeChange();
    },
    methods: {
        activeChange() {
          switch(this.active) {
              case 'call': {
                  this.activePage = 'callPage';
                  this.mobileState = 1;
                  break;
              }
              case 'chat': {
                  this.activePage = 'chatPage';
                  this.mobileState = 1;
                  break;
              }
              case 'messenger': {
                  this.activePage = 'messengerPage';
                  this.mobileState = 1;
                  break;
              }
              case 'telegram': {
                  this.activePage = 'telegramPage';
                  this.mobileState = 1;
                  break;
              }
              case 'vk': {
                  this.activePage = 'vkPage';
                  this.mobileState = 2;
                  break;
              }
              case 'viber': {
                  this.activePage = 'viberPage';
                  this.mobileState = 2;
                  break;
              }
              case 'whatsapp': {
                  this.activePage = 'whatsappPage';
                  this.mobileState = 2;
                  break;
              }
              case 'mail': {
                  this.activePage = 'mailPage';
                  this.mobileState = 2;
                  break;
              }
              case 'noNumber': {
                  this.mobileState = 1;
                  break;
              }

              //case 'chat': this.activePage = 'chatPage'; break;
              //case 'messenger': this.activePage = 'messengerPage'; break;
              //case 'telegram': this.activePage = 'telegramPage'; break;
              //case 'vk': this.activePage = 'vkPage'; break;
              //case 'viber': this.activePage = 'viberPage'; break;
              //case 'whatsapp': this.activePage = 'whatsappPage'; break;
              //case 'mail': this.activePage = 'mailPage'; break;
          }
        },
        toLeftMenu() {
            this.mobileState = 1;
        },
        toRightMenu() {
            this.mobileState = 2;
        },



        call() {
            SwiftWidgetEventBus.$emit('go', 'page-call');
        },
        chat() {
            SwiftWidgetEventBus.$emit('go', 'page-chat');
        },
        messenger() {
            SwiftWidgetEventBus.$emit('go', 'page-messenger');
        },
        telegram() {
            SwiftWidgetEventBus.$emit('go', 'page-telegram');
        },
        vk() {
            SwiftWidgetEventBus.$emit('go', 'page-vk');
        },
        viber() {
            SwiftWidgetEventBus.$emit('go', 'page-viber');
        },
        whatsapp() {
            SwiftWidgetEventBus.$emit('go', 'page-whatsapp');
        },
        mail() {
            SwiftWidgetEventBus.$emit('go', 'page-mail');
        },
    },

    watch: {
        active() {
            this.activeChange;
        }
    }
}
