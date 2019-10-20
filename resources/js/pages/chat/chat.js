import LowerSection from './../../components/lower-section/lower-section.vue';

export default {
    components: {
        'lower-section': LowerSection,
    },
    data: function () {
        return {
            allChatContent: '',
            currentMessage: '',
            clientMessageLayouts1: `<div class="swift-widget_chat-message mod_client-message">
                        <div class="swift-widget_message-block mod_client">
                            <div class="message-block_text">`,
            clientMessageLayouts2: `</div>
                            <div class="message-block_time">`,
            clientMessageLayouts3: `</div>
                        </div>
                        <img src="/img/user.svg" class="swift-widget_chat-avatar" alt="SWIFT">
                    </div>`

        }
    },
    mounted(){
        let dialog = this.$el.querySelector("#swift-widget_scrolling");
        console.log('created');
        dialog.scrollTop = dialog.clientHeight;
    },
    updated(){
        let dialog = this.$el.querySelector("#swift-widget_scrolling");
        console.log('updated');
        dialog.scrollTop = dialog.clientHeight;
    },
    methods: {
        exit() {
            SwiftWidgetEventBus.$emit('go', 'page-rating');
        },
        send() {
            let date = new Date();
            let currentTime = date.getHours() + ':' + date.getMinutes();
            this.allChatContent += this.clientMessageLayouts1 +
                                   this.currentMessage +
                                   this.clientMessageLayouts2 +
                                   currentTime +
                                   this.clientMessageLayouts3;
            console.log(this.allChatContent);
            this.currentMessage = '';

        }
    }

}
