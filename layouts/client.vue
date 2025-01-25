<template>
    <v-app id="inspire">
      <v-app-bar>
        <v-app-bar-title>TQue</v-app-bar-title>
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
export default {
    data() {
        return {
            
        }
    },
}
</script>
  