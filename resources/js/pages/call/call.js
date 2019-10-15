export default {
    components: {},
    data: function () {
        return {
            firstApelWindow: true,
            stopTimer: null
        }
    },
    methods: {
        call() {
            SwiftWidgetEventBus.$emit('go', 'page-call');
        },
        chat() {
            SwiftWidgetEventBus.$emit('go', 'page-chat');
        },
        messenger() {
            SwiftWidgetEventBus.$emit('go', 'page-messenger');
        },
        telegram() {
            SwiftWidgetEventBus.$emit('go', 'page-telegram');
        },
        vk() {
            SwiftWidgetEventBus.$emit('go', 'page-vk');
        },
        viber() {
            SwiftWidgetEventBus.$emit('go', 'page-viber');
        },
        whatsapp() {
            SwiftWidgetEventBus.$emit('go', 'page-whatsapp');
        },
        mail() {
            SwiftWidgetEventBus.$emit('go', 'page-mail');
        },
        exit() {
            SwiftWidgetEventBus.$emit('go','widget-button');
        },

        // start countdown 28sec
        launchTimer() {

            // TODO: handle client phone number

            this.firstApelWindow = false;
            this.timer(2799);


        },

        timer(startTime) {

            let time = startTime;
            let seconds = parseInt(time / 100);
            time = parseInt(time - seconds * 100);
            if ( seconds < 10 ) seconds = '0'+seconds;

            let miliseconds = time;
            if ( miliseconds < 10 ) miliseconds = '0'+miliseconds;
            //this.$refs.workingTimer.innerHTML='00:'+seconds+':'+miliseconds;
            console.log('00:'+seconds+':'+miliseconds);
            startTime--;
            if ( startTime  >= 0 ) {
                this.stopTimer  =  setTimeout(function(){this.timer(startTime); }, 10);
            } else {
                //this.$refs.workingTimer.innerHTML='00:00:00';
                this.timeEnd();
            }

        },

        timeEnd() {
            alert('FUCK!!!');
            // TODO: 28sec are over. What do you want to do after?
        }
    }

}
