<template>
  <div class="addemployee">
    <form @submit.prevent="onSubmit">
      <div class="name">
        <label>ФИО</label>
        <input v-model="form.name" type="text" />
      </div>
      <div class="year">
        <input v-model="form.year" type="text" />
        <label>Год рождения</label>
      </div>
      <!-- <div class="photo">
        <label>Фотография</label>
        <input type="file" />
      </div>-->
      <div class="job">
        <label>Должность</label>
        <input v-model="form.job" type="text" />
      </div>
      <div class="description">
        <label>О сотруднике</label>
        <textarea rows="5" v-model="form.description"></textarea>
      </div>
      <div>
        <button type="submit">Добавить сотрудника</button>
      </div>
    </form>
  </div>
</template>

<script>
import { addEmployee } from '@/firebase'
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
       const form = reactive({ name: '', year: '', job: '', description: '' })

       const onSubmit = async () => {
           await addEmployee({...form})
           form.name = ''
           form.year = ''
           form.job = ''
           form.description = ''
       }

       return { form, onSubmit }
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