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
          <button class="btn" @click="addItem">сохранить</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Dobavit",
  data() {
    return {
      userData: {
        name: "",
        lastname: "",
        phone: "",
        address: "",
        aktiv: false,
      },
    };
  },
  methods: {
    async addItem() {           
      
        await axios.post(`http://localhost:3000/users`, {
          name: this.userData.name,
          lastname: this.userData.lastname,
          telNum: this.userData.phone,
          adres: this.userData.address,
          status: this.userData.aktiv,
        });
        
      this.userData = "";
      this.$router.push('/')

    },
  },
};
</script>


<style>
.formInput {
  border-bottom: 1px solid #489ee2;
  width: 30%;
}
.formdiv {
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
}
.checkbox {
  display: flex;
  justify-content: space-between;
  padding: 0 105px;
}
.btn {
  background-color: #489ee2;
  padding: 2px 8px;
  border-radius: 5px;
}
</style>
