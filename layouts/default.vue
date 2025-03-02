<template>
    <v-app id="inspire">
      <v-app-bar>
        <v-app-bar-title>TQUE</v-app-bar-title>
      </v-app-bar>
      <v-container fluid> 
            <v-main>
                <slot />
            </v-main>
      </v-container>
      <v-footer absolute app><a href="https://triophore.com" style="text-decoration:none;" target="_blank">&copy;Triophore - {{ new Date().getFullYear() }}</a></v-footer>
    </v-app>
  </template>
  
  

  
  <script>
    import { ref } from 'vue'
  
// import SideMenu from '~/components/SideMenu.vue';
    export default {
      data: () => ({
         
      }),
      async mounted() {
        try {
           

          } catch (error) {
            console.log(error)
          }
      },
      methods: {
        
      },
    }
  </script>