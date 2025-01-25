<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="pa-4">
            <v-card-title class="text-h5 justify-center">TQue Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login_fn">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" block color="primary">Login</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-card-text>
                <a href="./login">Forgot Password?</a>
              </v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'auth' // Use the name of your layout component (without ".vue")
  });

  /*

try {
      var token = await signIn({ 
        username: email.value, 
        password: password.value 
      },{ callbackUrl: '/' })
  
      console.log(token)
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams)
      const redirect = urlParams.get('redirect');
      if(redirect){
        await navigateTo(redirect); 
      }else{
        await navigateTo('/'); 
      }
    } catch (error) {
      // Handle login errors
      console.error('Failed to login:', error);
    }
  */

  </script>

<script>
export default {
    data() {
        return {
           email:"",
           password : ""
        }
    },
    methods:{
      async login_fn(){
        try{
          console.log(token)
          const urlParams = new URLSearchParams(window.location.search);
          console.log(urlParams)
          const redirect = urlParams.get('redirect');
          if(redirect){
            await navigateTo(redirect); 
          }else{
            await navigateTo('/'); 
          }
        }catch(err){
          console.error('Failed to login:', error);
        }
      }
    }
}
</script>