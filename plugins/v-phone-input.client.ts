import 'v-phone-input/dist/v-phone-input.css';
import 'flag-icons/css/flag-icons.min.css';
import { VAutocomplete } from 'vuetify/components';
// @ts-ignore
import { createVPhoneInput } from 'v-phone-input';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VAutocomplete', VAutocomplete);
    const vPhoneInput = createVPhoneInput({
        label: 'Phone*',
        countryIconMode: 'svg',
        enableSearchingCountry: true,
        preferCountries:[
            "IN",
            "KW",
            "OM",
            "QA",
            "SA",
            "AE",
            "GB",
            "US",
            "MY",
            "EE",
            "FR",
            "IO"
        ]
    });
    nuxtApp.vueApp.use(vPhoneInput)
})