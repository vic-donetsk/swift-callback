export default {
    data: function () {
        return {}
    },
    props: ['page'],
    methods: {
        exit() {
            if (['mail', 'rating'].indexOf(this.page) !== -1) {
                SwiftWidgetEventBus.$emit('go', 'widget-button');
            } else {
                SwiftWidgetEventBus.$emit('go', 'page-rating');
            }
        },
    },
}