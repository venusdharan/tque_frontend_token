<template>
    <v-card class="pa-4">
        <v-card-title >
            <p class="text-h5">---CLIENT DETAILS---</p>
        </v-card-title>
        <v-card-text>
            <p>Fill Details for getting token</p>
        </v-card-text>
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
const route = useRoute()
console.log(route.params) // { id: '123' }
</script>

<script>
export default {
    data() {
        return {
            name : "",
            phone : "",
            email : ""
        }
    },
}
</script>