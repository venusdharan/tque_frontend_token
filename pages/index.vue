<template>
  <v-card v-if="store_status === 'NONE'" class="pa-4 dark">
      <v-card-title >
        <h1 style="text-align: center;">{{ client_name }}</h1>
        
      </v-card-title>
      <v-card-text>
        <h4 style="text-align: center; margin-bottom: 20px;">Fill to get token</h4>
          <v-text-field
            v-model="name"
            label="Name*"
            type="text"
            required
          ></v-text-field>
          <PhoneNumber :prefferedCountries="['US','IN']" ref="phoneinput"/>
          <v-text-field
            v-model="email"
            label="Email"
            
            type="email"
          ></v-text-field>
          <vue-turnstile v-if="load_turn" site-key="0x4AAAAAAA9S92qkdmChhqkx" size="flexible" v-model="turn_token" style="margin-bottom: 5px; margin-top: 5px; margin-left: auto;" />
          <v-btn style="margin-top:50px;" block color="primary" @click="get_token">Get Token</v-btn>
      </v-card-text>
  </v-card>
  <v-card v-if="store_status === 'token'" class="pa-4 dark">
    <v-card-title>
      <h1 v-if="is_token_valid === true" class="text-center" >Your Token</h1>
      <h1 v-else class="text-center" style="color:red" >Your Token Expired !</h1>
    </v-card-title>
    <v-card-title>
      <h1 v-if="is_token_valid === true" class="text-center" style="font-size: 70px; color:green">{{ token }}</h1>
      <h1 v-else  class="text-center" style="font-size: 70px; color:red">{{ token }}</h1>
    </v-card-title>
    <v-card-text>
      <h1 class="text-center">{{ client_name }}</h1>
    </v-card-text>
    <v-card-text>
      <h4 class="text-center">Name :: {{ name }}</h4>
    </v-card-text>
    <v-card-text v-if="phone">
      <h4 class="text-center">Phone :: {{ phone }}</h4>
    </v-card-text>
    <v-card-text v-if="email">
      <h4 class="text-center">Email :: {{ email }}</h4>
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
import  axios  from 'axios';
import { useRoute } from 'nuxt/app';
import bs58 from 'bs58'
const config = useRuntimeConfig()
export default {
  data() {
      return {
          rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length <= 20 || 'Max 20 characters',
            email: value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Invalid e-mail.'
            },
          },
          dropdownOptions:{
            showSearchBox:true,
            showFlags:true,
            showDialCodeInSelection:true,
          },
          name : "",
          countryCode: "",
          phone : "",
          phone_val : "",
          email : "",
          store_id : "",
          client_name:"",
          token:"",
          turn_token:"",
          is_valid:false,
          is_token_valid:false,
          phone_update_event:{},
          store_status : "",
          phone_error_text:"jsj",
          load_turn:true

      }
  },
  async mounted() {
    const route = useRoute();
    console.log(config.public)
    console.log(route.query)
    if(route.query){
      if(route.query.token){
        const redirect = route.query.token;
        if(redirect){
            try {
              const bytes = bs58.decode(redirect)
              console.log(bytes)
              var string = new TextDecoder().decode(bytes);
              var json_p = JSON.parse(string);
              if(json_p.client_name && json_p.client_id){
                this.store_id = json_p.client_id
                this.client_name =  json_p.client_name
                this.store_status = "NONE"
                this.load_turn = true
              }else{
                await this.go_error()
              }
            } catch (error) {
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
  },
  components: { VueTurnstile },
  methods: {
    async getDecodedData(data){
      try {
            const decodedBase64 = decodeURIComponent(data);
            const binaryString = atob(decodedBase64);

            // Convert binary string back to Uint8Array
            const utf8Bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                utf8Bytes[i] = binaryString.charCodeAt(i);
            }

            const jsonString = new TextDecoder().decode(utf8Bytes);
            return JSON.parse(jsonString);
        } catch (error) {
            console.error("Decoding Error:", error);
        }
    },   
    async go_error(){
      return true;
      // await navigateTo('/error'); 
      window.location.replace('/error')
      await refreshNuxtData()
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

      console.log(await this.$refs.phoneinput.getPhoneNumber())
      console.log(await this.$refs.phoneinput.isValidPhoneNumber())

      if(await this.$refs.phoneinput.isValidPhoneNumber()){
        this.phone = await this.$refs.phoneinput.getPhoneNumber()
        p["phone"] = this.phone
      }else{
        alert("Phone is required")
        return;
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
        var d = await axios.post(TokenGenUrl+btoa(this.store_id),p);

        console.log(d)
        
        if(d){
          if(d.data){
            if(d.data.status === "store_closed"){
              // await navigateTo('/closed'); 
              window.location.replace('/closed');
              await refreshNuxtData()
              // return;
            }
            if(d.data.status === "token"){
           
              this.name = d.data.data.name;
              this.phone = d.data.data.phone;
              this.token = d.data.data.token;
              this.client_name = d.data.data.client_name;
              this.is_token_valid = d.data.data.is_active;
              this.store_status = "token";
            }
          }
        }
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

.vue-tel-input > input{
  line-height: 4em !important;
}

.dark-theme .vue-tel-input {
  background: #2a2a2a;
  border: 1px solid #4f4e4e;
  color: #fff;
  border-radius: 8px;

}

.dark-theme .vue-tel-input:focus-within {
  border-color: #1976D2FF;
}

.dark-theme .vti__dropdown {
  background-color: #414141;
}

.dark-theme .vti__dropdown:hover,
.dark-theme .vti__dropdown.open,
.dark-theme .vti__dropdown.disabled {
  background-color: #373737;
}

.dark-theme .vti__dropdown-list {
  background-color: #2a2a2a;
  border: 1px solid #4f4e4e;
}

.dark-theme .vti__dropdown-item {
  color: #fff;
}

.dark-theme .vti__dropdown-item.highlighted {
  background-color: #373737;
}

.dark-theme .vti__selection .vti__country-code {
  color: #fff;
}

.dark-theme .vti__input {
  background: #2a2a2a;
  color: #fff;
  border: none;
}

.dark-theme .vti__search_box {
  background: #2a2a2a;
  border: 1px solid #4f4e4e;
  color: #fff;
}
</style>