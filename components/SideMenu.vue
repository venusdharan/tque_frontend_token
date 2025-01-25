<template>
 <v-list v-if="menu_role == 'client'"  dense>
        <v-list-item link title="Dashboard"  to="/">
        </v-list-item>
        <v-list-item link title="Scan card"  to="/scan_card">
        </v-list-item>
        <v-list-item link title="Billing"  to="/client/token">
        </v-list-item>
</v-list>
</template>

<script>
//prepend-icon="mdi-pencil-ruler" prepend-icon="mdi-checkbox-marked-circle-auto-outline"
export default {
    props: ['menu_role',"id"],
    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this.menu_role)
    },
}
</script>