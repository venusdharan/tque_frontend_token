<template>
    <v-container>
     <v-row>
         <v-col>
            <v-card class="pa-4 dark">
                <v-card-title>
                This store closed
                </v-card-title>
                <v-alert text="Please try again later when the store opens" type="error"></v-alert>
            </v-card>
         </v-col>
     </v-row>
    </v-container>
 </template>
 
 <script>
 export default {
     data() {
         return {
             
         }
     },
 }
 </script>