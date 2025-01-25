<template>
        <v-card class="pa-4">
            <v-card-title class="text-h5 justify-center">TQue Login</v-card-title>
            <v-card-text>
                <v-text-field
                  v-model="name"
                  label="Name"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="phone"
                  label="Phone"
                  type="phone"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                ></v-text-field>
                <v-btn  block color="primary">Get Token</v-btn>
               
            </v-card-text>
        </v-card>
        <v-dialog
            v-model="get_otp"
            max-width="400"
            persistent
            >
            <v-card
                title="Please provide OTP !"
            >
                <v-card-text>
                    <v-otp-input></v-otp-input>
                </v-card-text>
                <template v-slot:actions>
                <v-spacer></v-spacer>
               
                <v-btn @click="dialog = false">
                    Disagree
                </v-btn>

                <v-btn @click="dialog = false">
                    Agree
                </v-btn>
                </template>
            </v-card>
            </v-dialog>
</template>

<script setup>
definePageMeta({
    layout: 'client' // Use the name of your layout component (without ".vue")
});
</script>

<script>
export default {
    data() {
        return {
            get_otp:true,

        }
    },
}
</script>