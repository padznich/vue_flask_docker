<template>
  <div class="login">
    <h3>Sign In</h3>
    <input v-model="email" type="text" placeholder="Email"/><br/>
    <input v-model="password" type="password" placeholder="Password"/><br/>
    <button v-on:click="signIn">Connect</button>
    <p>You don't have an account? You can <router-link to="/signup">create one</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Login',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        )

      }
    }
  }
</script>

<style scoped>

  .login {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }

  p a {
    text-decoration: underline;
    cursor: pointer;
  }

</style>
