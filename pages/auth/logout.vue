<template>
    <h1>Logging out...</h1>
</template>

<script setup>
definePageMeta({
  layout: 'auth' // Use the name of your layout component (without ".vue")
});
import { ref } from 'vue';
import { Client, Account } from 'appwrite';
// import { useRouter } from 'nuxt/app';
const runtimeConfig = useRuntimeConfig()


// Init Appwrite
const client = new Client();
client
.setEndpoint(runtimeConfig.public.projectEndpoint)
.setProject(runtimeConfig.public.projectId);

const account = new Account(client);

try {
  var _user = await account.get(); 
  console.log(_user);
  await account.deleteSession('current');
  await navigateTo('/auth/login'); 
} catch (error) {
  console.log(error)
}


</script>