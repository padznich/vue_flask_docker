<template>
  <div>
    <h3>Users:</h3>
    <ul v-for="user, i in users" :key="user.id">
      <li>
        <div v-if="editUser === user.id">
          <input v-on:keyup.13="updateUser(user)" v-model="user.username" />
          <button v-on:click:keyup.13="updateUser(user)" class="commonButton">save</button>
        </div>
        <div v-else>
          <button v-on:click="editUser = user.id" class="editUser">edit</button>
          <button v-on:click="deleteUser(user.id, i)" class="deleteUser">x</button>
          {{user.username}}
        </div>
      </li>
    </ul>
    <div>
      <span>Total Users Number: {{ users.length }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      editUser: null,
      users: []
    }
  },
  methods: {
    deleteUser: function(id, i) {
      fetch("http://localhost:5000/home/api/users/" + id + "/", {
        method: "DELETE"
      })
      .then(() => {
        this.users.splice(i, 1);
      })
    },
    updateUser: function(user) {
      fetch("http://localhost:5000/home/api/users/" + user.id + "/", {
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
  mounted: function() {
    fetch("http://localhost:5000/home/api/users/", {
      method: "GET"
    })
      .then(response => response.json())
      .then((data) => {
        this.users = data;
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }
  ul {
    text-align: left;
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
  button {
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 22px;
    outline: 0;
    cursor: pointer;
  }
  button.commonButton {
    background: #1c86b9;
  }
  button.editUser {
    background: #42b983;
  }
  button.deleteUser {
    background: #B91122;
  }
</style>
