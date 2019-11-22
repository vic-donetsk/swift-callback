import LowerSection from './../../components/lower-section/lower-section.vue';
import ExitBlock from './../../components/exit-block/exit-block.vue';

export default {
    components: {
        'lower-section': LowerSection,
        'exit-block': ExitBlock
    },
    data: function () {
        return {
            status: 0,
            hours: '',
            minutes: '',
            day: '',
            date: '',
            approvedDate:'',
            approvedTime: '',
            currentDate: null,
            shownDate: null,
            week: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
            months: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie']
        }
    },
    created() {
        this.shownDate = new Date;
        this.currentDate = new Date;
        this.hours = this.calcHour(this.currentDate.getHours() + 1);
        this.minutes = '00';
        this.day = this.week[this.currentDate.getDay()];
        this.date = this.calcDate(this.currentDate);

        this.status = 1;


    },
    methods: {
        // methods for settings call time handling
        calcHour(currentHour) {
            if (currentHour >= 24) {
                currentHour = '00';
            } else if (currentHour < 0) {
                currentHour = '23';
            } else if (currentHour < 10) {
                currentHour = '0' + currentHour;
            }
            return currentHour;
        },
        calcMinute(currentMinute) {
            if (currentMinute >= 60) {
                currentMinute = '00';
            } else if (currentMinute < 0) {
                currentMinute = '50';
            } else if (currentMinute < 10) {
                currentMinute = '0' + currentMinute;
            }
            return currentMinute;
        },
        calcDate(date) {
            return date.getDate() + '\u00A0' + this.months[date.getMonth()];
        },
        plusHour() {
            this.hours = this.calcHour(+(this.hours) + 1);
        },
        minusHour() {
            this.hours = this.calcHour(+(this.hours) - 1);
        },
        plusMinute() {
            this.minutes = this.calcMinute(+(this.minutes) + 10);
        },
        minusMinute() {
            this.minutes = this.calcMinute(+(this.minutes) - 10);
        },
        plusDay() {
            this.shownDate.setDate(this.shownDate.getDate() + 1);
            this.day = this.week[this.shownDate.getDay()];
            this.date = this.calcDate(this.shownDate);
        },
        minusDay() {
            if (this.shownDate > this.currentDate) {
                this.shownDate.setDate(this.shownDate.getDate() - 1);
                this.day = this.week[this.shownDate.getDay()];
                this.date = this.calcDate(this.shownDate);
            }
        },

        // methods for navigation
        exit() {
            SwiftWidgetEventBus.$emit('go', 'widget-button');
        },
        backTo() {
            if (this.status === 1) {
                SwiftWidgetEventBus.$emit('go', 'page-call');
            } else {
                this.status = 1;
            }
        },
        cancel() {
            SwiftWidgetEventBus.$emit('go', 'page-call');
        },
        select() {
            if (this.status === 1) {
                this.status = 2;
            } else {
                if (window.innerWidth < 1280) {
                    let blockOk = document.querySelector('.swift-widget');
                    blockOk.style.alignItems = 'inherit';
                }
                this.status = 3;
                this.approvedDate = this.day + ' (' + this.date + ') ';
                this.approvedTime = this.hours + ':' + this.minutes;
            }
        },

    },
}
