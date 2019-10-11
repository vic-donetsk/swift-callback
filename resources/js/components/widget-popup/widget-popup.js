export default {
    data() {
        return {
            page: "page-telegram"
        }
    },
    mounted() {
        EventBus.$on('go', (page) => {
            this.page = page;
        });
    }
}
