<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">


import { httpsCallable, getFunctions } from 'firebase/functions';
const functions = getFunctions(); // Get functions without specifying the region
console.log(functions.region) // Specify the region here
const userId: number = 1;

const helloWorld = httpsCallable(functions, "helloWorld");

console.log(await helloWorld());
</script>