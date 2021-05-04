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
      <div class="news"></div>
      <div class="hello">
        <div class="helloimage">
          <img :src="require('./assets/P.Sisoev.jpg')" />
          <p>Сысоев Павел Владимирович</p>
        </div>
        <div class="hellotext">
          <section>
            <article>
              <p>Дорогие коллеги!</p>
              <p>
                Приглашаю Вас принять участие в Третьем международном Форуме
                онкологии и радиологии. Как врачи мы отлично понимаем, что
                опасность заражения коронавирусом всё еще существует. Именно
                поэтому организационный комитет принял решение провести
                мероприятие в онлайн формате.
              </p>
              <p>
                Мы пошли на эти меры «для жизни», и тем самым Форум с
                символичным названием For Life получил новое звучание: сегодня,
                общаясь онлайн, мы предотвращаем новые случаи заражения
                СОVID-19.
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  body {
    font-family: "roboto", sans-serif;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  main {
    padding-left: 3%;
    padding-right: 3%;
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

  .news {
    background: black;
    height: 100px;
  }

  .hello {
    padding: 20px 40px 40px;
    border: 3px solid black;
    max-width: 720px;
    &image {
      display: inline-block;
      vertical-align: top;
      width: 46%;
      margin: 20px 30px 0 0;
    }
    &text {
      display: inline-block;
      width: 46%;
      @media (max-width: 620px) {
        width: 100%;
      }
    }
  }

  .hello img {
    border-radius: 20px;
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


