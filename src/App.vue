<template>
  <div class="page">
    <header class="topnav">
      <a class="name">PRIDE</a>
      <a class="menu">Меню</a>
    </header>
    <main>
      <div class="mainhead">
        <a class="topname">PRIDE</a><br />
        <a class="comment">самое лучшее состояние, высшая степень!</a>
      </div>
      <div class="helloblock">
        <div class="hello">
          <img :src="require('./assets/P.Sisoev.jpg')" />
          <p>Сысоев Павел Владимирович</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: "roboto", sans-serif;
}

body,
html {
  padding: 0;
  margin: 0;
}

.topnav {
  overflow: hidden;
  background-color: grey;
}

.topnav a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196f3;
  color: white;
}

.name {
  float: left;
}
.menu {
  float: right;
}

.mainhead {
  padding: 16px 32px 16px 32px;
  display: block;
}

.topname {
  font-size: 120px;
}

.comment {
  font-size: 30px;
  font-style: italic;
}

@media screen and (max-width: 600px) {
  .topnav a,
  .topnav input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>
