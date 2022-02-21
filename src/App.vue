<template>
  <div class="bgimg">
    <div class="sozlama bg-white m-auto">
      <Main></Main>
      <div class="px-6">
        <router-view></router-view>
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
};
</script>



<style scoped>
.bgimg {
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-repeat: no-repeat;
}

.sozlama {
  width: 30%;
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
