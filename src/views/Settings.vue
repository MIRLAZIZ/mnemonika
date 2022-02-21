<template>
  <div>
    <h1 class="text-center py-6 text-2xl">Ustunlar soni</h1>

    <div
      class="
        h-12
        bg-red-400
        text-3xl text-purple-500
        px-3
        rounded-lg
        overflow-hidden
      "
    >
      <div class="cantent1 flex flex-row items-center justify-between h-12">
        <div 
        v-for="ustun in ustunlar" :key="ustun"
         class=""
         >
          {{ ustun.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ustunlar: [
        { id: 1, name: " 04" },
        { id: 2, name: " 08" },
        { id: 3, name: " 12" },
        { id: 4, name: " 16" },
        { id: 5, name: " 20" },
      ],
    };
  },
  name: "Settings",
  components: {},

  methods: {
    //div scroll left 300px right 300px enementi
    //scroll-x-reverse
    //scroll-x
    scrollx()
   
    
  },
};
</script>
<style scoped>
</style>
