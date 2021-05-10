<template>
  <div class="addemployee">
    <form @submit.prevent="submitNews">
      <div class="head">
        <label>Заголовок</label>
        <input v-model="form.heading" type="text" />
      </div>
      <div class="photo">
        <label>Фотография</label>
        <input type="file" />
        <button @click="onUpload">Upload image</button>
      </div>
      <div class="news1">
        <label>Новость</label>
        <textarea rows="10" cols="40" v-model="form.news"></textarea>
      </div>
      <div>
        <button type="submit">Добавить новость</button>
      </div>
    </form>
  </div>
</template>

<script>
import { addNews } from "@/main";
import { reactive } from "vue";
import firebase from 'firebase'

export default {
  /*
    Фотография
    ФИО
    Год рождения
    Профессия
    Описание
    */
  setup() {
    const form = reactive({ heading: "", news: "" });

    const submitNews = async () => {
      await addNews({ ...form });
      form.heading = "";
      form.news = "";
    };

    const onUpload = () => {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    }

    return { form, submitNews, onUpload };
  },
};
</script>

<style lang="scss">
.addemployee {
  padding: 20px 20px 20px 20px;
  float: left;
}

input {
  font-size: 20px;
  border-radius: 10;
  margin-top: 20px;
}

textarea,
button {
  margin-top: 20px;
}
</style>