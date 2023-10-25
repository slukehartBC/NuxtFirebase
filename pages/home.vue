<template>
  <div>
    <Button label="Sign Out" severity="success" @click="signOut"/>
    <!--    <div v-if="error" class="error">{{ error }}</div>-->
    <Button label="Get User Data" severity="success" @click="fetchUserData"/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

import useSignOut from "@/composables/useSignOut"; // Update the path accordingly
import useUserDataByUID from "@/composables/getUserDataByUID";
import { ref, defineProps, defineEmits } from "vue";
import { useUserDataStore } from "@/stores/userDataStore";

const { signOutUser, error } = useSignOut();
const userStore = useUserDataStore();

function signOut() {
  signOutUser();
}
const { getUserDataByUID } = useUserDataByUID();
const uid = ref(""); // Initialize with your UID from Pinia
const fetchUserData = async () => {
  try {
    const userData = await getUserDataByUID(uid.value);
    userStore.setUserData(userData);
  } catch (error) {
    // Handle errors
    error.value = e.message;
  }
};

</script>