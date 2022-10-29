<template>
  <div class="bgimg">
    <div class="sozlama bg-white m-auto">
      <Main />
      <div class="px-6">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.sozlama {
  width: 100%;
  height: 100vh;
  border-radius: 20px;
}
@media (max-width: 768px) {
  .sozlama {
    width: 100%;
  }
  .bgimg {
    padding: 0;
  }
}
</style>
