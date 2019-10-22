import MaskedInput from 'vue-masked-input';

export default {
    components: {
        'masked-input': MaskedInput
    },
    data: function () {
        return {
            selected: 0,
            currentMask: "\\+\\3\\7\\3 (11) 11-1111",
            clientPhone: null,
            countriesPhones: [
                {id: 1, img: 'img/flags/moldova.svg', mask: "\\+\\3\\7\\3 (11) 11-1111"},
                {id: 2, img: '', mask: "\\+\\3\\8 (111) 111-11-11"},
                {id: 3, img: '', mask: "\\+\\7 (111) 111-1111"}
            ],
        }
    },
    methods: {
        flagSelected() {
            this.currentMask = this.countriesPhones[this.selected-1].mask;
        },
        getPhone() {
            console.log(this.clientPhone);
        }

    }
}