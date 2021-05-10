<template>
  <div id="login">
    <h1>Войти</h1>
    <form @submit.prevent="Login">
      <input type="text" placeholder="E-mail" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then()
        .catch((e) => alert(e.message));
    };

    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style lang="scss">
</style>