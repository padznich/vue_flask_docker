const app = new Vue({
    el: "#app",
    data: {
      editUser: null,
      users: [],
    },
    methods: {
      deleteUser(id, i) {
        fetch("/api/users/" + id + "/", {
          method: "DELETE"
        })
        .then(() => {
          this.users.splice(i, 1);
        })
      },
      updateUser(user) {
        fetch("/api/users/" + user.id + "/", {
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
      fetch("/api/users/", {
        method: "GET"
      })
        .then(response => response.json())
        .then((data) => {
          this.users = data;
        })
    },
    template: `
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
    `,
});