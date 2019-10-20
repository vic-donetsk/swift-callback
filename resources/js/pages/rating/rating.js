export default {
    data: function () {
        return {
            starRating: 7
        }
    },
    methods: {
        exit() {
            // TODO - handle rating from client: this.starRating is in [1..10]];
            SwiftWidgetEventBus.$emit('go','widget-button');
        }
    }

}
