<template>
  <div class="page">
    <header class="topnav">
      <a class="headpart">PRIDE</a>
      <a class="headpart" href="\\pride-fs\Рабочая\Кадры">Наш коллектив</a>
      <a class="headpart" href="\\pride-f/Lib"
        >Библиотека внутренних документов</a
      >
      <a class="headpart" href="">Биржа идей</a>
    </header>
    <main>
      <div class="mainhead">
        <a class="topname">PRIDE</a><br />
        <a class="comment">самое лучшее состояние, высшая степень!</a>
      </div>
      <div class="news"><h2>Новость дня</h2></div>
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
        <img :src="require('./assets/achievement-1.svg')" class="ach1" />
        <img :src="require('./assets/achievement-2.svg')" class="ach2" />
        <img :src="require('./assets/achievement-3.svg')" class="ach3" />
      </div>
      <div class="business">
        <h2>Основные бизнес-процессы</h2>
        <object
          data="https://example.com/test.pdf#page=2"
          type="application/pdf"
        >
          <iframe
            src="https://example.com/test.pdf#page=2"
            width="100%"
            height="100%"
            style="border: none"
          >
            <p>
              Your browser does not support PDFs.
              <a href="https://example.com/test.pdf">Download the PDF</a>.
            </p>
          </iframe>
        </object>
      </div>
    </main>
    <div class="mapinfo">
      <div class="time">
        <h2>График работы</h2>
        <p>С 9:00 до 18:00 или 10:00 до 19:00, с перерывом на обед</p>
      </div>
      <div class="map">
        <img :src="require('./assets/map.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
body {
  font-family: "PTSerif"; // по пожеланию заказчика
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

h2 {
  font-family: "IBMPlex";
  font-size: 40px;
}

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

.headpart {
  float: left;
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
  height: 100%;
  img {
    width: 75%;
    height: 75%;
  }
  iframe {
    height: 620px;
  }
}

.mapinfo {
  background: #272727;
  padding: 0px 40px 40px;
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
}

.links {
  text-align: center;
  font-size: 30px;
  background: #272727;
  padding: 20px 20px 20px 20px;
  border-bottom: 3px solid white;
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


