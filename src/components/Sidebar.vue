<template>
  <div>
    <div v-for="menuItem in menuItems" :key="menuItem">
      <div
        class="flex flex-row items-center py-2 px-4 border"
       
      >
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
      isActive: false,
      menuItems: [
        {
          id: 1,
          icon: require("../assets/home.png"),
          title: "Главная",
        },
        {
          id: 2,
          icon: require("../assets/customer.png"),
          title: "Клиентъ",
        },
        {
          id: 3,
          icon: require("../assets/icons-dollar.png"),
          title: "Продажи",
        },
        {
          id: 4,
          icon: require("../assets/customers.png"),
          title: "Полозаватели",
        },
        {
          id: 5,
          icon: require("../assets/manual.png"),
          title: "Cправочникъ",
        },
      ],
      menuRout: ["home", "", "about", "settings", "manual"],
    };
  },
  methods: {
  
  },
};
</script>
<style>
.menu_img {
  width: 30px;
  height: 30px;
}
.faol {
  background: #000;
}
</style>
