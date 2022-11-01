<template>
  <div>
    <div class="flex">
      <div class="w-2/4 mb-8">
        <input
          type="text"
          placeholder="  Поиск"
          class="border w-56 h-9"
          v-model="search"
          @keyup.enter="filterarray"
        />
        <button
          class="border w-56 text-left px-2 ml-10 h-9"
          @click=""
        >
          Статус
          <img
            src="../assets/icons8-done-20.png"
            alt=""
            class="inline float-right"
          />
        </button>
      </div>
      <div class="w-2/4">
        <button
          class="border h-9 float-right px-2 btn"
          @click="$router.push('/dobavit')"
        >
          Добавить
        </button>
      </div>
    </div>
    <table class="w-full mb-3">
      <tr v-for="filterUser in filterUsers" :key="filterUser" class="trHover">
        <td class="border text-center">{{ filterUser.id }}</td>
        <td class="border text-center">{{ filterUser.name }}</td>
        <td class="border text-center">{{ filterUser.lastname }}</td>
        <td class="border text-center">{{ filterUser.telNum }}</td>
        <td class="border text-center">{{ filterUser.adres }}</td>
        <td class="border text-center">
          {{ filterUser.status === true ? "Активнь" : "Неактивнь" }}
        </td>
      </tr>
    </table>
    <div>
      <table class="border-collapse border w-full">
        <thead>
          <tr>
            <th class="border">N</th>
            <th class="border">Имя</th>
            <th class="border">Фамилия</th>
            <th class="border">Телефон номер</th>
            <th class="border">Адрес</th>
            <th class="border">Статус</th>
            <th class="border">Действио</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user" class="trHover">
            <td class="border text-center">{{ user.id }}</td>
            <td class="border text-center">{{ user.name }}</td>
            <td class="border text-center">{{ user.lastname }}</td>
            <td class="border text-center">{{ user.telNum }}</td>
            <td class="border text-center">{{ user.adres }}</td>
            <td class="border text-center">
              {{ user.status === true ? "Активнь" : "Неактивнь" }}
            </td>
            <td class="border tabl_btn">
              <button class="hover:border">
                <img src="../assets/icons8-eye-30.png" alt="" />
              </button>
              <button>
                <img
                  src="../assets/icons8-pencil-30.png"
                  alt=""
                  @click="$router.push(`/tableItem/${user.id}`)"
                />
              </button>
              <button>
                <img
                  src="../assets/icons8-remove-30.png"
                  alt=""
                  @click="deletUser(user.id)"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TableItem",
  data() {
    return {
      users: [],
      search: "",
      filterUsers: [],
      neactiv: true ,
    };
  },
  methods: {
    deletUser(id) {
      this.users = this.users.filter((user) => user.id != id);
    },

    filterarray() {
      let filter = this.users.filter((user) =>
        user.name.toLowerCase().includes(this.search.toLowerCase())
      );
      this.filterUsers = filter;
      console.log(this.filterUsers);
    },
  },
  async mounted() {
    let respons = await axios.get("http://localhost:3000/users");
    let users = await respons.data;
    this.users = users;
  },
};
</script>
<style>
.tabl_btn {
  display: flex;
  justify-content: space-around;
}
.tabl_btn button:hover {
  outline: 1px solid #489ee2;
}
.tabl_btn img {
  width: 25px;
  height: 25px;
}
input:focus {
  outline: none;
}
.btn {
  background-color: #489ee2;
  padding: 2px 8px;
  border-radius: 5px;
}
.trHover:hover {
  background: #f1f3f4;
  cursor: pointer;
}
</style>
