<template>
  <v-card v-if="store_status === 'NONE'" class="pa-4 dark">
      <v-card-title >
        <h1 style="text-align: center;">Fill to get token</h1>
      </v-card-title>
      <v-card-text>
          <v-text-field
            v-model="name"
            label="Name*"
            type="text"
            required
          ></v-text-field>
          <!--v-phone-input
              v-model="phone"
              country-icon-mode="svg"
          /-->
          <MazPhoneNumberInput
          block
            @update=" phone_update_event = $event"
            :countrySelectorWidth="'20rem'"
            :countrySelectorDisplayName="true"
            :block="false"
            style="margin-bottom: 15px; width: 100%;"
            size="xl"
            :id="'telinput'"
            v-model="phone"
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
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
const route = useRoute()
console.log(route.params) // { id: '123' }
</script>

<script>
import VueTurnstile from 'vue-turnstile';
import { TokenGenUrl } from "~/project_config";
import 'flag-icons/css/flag-icons.min.css';
import 'v-phone-input/dist/v-phone-input.css';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import 'maz-ui/styles' 
// import { VPhoneInput } from 'v-phone-input';
// import { VAutocomplete } from 'vuetify/components';
const config = useRuntimeConfig()
import  axios  from 'axios';
import { useRoute } from 'nuxt/app';
export default {
  data() {
      return {
          name : "",
          countryCode: "",
          phone : "",
          email : "",
          store_id : "",
          turn_token:"",
          is_valid:false,
          phone_update_event:{},
          store_status : "NONE"
      }
  },
  async mounted() {
    const route = useRoute();
    console.log(config.public)
    console.log(route.query)
    if(route.query){
      if(route.query.store){
        const redirect = route.query.store;
        if(redirect){
          if(this.isValidStore(redirect)){
            this.store_id = redirect 
            console.log(this.store_id)
          }else{
            await this.go_error()
          }
        }else{
          await this.go_error()
        }
      }else{
        await this.go_error()
      }
    }else{
      await this.go_error()
    }
  },
  watch:{
    phone_update_event(n,o){
     console.log(n)
    }
  },
  components: { VueTurnstile ,MazPhoneNumberInput },
  methods: {
    update_phone(up){
      this.phone_update_event = up
      console.log(up)
    },
   
    async go_error(){
      return true;
      // await navigateTo('/error'); 
      // await refreshNuxtData()
    },
    invalid(o){
      console.log(o)
      return o
    },
 
    async get_token(){

      var p = {
      }

      if(this.IsEmpty(this.store_id)){
        await this.go_error()
      }else{

      }


      if(!this.turn_token){
        return;
      }else{
        p["turn_token"] = this.turn_token
      }

      if(this.IsEmpty(this.name)){
        alert("Name is required")
        return;
      }else{
        p["name"] = this.name
      }

      console.log(this.phone)

      if(this.IsEmpty(this.phone)){
        alert("Phone is required")
        this.phone = ""
        return;
      }else{
       
      }

      console.log(this.phone_update_event)
      console.log(this.phone)

      if(!this.isValidPhoneNumber(this.phone)){
        alert("Phone is invalid")
        this.phone = ""
        return;
      }else{
        if(this.phone_update_event){
          if(this.phone_update_event.isValid){
            p["phone"] = this.phone
          }else{
            alert("Phone is invalid this.phone_update_event.isValid")
            // this.phone = ""
            return;
          }
        }else{
          alert("Phone is invalid this.phone_update_event")
          // this.phone = ""
          return;
        }
      }

      if(this.IsEmpty(this.email)){
        // alert("Email is required")
        // return;
      }else{
        if(this.isValidEmail(this.email)){
          p["email"] = this.email
        }else{
          alert("invalid Email");
          this.email = ""
          return;
        }
      }

     

      try {
        var d = await axios.post(TokenGenUrl+this.store_id,p);

        console.log(d)
        
        // if(d){
        //   if(d.data){
        //     if(d.data.status === "store_closed"){
        //       this.store_status = "store_closed"
        //     }
        //     if(d.data.status === "token"){
        //       this.store_status = "token"
        //     }
        //   }
        // }
      } catch (error) {
        console.log(error)
        await this.go_error()
      }


    },
    isBlank(str) {
    return (!str || /^\s*$/.test(str));
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
    isValidStore(sid){
      var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
      return base64regex.test(sid)
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

<style>
#telinput{
  border-radius: 0px;
  width:93rem;
}
.m-phone-number-input{
  border-radius: 0px !important;
}

</style>