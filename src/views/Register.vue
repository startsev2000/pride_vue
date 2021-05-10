<template>
  <div id="login">
    <h1>Регистрация</h1>
    <form @submit.prevent="Register">
      <input type="text" placeholder="E-mail" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Register" />
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

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then()
        .catch((e) => alert(e.message));
    };

    return {
      Register,
      email,
      password,
    };
  },
};
</script>

<style lang="scss">
</style>