<template>
  <div>
    <p>pride</p>
  </div>
  <div class="divider"></div>
  <div class="row">
    <div class="button-wrapper" style="width: 33.33%">
      <button class="mission">Миссия / Цели</button>
    </div>
    <div class="button-wrapper" style="width: 33.33%">
      <button class="team">Команда</button>
    </div>
    <div class="button-wrapper" style="width: 33.33%">
      <button class="organisational">Организационная</button>
    </div>
  </div>
  <div class="row">
    <div class="button-wrapper" style="width: 33.33%">
      <button class="documents">Регламенты</button>
    </div>
    <div class="button-wrapper" style="width: 33.33%">
      <button class="library">Библиотека</button>
    </div>
    <div class="button-wrapper" style="width: 33.33%">
      <button class="gallery">Галерея</button>
    </div>
  </div>
  <div class="divider"></div>
  <div class="row">
    <div class="button-wrapper" style="width: 25%">
      <button class="events">Мероприятия</button>
    </div>
    <div class="button-wrapper" style="width: 25%">
      <button class="birthdays">Дни Рождения</button>
    </div>
    <div class="button-wrapper" style="width: 25%">
      <button class="sports">Спорт</button>
    </div>
    <div class="button-wrapper" style="width: 25%">
      <button class="ideas">Биржа Идей</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body,
html {
  margin: 0;
}

.button-wrapper {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.footer {
  margin: 10px 10px 10px 10px;
}

.row {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}
button {
  background-color: white;
}
.divider {
  height: 1px;
  background-color: black;
  margin-top: 20px;
}
.mission,
.team,
.organisational,
.documents,
.library,
.gallery {
  border: 1px solid black;
  padding: 24px 16px 24px 16px;
  width: 92.5%;
  margin-right: 10px;
  margin-left: 10px;
  height: 150px;
}

.events,
.birthdays,
.sports,
.ideas {
  border: 1px solid black;
  padding: 24px 16px 24px 16px;
  margin-right: 10px;
  margin-left: 10px;
  width: 90%;
  height: 150px;
}

.mission:hover {
  background-color: #9cdaf9;
}
.team:hover {
  background-color: #db6b53;
}
.organisational:hover {
  background-color: #bc7db0;
}
.documents:hover {
  background-color: #f09d39;
}
.library:hover {
  background-color: #e9fdc6;
}
.gallery:hover {
  background-color: #ecc36d;
}
.events:hover {
  background-color: #cca2a3;
}
.birthdays:hover,
.sports:hover {
  background-color: #f7eae3;
}
.ideas:hover {
  background-color: #d8dfe3;
}
</style>