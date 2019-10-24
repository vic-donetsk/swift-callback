import MaskedInput from 'vue-masked-input';

import { CoolSelect } from "vue-cool-select";
import countries from './countries.json';


export default {
    components: {
        'masked-input': MaskedInput,
        CoolSelect,
    },
    data: function () {
        return {
            selected: 0,
            currentMask: '',
            clientPhone: null,
            items: countries,

            // name of given by default country
            selectedFlag: "Moldova"
        }
    },
    created() {
      this.setMask(this.selectedFlag) ;
    },
    methods: {

        updatePhone (number) {
            this.$emit('updatePhone', number);
        },

        getFlag(flagName) {
            // try {
            //     require(`./flags/${flagName.toLowerCase()}.svg`);
            //     console.log('try');
                return `./img/flags/${flagName.toLowerCase()}.svg`;
            // } catch (e) {
            //     require("./flags/md.svg");
            //     console.log('catch');
            //     return "./img/flags/md.svg";
            // }
        },

        setMask(currentCountry) {
            this.items.forEach( (country) => {
                if (country.name === currentCountry) {
                    let mask = '';
                    for(let i=0; i<country.mask.length; i++) {
                        switch (country.mask[i]) {
                            case '+': mask += '\\+'; break;
                            case '0': case '1': case '2': case '3': case '4':
                            case '5': case '6': case '7': case '8': case '9':
                            mask += '\\' + country.mask[i]; break;
                            case '_': mask += '1'; break;
                            default: mask += country.mask[i]; break;
                        }
                    }
                    this.currentMask = mask;
                }
            });
        }
    }
}