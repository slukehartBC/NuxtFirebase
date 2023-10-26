<template>
  <div class="background-image">
    <slot />
  </div>
</template>

<style lang="scss">
body {
  //background-color: $bc-black-hover !important;
}
.background-image {
  opacity: 1;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url("@/static/images/p3-background.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.blue-background {
  display: flex;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  height: 100vh; // Take the full height of the viewport
  //background-color:;

  // Ensure text and other content also stays centered in case of wrapping or additional content
  flex-direction: column;
  text-align: center;
}
</style>
<script setup lang="ts">
</script>