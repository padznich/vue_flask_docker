<template>
  <div class="signUp">
    <h3>Create a new account</h3>
    <input v-model="email" type="text" placeholder="Email"/><br/>
    <input v-model="password" type="password" placeholder="Password"/><br/>
    <button v-on:click:keyup.13="signUp">Sign Up</button>
    <span>Or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'SignUp',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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

  .signUp {
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

  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }

</style>
