<template>
    <v-dialog
      v-model="dialog"
      max-width="320"
      persistent
    >
      <v-list
        class="py-2"
        color="primary"
        elevation="12"
        rounded="lg"
      >
        <v-list-item
          prepend-icon="$vuetify-outline"
          :title="info"
        >
          <template v-slot:prepend>
            <div class="pe-4">
              <v-icon color="primary" size="x-large"></v-icon>
            </div>
          </template>

          <template v-slot:append>
            <v-progress-circular
              color="primary"
              indeterminate="disable-shrink"
              size="16"
              width="2"
            ></v-progress-circular>
          </template>
        </v-list-item>
      </v-list>
    </v-dialog>
</template>

<script>
export default {
    props:["info"],
    data() {
        return {
            dialog:false
        }
    },
    methods: {
        show(){
            this.dialog = true
        },
        hide(){
            this.dialog = false
        }
    },
}
</script>