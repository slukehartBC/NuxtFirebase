<template>
  <div>
    <Button label="Sign Out" severity="success" @click="signOut"/>
    <!--    <div v-if="error" class="error">{{ error }}</div>-->
    <Button label="Get User Data" severity="success" @click=""/>
  </div>
</template>

<script setup>

import useSignOut from "@/composables/useSignOut"; // Update the path accordingly
/*import useUserDataByUID from "@/composables/getUserDataByUID";*/
/*import { ref, defineProps, defineEmits } from "vue";*/
import { useUserDataStore } from "@/stores/userDataStore";

const { signOutUser, error } = useSignOut();
const userStore = useUserDataStore();

function signOut() {
  signOutUser();
}



</script>