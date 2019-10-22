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
            status: 1,
            selectedDay: '',
            selectedTime: '',
            approvedDate: '',
            approvedTime: '',
            week: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
            times: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
                '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
            months: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
            phoneNumber: "",
        }
    },
    created() {
        this.selectedDay = this.week[0];
        this.selectedTime = this.times[0];
    },
    methods: {
        exit() {
            SwiftWidgetEventBus.$emit('go', 'widget-button');
        },
        back() {
          this.status = 1;
        },

        select() {
            if (this.status === 1 && this.phoneNumber.length && this.phoneNumber.indexOf('*') == -1) {
                // client enter correct phone number

                this.status = 2;

                let currentDate = new Date();
                let interval = this.week.indexOf(this.selectedDay) - currentDate.getDay();
                if (interval > 0) {
                    currentDate.setDate(currentDate.getDate() + interval);
                } else {
                    currentDate.setDate(currentDate.getDate() + 7 + interval);
                }
                this.approvedDate = this.selectedDay + ' (' + currentDate.getDate() + '\u00A0' + this.months[currentDate.getMonth()] + ') ';
                this.approvedTime = this.selectedTime;
                // TODO: handle this.phoneNumber  =  contained client phone number
                //              this.approvedDate =  date of expected call
                //              this.approvedTime =  time of expected call

            }
        },
        updatePhone(value) {
            this.phoneNumber = value;
        }


    },
}
