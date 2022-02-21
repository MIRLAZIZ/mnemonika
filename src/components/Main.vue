<template>
  <div class="bg-purple-900 main">
    <div class="main_flex w-full h-28 px-6">
      <button class="header-btn p-1 rounded" @click="back">
        <svg
          class="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <h1 class="text-3xl text-white">Mnemonika</h1>
      <img src="@/assets/profile.png" class="w-16" />
    </div>
    <div class=" h-6 bg-white main_rounded"></div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.main {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.header-btn {
  background-color: rgba(255, 255, 255, 0.2);
}
.main_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main_rounded {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
</style>