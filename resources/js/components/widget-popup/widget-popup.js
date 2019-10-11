export default {
    data() {
        return {
            page: '' //"page-viber"
        }
    },
    mounted() {
        SwiftWidgetEventBus.$on('go', (page) => {
            this.page = page;
        });
    }
}
