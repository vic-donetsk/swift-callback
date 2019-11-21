export default {
    data: function () {
        return {}
    },
    props: ['page'],
    methods: {
        exit() {
            if (['mail', 'chooseTime', 'chooseTimeNonumber', 'noManager', 'notWorking'].indexOf(this.page) !== -1) {
                SwiftWidgetEventBus.$emit('go', 'widget-button');

                if (window.width < 1280) {
                    document.body.classList.remove("swift-widget-hide-scroll");
                    document.documentElement.classList.remove("swift-widget-hide-scroll");
                }
            } else {
                SwiftWidgetEventBus.$emit('go', 'page-rating');
            }
        },
    },
}
