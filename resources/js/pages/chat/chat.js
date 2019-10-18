import LowerSection from './../../components/lower-section/lower-section.vue';

export default {
    components: {
        'lower-section': LowerSection,
    },
    data: function () {
        return {}
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
            SwiftWidgetEventBus.$emit('go','widget-button');
        }
    }

}
