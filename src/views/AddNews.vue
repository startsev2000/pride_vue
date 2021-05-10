<template>
  <div class="addemployee">
    <form @submit.prevent="submitNews">
      <div class="head">
        <label>Заголовок</label>
        <input v-model="form.heading" type="text" />
      </div>
      <!-- <div class="photo">
        <label>Фотография</label>
        <input type="file" />
      </div>-->
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
import { addNews } from '@/main'
import { reactive } from 'vue'

export default {
  /*
    Фотография
    ФИО
    Год рождения
    Профессия
    Описание
    */
   setup() {
       const form = reactive({ heading: '',  news: '' })

       const submitNews = async () => {
           await addNews({...form})
           form.heading = ''
           form.news = ''
       }

       return { form, submitNews }
   }

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