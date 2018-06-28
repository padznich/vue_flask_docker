<template>
  <div>
      <li v-for="user, i in users">
        <div v-if="editUser === user.id">
          <input v-on:keyup.13="updateUser(user)" v-model="user.username" />
          <button v-on:click="updateUser(user)">save</button>
        </div>
        <div v-else>
          <button v-on:click="editUser = user.id">edit</button>
          <button v-on:click="deleteUser(user.id, i)">x</button>
          {{user.username}}
        </div>
      </li>
    </div>
</template>

<script>
export default {
  name: 'Users',
  editUser: null,
  users: [],
  methods: {
    deleteUser(id, i) {
      fetch("/home/api/users/" + id + "/", {
        method: "DELETE"
      })
      .then(() => {
        this.users.splice(i, 1);
      })
    },
    updateUser(user) {
      fetch("/home/api/users/" + user.id + "/", {
        body: JSON.stringify(user),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        this.editUser = null;
      })
    }
  },
  mounted() {
    fetch("/home/api/users/", {
      method: "GET"
    })
      .then(response => response.json())
      .then((data) => {
        this.users = data;
      })
  },
  data () {
    return {
      users: this.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
