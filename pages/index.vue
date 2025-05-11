<template>
  <v-card v-if="store_status === 'NONE'" class="pa-4 dark">
      <v-card-title >
        <h1 style="text-align: center; word-wrap:normal;">{{ client_name }}</h1>
        
      </v-card-title>
      <v-card-text>
          <h4 style="text-align: center; margin-bottom: 20px;">Fill to get token</h4>
          <v-text-field
            v-model="name"
            label="Name*"
            type="text"
            required
            density="compact"
          ></v-text-field>
          <PhoneNumber :prefferedCountries="['US','IN']" ref="phoneinput"/>
          <v-text-field
            v-model="email"
            label="Email"
            v-if="enable_email == true"
            type="email"
            density="compact"
          ></v-text-field>
          <v-text-field v-if="custom_field_type === 'Text' && custom_field === true" :label="custom_field_name" v-model="custom_field_data" density="compact"></v-text-field>
          <v-number-input
              v-if="custom_field_type === 'Number' && custom_field === true" 
              :label="custom_field_name" 
              v-model="custom_field_data" 
              :min="1"
              control-variant="split"
              density="compact">
          </v-number-input>
            <!--v-select
                v-if="enable_service_types == true"
                label="Services"
                density="compact"
                :items="service_types"
                :multiple="multi_select" v-else
            ></v-select-->
            <p v-if="multi_select == true">Services (Select any)</p>
            <div v-if="multi_select == true" v-for="(item,idx) in service_types" :key="idx">
              <v-checkbox
                v-model="service_multiple_selected"
                :label="item"
                :value="item"
              ></v-checkbox>
            </div>
            <p v-if="multi_select == false">Services (Select one)</p>
            <v-radio-group v-if="multi_select == false" v-model="service_single_selected">
              <div  v-for="(item,idx) in service_types" :key="idx">
                <v-radio :label="item" :value="item"></v-radio>
              </div>
            </v-radio-group>
          <vue-turnstile v-if="load_turn" site-key="0x4AAAAAAA9S92qkdmChhqkx" size="flexible" v-model="turn_token" style="margin-bottom: 5px; margin-top: 5px; margin-left: auto;" />
          <v-btn style="margin-top:50px;" block color="primary" @click="get_token">Get Token</v-btn>
      </v-card-text>
  </v-card>
  <!-- Token Expire -->
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
      <ul>
        <li>Name :: {{ name }}</li>
        <li>Phone :: {{ phone }}</li>
        <li v-if="email">Email :: {{ email }}</li>
      </ul>
    </v-card-text>
    <v-card-text v-if="res_custom_field_name">
      <ul>
        <li v-if="res_custom_field_name">{{ res_custom_field_data }}</li>
      </ul>
    </v-card-text>
    <v-card-text v-if="res_service_types.length != 0">
      <h5 class="text-center">Services</h5>
      <ul v-for="s in res_service_types">
        <li>{{ s }}</li>
      </ul>
    </v-card-text>
    <!--v-card-text>
      <h4 class="text-center">Name :: {{ name }}</h4>
    </v-card-text>
    <v-card-text v-if="phone">
      <h4 class="text-center">Phone :: {{ phone }}</h4>
    </v-card-text>
    <v-card-text v-if="email">
      <h4 class="text-center">Email :: {{ email }}</h4>
    </v-card-text-->
  </v-card>
  <!-- Token Excceded -->

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
import { TokenGenUrl , TokenDataUrl } from "~/project_config";
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
          phone_error_text:"",
          load_turn:true,
          enable_email:false,
          enable_service_types:false,
          custom_field : false,
          custom_field_name : "",
          custom_field_type : "",
          custom_field_data : null,
          multi_select : false,
          service_types : [],
          service_multiple_selected:[],
          service_single_selected:"",

          res_service_types : [],
          res_custom_field_name : "",
          res_custom_field_data : ""
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

                var d = await axios.post(TokenDataUrl+btoa(this.store_id));
                var c_data = d.data || null
                if(c_data){
                  this.client_name = c_data.client_name
                  // this.store_status = c_data.status || "NONE"
                  this.enable_email = c_data.enable_email || false
                  this.custom_field = c_data.custom_field || false
                  this.custom_field_name = c_data.custom_field_name || ""
                  this.custom_field_type = c_data.custom_field_type || ""
                  this.multi_select = c_data.multi_select || false
                  this.service_types = c_data.service_types || []
                  this.enable_service_types = c_data.enable_service_types || false
                  this.res_custom_field_name = c_data.custom_field_name || false
                  this.res_custom_field_data = c_data.custom_field_data || false
                  this.res_service_types = c_data.selected_services || []

                }

                console.log(d)

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
      // window.location.replace('/error')
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

      if(this.custom_field){
        p["custom_field"] = true;
        p["custom_field_name"] = this.custom_field_data;
        p["custom_field_type"] = this.custom_field_type;
        p["custom_field_data"] = this.custom_field_data;
      }

      if(this.service_types.length){
        if(this.multi_select){
          p["selected_services"] = this.service_multiple_selected
        }else{
          p["selected_services"] = [this.service_single_selected]
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

              this.enable_email = c_data.enable_email || false
              this.custom_field = c_data.custom_field || false
              this.custom_field_name = c_data.custom_field_name || ""
              this.custom_field_type = c_data.custom_field_type || ""
              this.multi_select = c_data.multi_select || false
              this.service_types = c_data.service_types || []
              this.enable_service_types = c_data.enable_service_types || false
              this.res_custom_field_name = c_data.custom_field_name || false
              this.res_custom_field_data = c_data.custom_field_data || false
              this.res_service_types = c_data.selected_services || []
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