export default {
    data: function () {
        return {
            activePage: '',
        }
    },
    props: ['active'],
    created() {
        this.activeChange();
    },
    methods: {
        activeChange() {
          switch(this.active) {
              case 'call': this.activePage = 'callPage'; break;
              case 'chat': this.activePage = 'chatPage'; break;
              case 'messenger': this.activePage = 'messengerPage'; break;
              case 'telegram': this.activePage = 'telegramPage'; break;
              case 'vk': this.activePage = 'vkPage'; break;
              case 'viber': this.activePage = 'viberPage'; break;
              case 'whatsapp': this.activePage = 'whatsappPage'; break;
              case 'mail': this.activePage = 'mailPage'; break;
          }
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
