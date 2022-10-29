<template>
  <div>
    <div v-for="menuItem in menuItems" :key="menuItem">
      <div class="flex flex-row items-center py-2 px-4 border">
        <img :src="menuItem.icon" alt="" class="w-7" />
        <span class="pl-3">{{ menuItem.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      img: "../assets/home.png",
      menuItems: [
        { icon: require("../assets/home.png"), title: "Главная" },
        { icon: require("../assets/customer.png"), title: "Клиентъ" },
        { icon: require("../assets/icons-dollar.png"), title: "Продажи" },
        { icon: require("../assets/customers.png"), title: "Полозаватели" },
        { icon: require("../assets/manual.png"), title: "Cправочникъ" },
      ],
    };
  },
  methods() {},
  mounted() {
    console.log(this.menuItems[0]);
  },
};
</script>
<style>
.menu_img {
  width: 30px;
  height: 30px;
}
</style>
