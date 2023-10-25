<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script async setup lang="ts">
import {httpsCallable, getFunctions} from "firebase/functions";



const functions = getFunctions(useFirebaseApp(), 'us-east1'); // Get functions without specifying the regio
const helloWorld = httpsCallable(functions, "helloWorld");
const hello = await helloWorld({})
    .then((result: any) => {
      const data = result.data; // Access the data property in the result
      console.log(data.message);
      return data.message// Access the 'message' property in the response
    })
    .catch((error) => {
      console.error("Error:", error);
    });

</script>