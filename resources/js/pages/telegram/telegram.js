import LowerSection from './../../components/lower-section/lower-section.vue';

export default {
    components: {
        'lower-section': LowerSection,
    },
    data: function () {
        return {}
    },
    methods: {
        exit() {
            SwiftWidgetEventBus.$emit('go', 'widget-button');
        }
    }

}
