import LowerSection from './../../components/lower-section/lower-section.vue';
import ExitBlock from './../../components/exit-block/exit-block.vue';
import FlagPhone from './../../components/flag-phone/flag-phone.vue';


export default {
    components: {
        'lower-section': LowerSection,
        'exit-block': ExitBlock,
        'flag-phone' : FlagPhone
    },
    data: function () {
        return {
            firstApelWindow: true,
            initialTime: 2799,
            shownTime: '00:27:99',
            stopTimer: null,
            phoneNumber: "",
        }
    },
    destroyed() {
        this.finishTimer()
    },
    methods: {
        chooseTime() {

            if (this.phoneNumber.length && this.phoneNumber.indexOf('*') == -1) {
                // client enter correct phone number
                SwiftWidgetEventBus.$emit('go', 'page-chooseTime');
                // TODO: handle this.phoneNumber, contained client phone number
            } else {
                // phone number is absent or incorrect
                SwiftWidgetEventBus.$emit('go', 'page-chooseTimeNonumber');
            }

        },

        // start countdown 28sec
        launchTimer() {
            // TODO: some conditions may be here:
            // if day off or holiday, can route to
            // SwiftWidgetEventBus.$emit('go', 'page-notWorking');
            // if we currently have not manager available, call
            // SwiftWidgetEventBus.$emit('go', 'page-noManager');

            // else (if all okey and we make callback):

            // TODO: handle client phone number while 28 seconds countdown
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
        },
        updatePhone (value) {
            this.phoneNumber = value;
        }
    },
 }
