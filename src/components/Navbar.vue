<template>
  <div>
    <div class="flex flex-row w-full h-24 border">
      <div class="w-2/4 text-4xl flex items-center pl-11"><h1>Клиентъ</h1></div>
      <div class="w-2/4 flex items-center flex-row-reverse">
        <div class="mr-6 navbar rounded-full ">
          <img
            src="../assets/icons8-administrator-male-80.png"
            alt=""
            class="w-12 border rounded-full p-1"
          />
        </div>
        <button class="border p-2 navbar mx-4">Uz</button>

        <div class="rounded-full border navbar">
          <img src="../assets/icons8-moon-symbol-30.png" alt="" class="w-10 p-2" />  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      //   light: [    
      //     { img: require("../assets/icons8-moon-symbol-30.png") },
      //     { img: require("../assets/icons8-sun-30.png") },
      //   ],
    };
  },
};
</script>
<style>
.navbar {
  background-color: #fff;
}
</style>
