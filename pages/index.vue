<template>
  <v-card class="pa-4">
      <v-card-title >
        <h1 style="text-align: center;">Fill to get token</h1>
      </v-card-title>
      <!--v-card-text>
        <h3 style="text-align: center;">STORE ID</h3>
      </v-card-text-->
      <v-card-text>
          <h3 style="text-align: center;">STORE ID</h3>
          <v-otp-input
            v-model="store_id"
          ></v-otp-input>
          <v-text-field
            v-model="name"
            label="Name*"
            type="text"
            required
          ></v-text-field>
          {{ is_valid }}
          <v-phone-input
              v-model="phone"
              country-icon-mode="svg"
          />
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
          ></v-text-field>
          <vue-turnstile site-key="0x4AAAAAAA9S92qkdmChhqkx" size="flexible" v-model="turn_token" style="margin-bottom: 5px; margin-top: 5px; margin-left: auto;" />
          <v-btn style="margin-top:50px;" block color="primary" @click="get_token">Get Token</v-btn>
      </v-card-text>
  </v-card>
  <!--v-dialog
      v-model="get_otp"
      max-width="400"
      persistent
      >
      <v-card
          title="Please provide OTP !"
      >
          <v-card-text>
              <v-otp-input></v-otp-input>
          </v-card-text>
          <template v-slot:actions>
          <v-spacer></v-spacer>
         
          <v-btn @click="dialog = false">
              Disagree
          </v-btn>

          <v-btn @click="dialog = false">
              Agree
          </v-btn>
          </template>
      </v-card>
    </v-dialog-->
</template>

<script setup>
const route = useRoute()
console.log(route.params) // { id: '123' }
</script>

<script>
import VueTurnstile from 'vue-turnstile';
import { TokenGenUrl } from "~/project_config";
import 'flag-icons/css/flag-icons.min.css';
import 'v-phone-input/dist/v-phone-input.css';
// import { VPhoneInput } from 'v-phone-input';
// import { VAutocomplete } from 'vuetify/components';
const config = useRuntimeConfig()
export default {
  data() {
      return {
          name : "",
          phone : "",
          email : "",
          store_id : "",
          turn_token:"",
          is_valid:false
      }
  },
  mounted() {
    console.log(config.public)
  },
  watch:{
    phone(n,o){
      console.log(n)
      var g = document.querySelectorAll(".v-messages__message");
      if(g.length > 0){
        var f = g[0].innerText;
        if(f.includes("field is not a valid phone number")){
          console.log("INV");
          this.is_valid = false;
        }
      }else{
        this.is_valid = true;
      }

    }
  },
  components: { VueTurnstile  },
  methods: {
    invalid(o){
      console.log(o)
      return o
    },
    check_phone(){
      var g = document.querySelectorAll(".v-messages__message");
      if(g.length > 0){
        var f = g[0].innerText;
        if(f.includes("field is not a valid phone number")){
          console.log("INV");
           return false;
        }
      }else{
        return true;
      }
    },
    async get_token(){
      if(this.turn_id){

      }else{
        return;
      }

      if(!this.IsEmpty(this.name)){

      }else{

      }

      if(!this.IsEmpty(this.email)){

      }else{

      }

      if(!this.IsEmpty(this.store_id)){

      }else{

      }

    },
    IsEmpty(d){
      if(d){
        if(d.trim().length !== 0){
          return false;
        }else{
          return true;
        }
      }else{
        return true;
      }
    },
    isValidPhoneNumber(phone) {
        const regex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
        return regex.test(phone);
    },
    isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    },
  },
}
</script>