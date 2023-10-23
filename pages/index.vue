<script setup lang="ts">


import { httpsCallable, getFunctions } from 'firebase/functions';
const functions = getFunctions();
const hello = httpsCallable(functions, "helloWorld");
console.log(hello());
</script>

<template>
  <h1> hello</h1>
</template>