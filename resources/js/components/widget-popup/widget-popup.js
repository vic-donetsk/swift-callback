export default {
    data() {
        return {
            page: '',
            callbackText: '',
        }
    },
    mounted() {
        SwiftWidgetEventBus.$on('go', (page) => {
            this.page = page;
        });
    }
}
