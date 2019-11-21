export default {
    data: function () {
        return {
            starRating: 7
        }
    },
    methods: {
        exit() {
            // TODO - handle rating from client: this.starRating is in [1..10]];
            SwiftWidgetEventBus.$emit('go', 'widget-button');

            if (window.innerWidth < 1280) {
                document.body.classList.remove("swift-widget-hide-scroll");
                document.documentElement.classList.remove("swift-widget-hide-scroll");
            }
        }
    }

}
