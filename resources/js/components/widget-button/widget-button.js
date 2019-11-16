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
        },
        togglePulse() {
            this.isPulsing = !this.isPulsing;
            this.visibleCircles = !this.visibleCircles;
        }
    }
}
