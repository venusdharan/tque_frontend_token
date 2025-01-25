<template>
    <v-app id="inspire">
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title>TQue</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" dense>
      <v-list color="transparent" dense>
        <v-list-item v-if="user"
            :subtitle="user.name"
            :title="get_sub_title(user)"
            
          >
          <template v-slot:prepend>
            <v-avatar :color="avatar_color">
              {{ avatar_name }}
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
      <hr></hr>
      <v-list  dense>
       
        <v-list-item link title="Token Que" prepend-icon="mdi-pencil-ruler" to="/user/token/">
        </v-list-item>
        <!--v-list-item link title="Tasks" prepend-icon="mdi-checkbox-marked-circle-auto-outline" to="/task/">
        </v-list-item-->
        <v-list-item link title="Scan Card" prepend-icon="mdi-view-dashboard" to="/">
        </v-list-item>
        <v-list-item link title="Billing" prepend-icon="mdi-note-text" to="/user/billing/">
        </v-list-item>
      </v-list>
      

      <template v-slot:append>
        <hr></hr>
        <v-list-item link title="Logout" to="/auth/logout" prepend-icon="mdi-logout" style="margin-bottom:10px; margin-top:5px;"></v-list-item>
      </template>

      </v-navigation-drawer>
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
    // import { Client, Account } from 'appwrite';
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