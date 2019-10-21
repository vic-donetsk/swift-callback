import ExitBlock from './../../components/exit-block/exit-block.vue';
import LowerSection from "../../components/lower-section/lower-section";

export default {
    components: {
        'exit-block': ExitBlock
    },
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
