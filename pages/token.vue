<template>
    <v-row>
        <v-col cols="12">
            <!--v-card-text-->
            <v-tabs
            v-model="tab"
            bg-color="primary"
            >
                <v-tab value="one">Current</v-tab>
                <v-tab value="two">Finished</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                   <v-row>
                        <v-col>
                            <v-table density="compact">
                                <thead>
                                <tr>
                                    <th class="text-left">
                                    Token Number
                                    </th>
                                    <th class="text-left">
                                    Operations
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                >
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <v-btn size="small" color="green">Select</v-btn>
                                        <v-btn size="small" color="red" style="margin-left:10%;">Cancel</v-btn>
                                    </td>
                                </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                        <v-col>
                            <v-select label="Counter"></v-select>
                            <v-table density="compact">
                                <thead>
                                <tr>
                                    <th class="text-left">
                                    Token Number
                                    </th>
                                    <th class="text-left">
                                    Operations
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                >
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <v-btn size="small" color="green">Select</v-btn>
                                        <v-btn size="small" color="red" style="margin-left:10%;">Cancel</v-btn>
                                    </td>
                                </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                   </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="two">
                    <v-row>
                        <v-col>
                            <v-select label="Counter"></v-select>
                            <v-table density="compact">
                                <thead>
                                <tr>
                                    <th class="text-left">
                                    Token Number
                                    </th>
                                    <th class="text-left">
                                    Operations
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                >
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <v-btn size="small" color="green">Select</v-btn>
                                        <v-btn size="small" color="red" style="margin-left:10%;">Cancel</v-btn>
                                    </td>
                                </tr>
                                </tbody>
                            </v-table>
                        </v-col> 
                    </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="three">
                    <v-row>
                        <v-col>
                            <v-select label="Counter"></v-select>
                            <v-table density="compact">
                                <thead>
                                <tr>
                                    <th class="text-left">
                                    Token Number
                                    </th>
                                    <th class="text-left">
                                    Operations
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                >
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <v-btn size="small" color="green">Select</v-btn>
                                        <v-btn size="small" color="red" style="margin-left:10%;">Cancel</v-btn>
                                    </td>
                                </tr>
                                </tbody>
                            </v-table>
                        </v-col> 
                    </v-row>
                </v-tabs-window-item>
            </v-tabs-window>
        <!--/v-card-text-->
        </v-col>
    </v-row>
</template>

<script setup>
definePageMeta({
  layout: 'user' // Use the name of your layout component (without ".vue")
});
</script>

<script>
export default {
    data() {
        return {
            tab:null,
            desserts: [
                {
                    name: '55',
                    calories: 159,
                },
                {
                    name: '56',
                    calories: 237,
                },
                {
                    name: '57',
                    calories: 262,
                },
                {
                    name: '58',
                    calories: 305,
                },
                {
                    name: '59',
                    calories: 356,
                },
                {
                    name: '60',
                    calories: 375,
                },
                {
                    name: '61',
                    calories: 392,
                },
                {
                    name: '62',
                    calories: 408,
                },
                {
                    name: '63',
                    calories: 452,
                },
                {
                    name: '64',
                    calories: 518,
                },
            ],
        }
    },
}
</script>