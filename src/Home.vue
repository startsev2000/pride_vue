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
      <div class="news">Новость дня</div>
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
      <div class="info">
        <article>
          <p>
            ТПО «ПРАЙД» - быстро развивающаяся компания, основанная в 2013 году.
          </p>
          <p>
            Основатели - специалисты, имеющие огромный опыт работы в реализации
            крупных и технологически сложных объектов.
          </p>
        </article>
      </div>
      <div class="principles">
        <h2>Принципы</h2>
        <img :src="require('./assets/principles.svg')" />
      </div>
      <div class="services">
        <article>
          <h2>Компания оказывает полный комплекс услуг</h2>
          <p>
            От создания концепций до РД, авторского надзора, выполнения функций
            технического заказчика и оценки градостроительного потенциала.
          </p>
          <h2>Основные направления нашей деятельности – РАЗРАБОТКА</h2>
          <li>Генеральных планов</li>
          <li>Архитектурных/конструктивных/инженерных решений</li>
          <li>Дизайн-проектов интерьеров</li>
          <li>Сметной документации</li>
          <p></p>
        </article>
      </div>
      <div class="competitions">
        <h2>Мы активно участвуем в архитектурных конкурсах</h2>
        <p></p>
        <p>
          В том числе в консорциумах с иностранными компаниями, которым мы
          помогаем адаптировать проекты под реалии российского рынка и
          сопровождаем их на всех этапах реализации.
        </p>
        <img :src="require('./assets/achievement-1.svg')" class="ach1"/>
        <img :src="require('./assets/achievement-2.svg')" class="ach2"/>
        <img :src="require('./assets/achievement-3.svg')" class="ach3"/>
      </div>
      <div class="business">
        <h2>Основные бизнес-процессы</h2>
        <img :src="require('./assets/business-processes.png')" />
      </div>
      <div class="links">
        <a href="\\pride-fs\Рабочая\Кадры"><p>Наш коллектив</p></a>
        <a href="\\pride-f/Lib"><p>Библиотека внутренних документов</p></a>
        <a href=""><p>Биржа идей</p></a>
      </div> 
    </main>
    <div class="mapinfo">
      <div class="map">
        <img :src="require('./assets/map.png')" />
      </div>
      <div class="time">
        <h2>График работы</h2>
        <p>С 9:00 до 18:00 или 10:00 до 19:00, с перерывом на обед</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
};

</script>

<style lang="scss">
body {
  font-family: "Arial Narrow"; // по пожеланию заказчика
}

body,
html {
  padding: 0;
  margin: 0;
}

/*main {
  padding-left: 3%;
  padding-right: 3%;
}*/

li {
  padding: 10px 10px 10px 10px;
}
.topnav {
  overflow: hidden;
  background-color: #f9ffff;
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
  background: #272727;
  height: 600px;
  text-align: center;
  color: white;
  font-size: 30px;
  padding: 20px 20px 20px 20px;
}

.hello {
  padding: 20px 40px 40px;
  border-bottom: 3px solid black;
  max-width: auto;
  img {
    width: 55%;
    height: 55%;
  }
  &image {
    display: inline-block;
    vertical-align: top;
    width: 46%;
    margin: 20px 0 0 20px;
  }
  &text {
    display: inline-block;
    width: 46%;
    font-size: 22px;
    @media (max-width: 620px) {
      width: 100%;
    }
  }
}

.hello img {
  border-radius: 20px;
}

.info {
  background-image: url("~@/assets/background-1.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 40px;
  padding: 30px 30px 30px 30px;
}

.principles {
  background: #272727;
  text-align: center;
  color: white;
  padding: 10px;
  img {
    padding: 20px 20px 20px 20px;
    width: 50%;
    height: 50%;
  }
}
.services,
.business {
  text-align: center;
  font-size: 30px;
  img {
    width: 75%;
    height: 75%;
  }
}

.mapinfo {
  background: #272727;
  padding: 20px 40px 40px;
  img {
    width: 75%;
    height: 75%;
  }
  color: white;
  text-align: center;
  .map,
  .time {
    display: inline-block;
    vertical-align: top;
  }
  font-size: 18px;
}

.competitions {
  background-image: url("~@/assets/background-2.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 20px 20px 20px;
  position: relative;
  text-align: center;
  font-size: 30px;
  img {
    width: 55%;
    height: 55%;
  }
  .ach1 {
    position: relative;
    z-index: 0;
    left: 5%;
    bottom: 5%;
  }
  .ach2 {
    position: absolute;
    z-index: 1;
    left: 1%;
    bottom: 14%;
  }
  .ach3 {
    position: relative;
    z-index: 2;
    left: 12%;
  }
}

.links {
  text-align: center;
  font-size: 30px;
  background: #272727;
  padding: 20px 20px 20px 20px;
  border-bottom: 3px solid white;
}

a:link, a:visited {
  color: white;
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


