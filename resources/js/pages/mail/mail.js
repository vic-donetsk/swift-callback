import LowerSection from './../../components/lower-section/lower-section.vue';
import ExitBlock from './../../components/exit-block/exit-block.vue';

export default {
    components: {
        'lower-section': LowerSection,
        'exit-block': ExitBlock
    },
    data: function () {
        return {
            message: '',
            email: '',
            name: ''
        }
    },
    methods: {
        sendEmail() {
            // TODO: plug Mail service:
            // this.message = text of client message
            // this.email = client email
            // this.name = client name
        }
    }
}