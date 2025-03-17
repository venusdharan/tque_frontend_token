<template>
    <!--
    variant="outlined"
    density="compact"

    variant="outlined"
    density="compact"
    -->
      <v-row dense>
        <v-col cols="4" md="4">
          <v-autocomplete
            v-model="selectedCountry"
            :items="countriesData"
            :label="countryInputLabel"
            item-title="name"
            item-value="code"
            return-object
            style="min-width: 100px;"
            auto-select-first
            :menu-props="{ maxHeight: '300px' }"
          >
            <template v-slot:selection="{ item }">
              <div class="d-flex align-center">
                <span v-html="item.raw.flag" class="me-1"></span>
                <span>{{ item.raw.iso2 }}</span>
              </div>
            </template>
            <template v-slot:item="{ item, props }">
              <v-list-item v-bind="props" style="width:300px;" density="compact" >
                <template v-slot:prepend>
                  <span v-html="item.raw.flag" class="me-1"></span>
                </template>
                <v-list-item-subtitle style="text-wrap: wrap;">{{ item.raw.dialCode }}</v-list-item-subtitle>
              </v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="8" md="8">
          <v-text-field
            v-model="phoneNumber"
            :label="phoneInputLabel"
            :placeholder="'Phone number'"
            :rules="[validatePhone]"
            @input="validatePhoneNumber"
          ></v-text-field>
        </v-col>
      </v-row>
      <!--div v-if="isValid" class="mt-2 text-success">
        Valid phone number
      </div>
      <div v-else-if="phoneNumber" class="mt-2 text-error">
        Invalid phone number
      </div-->
  </template>
  
  <script>
  import { parsePhoneNumber } from 'awesome-phonenumber';
  import { countries } from 'country-codes-flags-phone-codes';
  
  export default {
    name: 'PhoneNumberInput',
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      defaultCountry: {
        type: String,
        default: 'IN',
      },
      prefferedCountries: {
        type: Array,
        default: [],
      },
    },
    emits: ['update:modelValue', 'country-changed', 'validation-changed'],
    data() {
      return {
        countriesData: [],
        selectedCountry: null,
        phoneNumber: '',
        isValid: false,
      };
    },
    computed: {
      countryInputLabel(){
        return this.selectedCountry ? this.selectedCountry.name : "Country"
      },
      phoneInputLabel() {
        return this.selectedCountry ? `Phone* (${this.selectedCountry.dialCode})` : 'Phone*';
      },
    },
    mounted() {
        this.countriesData = Object.entries(countries).map(([key, country]) => ({
            name: country.name,
            iso2: country.code,
            flag: country.flag,
            dialCode: country.dialCode,
        }));
  
      this.selectedCountry = this.countriesData.find((c) => c.iso2 === this.defaultCountry) || this.countriesData[0];

      if(this.prefferedCountries.length > 0 ){
        this.countriesData  = this.reArrangeArray(this.countriesData ,this.prefferedCountries,"iso2")
      }
  
      if (this.modelValue) {
        this.phoneNumber = this.modelValue;
        this.validatePhoneNumber();
      }
    },
    watch: {
      selectedCountry: 'handleCountryChange',
    },
    methods: {
      async getPhoneNumber(){
        //return this.phoneNumber ;
        const pn = parsePhoneNumber(this.phoneNumber,{ regionCode: this.selectedCountry.iso2 });
        // return this.phoneNumber ;
        console.log(pn.number.e164)
        return pn.number.e164;
      },
      async isValidPhoneNumber(){
        return this.isValid ;
      },
      reArrangeArray(objectsArray, orderArray, key) {
            const objectMap = new Map(objectsArray.map(obj => [obj[key], obj]));
            const reArrangedArray = [];

            orderArray.forEach(orderValue => {
                if (objectMap.has(orderValue)) {
                reArrangedArray.push(objectMap.get(orderValue));
                }
            });

            // Add the remaining objects that were not in the orderArray.
            objectsArray.forEach(obj => {
                if (!orderArray.includes(obj[key])) {
                reArrangedArray.push(obj);
                }
            });

            return reArrangedArray;
        },
        trimCountry(e){
            return ""
        },
      validatePhoneNumber() {
        // console.log("kk")
        // if (!this.phoneNumber || !this.selectedCountry) {
        //   this.isValid = false;
        //   return;
        // }
  
        try {
            const pn = parsePhoneNumber(this.phoneNumber,{ regionCode: this.selectedCountry.iso2 });
            console.log(pn)
            if(pn.valid){
                this.isValid = true;
            }else{
                this.isValid = false;
            }
  
        } catch (error) {
            console.log(error)
          this.isValid = false;
        //   this.$emit('update:modelValue', this.phoneNumber);
        }
  
        this.$emit('validation-changed', this.isValid);
      },
      validatePhone(value) {
        if (!value) return 'Phone number is required';
        if(this.isValid == true){
            return true;
        }else{
            return 'Please enter a valid phone number';
        }
       
      },
      handleCountryChange() {
        this.$emit('country-changed', this.selectedCountry);
        this.validatePhoneNumber();
      },
    },
  };
  </script>
