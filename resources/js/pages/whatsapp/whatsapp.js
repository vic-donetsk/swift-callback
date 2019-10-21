import LowerSection from './../../components/lower-section/lower-section.vue';
import ExitBlock from './../../components/exit-block/exit-block.vue';

export default {
    components: {
        'lower-section': LowerSection,
        'exit-block': ExitBlock
    },
    data: function () {
        return {}
    },
    methods: {
        exit() {
            SwiftWidgetEventBus.$emit('go', 'page-rating');
        },
        startWhatsapp() {
            // TODO: integrate Whatsapp API
        }
    }

}
