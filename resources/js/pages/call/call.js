export default {
    components: {},
    data: function () {
        return {
            firstApelWindow: true,
            initialTime: 2799,
            shownTime: '00:27:99',
            stopTimer: null
        }
    },
    destroyed() {
        this.finishTimer()
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
            SwiftWidgetEventBus.$emit('go', 'widget-button');
        },

        // start countdown 28sec
        launchTimer() {

            // TODO: handle client phone number

            this.firstApelWindow = false;
            this.startTimer(this.initialTime);
        },

        startTimer(startTime) {
            let time = startTime;
            let seconds = parseInt(time / 100);
            let miliseconds = parseInt(time - seconds * 100);
            if (seconds < 10) seconds = '0' + seconds;
            if (miliseconds < 10) miliseconds = '0' + miliseconds;

            this.shownTime = '00:' + seconds + ':' + miliseconds;
            startTime--;

            if (startTime >= 0) {
                let vueElement = this;
                this.stopTimer = setTimeout(function () {
                    vueElement.startTimer(startTime);
                }, 10);
            } else {
                this.shownTime = '00:00:00';
                this.finishTimer();
                this.timeEnd()
            }
        },
        finishTimer() {
            clearTimeout(this.stopTimer)
        },

        timeEnd() {
            // TODO: 28 sec are over. What do you want to do after?
        }
    },
 }
