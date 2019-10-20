import LowerSection from './../../components/lower-section/lower-section.vue';

export default {
    components: {
        'lower-section': LowerSection,
    },
    data: function () {
        return {
            message: '',
            email: '',
            name: ''
        }
    },
    methods: {
        exit() {
            SwiftWidgetEventBus.$emit('go','widget-button');
        },
        sendEmail() {
            // TODO: plug Mail service:
            // this.message = text of client message
            // this.email = client email
            // this.name = client name
        }
    }
}