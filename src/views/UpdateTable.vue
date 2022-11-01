<template>
  <div>
    <form @submit.prevent>
      <div>
        <div class="formdiv">
          <input
            type="text"
            placeholder="ism"
            class="formInput"
            v-model="userData.name"
          />

          <input
            type="text"
            placeholder="familiya "
            class="formInput"
            v-model="userData.lastname"
          />
        </div>
        <div class="formdiv">
          <input
            type="text"
            placeholder="telifon nomer"
            class="formInput"
            v-model="userData.phone"
          />
          <input
            type="text"
            placeholder="adres"
            class="formInput"
            v-model="userData.address"
          />
        </div>
        <div class="checkbox">
          <input type="checkbox" class="border w-5" v-model="userData.aktiv" />
          <button class="btn" @click="boughtItem">сохранить</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UpdateTable",
  data() {
    return {
      userData: {
        name: "",
        lastname: "",
        phone: "",
        address: "",
        aktiv: false,
      },
      id: this.$route.params.id,
      items: [],
      

    };
  },
  methods: {
    async boughtItem() {
      let res = await axios.patch(`${`http://localhost:3000/users`}/${this.id}`,
        {
          boughtItem: true,
        }
      );
      this.items = res.data;
      console.log(this.items);
    },
 
    
    
    
  },
  mounted() {
    
    

  }
};
</script>
