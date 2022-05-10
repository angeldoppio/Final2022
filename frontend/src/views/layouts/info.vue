<template>
  <div class="w-full items-center content-center" id="app">
    <Navbar />
    <slot/>
    </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  name: "DefaultLayout",
  components :{
    Navbar : navbar,
  },
};
</script>
