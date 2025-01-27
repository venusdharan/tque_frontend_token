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
    <v-footer absolute app>&copy;Triophore</v-footer>
    </v-app>
  </template>
  
  

  
  <script>
    import { ref } from 'vue'
  
// import SideMenu from '~/components/SideMenu.vue';
    export default {
      data: () => ({
         drawer: true,
         user : false,
         avatar_color : "primary",
         avatar_name : ""
      }),
      async mounted() {
        try {
            // const runtimeConfig = useRuntimeConfig()
            // const client = new Client();
            // client
            // .setEndpoint(runtimeConfig.public.projectEndpoint)
            // .setProject(runtimeConfig.public.projectId);
        
            // const account = new Account(client);
        
            // // Check if the user is authenticated
            // var _user = await account.get(); 
            // this.user = _user;
            // console.log(_user)
            // if(_user.name){
            //   this.getRandomVuetifyColor();
            //   this.createAvatarName(_user.name)
            // }

          } catch (error) {
            console.log(error)
          }
      },
      methods: {
        get_sub_title(usr){
          
          if(usr.email){
            return usr.email;
          }else{
            if(usr.phone){
              return usr.phone;
            }else{
              return ""
            }
          }
        },
        getRandomVuetifyColor() {
          const vuetifyColors = [
            'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 
            'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 
            'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 
            'blue-grey'
          ];

          // Generate a random index within the array length
          const randomIndex = Math.floor(Math.random() * vuetifyColors.length);
          this.avatar_color =  vuetifyColors[randomIndex];
        },
        createAvatarName(name) {
          if (!name) {
            return ''; // Handle empty input
          }

          const nameParts = name.trim().split(' ');
          let initials = nameParts[0].charAt(0).toUpperCase();

          if (nameParts.length > 1) {
            // Add first letter of last name
            initials += nameParts[nameParts.length - 1].charAt(0).toUpperCase();
            // Add first letter of middle name (if available)
            if (nameParts.length > 2 && initials.length < 3) {
              initials += nameParts[1].charAt(0).toUpperCase();
            }
          } else if (nameParts[0].length > 1) {
            // If only one word, add second letter
            initials += nameParts[0].charAt(1).toUpperCase();
            // If still less than 3 letters, add third letter (if available)
            if (nameParts[0].length > 2 && initials.length < 3) {
              initials += nameParts[0].charAt(2).toUpperCase();
            }
          }

          this.avatar_name =  initials;
        }
      },
    }
  </script>