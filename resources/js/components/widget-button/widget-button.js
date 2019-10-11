export default {
    methods: {
        open(){
            SwiftWidgetEventBus.$emit('go','page-vk');
        }
    }
}
