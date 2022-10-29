<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-2/12 h-24 flex justify-center items-center sidebar">
        <h1 class="text-5xl">ZK</h1>
      </div>
      <div class="w-10/12 menu">
        <navbar />
      </div>
      <div class="w-2/12 h-screen bg-violet-900 border sidebar">
        <sidebar />
      </div>
      <div class="w-10/12">
        <table-item />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TableItem from "./TableItem.vue";
export default {
  components: {
    Sidebar,
    Navbar,
    TableItem,
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.sidebar {
  background: #e3f2fd;
}
.menu {
  background: #f5f5f5;
}
</style>
