import LowerSection from './../../components/lower-section/lower-section.vue';

export default {
    components: {
        'lower-section': LowerSection,
    },
    data: function () {
        return {
            currentMessage: '',
            messages: [
                // TODO: these are only EXAMPLES of client/manager messages!!
                // array must fill in chat process !!
                { text: "Hi,I have a problem!",
                  time: "10:00",
                  isManager: false // client message
                },
                { text: "Hi,how can I help you?",
                  time: "10:01",
                  isManager: true // manager message
                },
            ],


        }
    },
    mounted(){
        let dialog = this.$el.querySelector("#swift-widget_scrolling");
        dialog.scrollTop = dialog.clientHeight;
    },
    updated(){
        let dialog = this.$el.querySelector("#swift-widget_scrolling");
        dialog.scrollTop = dialog.clientHeight;
    },
    methods: {
        exit() {
            SwiftWidgetEventBus.$emit('go', 'page-rating');
        },
        handleEnter(event) {
            if (event.keyCode === 13) {
                this.send();
            }
        },
        send() {
            // creation new client message in chat
            let date = new Date();
            let currentTime = date.getHours() + ':' + date.getMinutes();
            let newMessage = {
                text: this.currentMessage,
                time: currentTime,
                isManager: false
            };
            // TODO: for manager message the same object must be append to array "messages",
            // only field "isManager" must be setting for "true"
            this.messages.push(newMessage);
            this.currentMessage = '';
        }
    }
}
