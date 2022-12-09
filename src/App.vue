<template>
  <div id="app">
    <NavBarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from "@/layouts/NavBarComponent.vue";
export default {
  components: {
    NavBarComponent,
  },
};
</script>

<style lang="scss"></style>
