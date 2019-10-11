export default {
    methods: {
        open(){
            EventBus.$emit('go','page-vk');
        }
    }
}
