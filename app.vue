<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">


import { httpsCallable, getFunctions } from 'firebase/functions';
const functions = getFunctions();
const hello = httpsCallable(functions, "helloWorld");
const sayHello = await hello()
console.log(sayHello);
</script>