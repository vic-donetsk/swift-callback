export default {
    data: function () {
        return {
            visibleButton: true,
            visibleCircles: true,
            visibleToggler: true,
            isPulsing: true
        }
    },
    methods: {
        open() {
            this.visibleButton = false;
            this.visibleCircles = false;
            this.visibleToggler = false;
            SwiftWidgetEventBus.$emit('go', 'page-call');

            if (window.innerWidth < 1280) {
                document.body.classList.add("swift-widget-hide-scroll");
                document.documentElement.classList.add("swift-widget-hide-scroll");
            }
        },
        togglePulse() {
            this.isPulsing = !this.isPulsing;
            this.visibleCircles = !this.visibleCircles;
        }
    }
}
