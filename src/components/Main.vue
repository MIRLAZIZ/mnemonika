<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-2/12 h-24 flex justify-center items-center sidebar">
        <h1 class="text-5xl">ZK</h1>
      </div>
      <div class="w-10/12 menu">
        <navbar />
      </div>
      <div class="w-2/12 sidebarH border sidebar">
        <sidebar />
      </div>
      <div class="w-10/12 p-10">
        <router-view />
        
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TableItem from "../views/TableItem.vue";
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
  background: #489EE2;
}
.sidebarH {
  height: 85vh;
}
</style>
