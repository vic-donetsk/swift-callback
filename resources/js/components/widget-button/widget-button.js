export default {
    data: function () {
        return {
            visibleButton: true,
            visibleCircles: true
        }
    },
    methods: {
        open() {
            this.visibleButton = false;
            this.visibleCircles = false;
            SwiftWidgetEventBus.$emit('go', 'page-notWorking');
        }
    }
}
