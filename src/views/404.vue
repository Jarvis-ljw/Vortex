<template>
    <div class="scenery">
      <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div class="planet planet1"></div>
      <div class="planet planet2"></div>
      <div class="planet planet3"></div>
      <div class="girl">
        <div class="head"></div>
        <div class="body"></div>
        <div class="legs"></div>
      </div>
      <div class="title">
        <h1><span>4</span>
          <div class="square">
            <div class="light light1"></div>
            <div class="light light2"></div>
            <div class="light light3"></div>
            <div class="light light4"></div>
            <div class="shadow shadow1"></div>
            <div class="shadow shadow2"></div>
            <ul class="stairs1">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul class="stairs2">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul class="stairs3">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul class="stairs4">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div><span>4</span>
        </h1>
      </div>
      <div class="message">
        <h2>Oops! Looks like you got lost</h2>
      </div>
      <div class="action">
        <button @click="backHome">Take me back</button>
      </div>
    </div>
</template>
<script lang="ts">
import {useRouter} from 'vue-router';
export default {
  name: "Home",
  components: {},
  setup(){ 
    const router = useRouter()
    const backHome=()=>{
      if (window.history.length <= 1) {
        router.push({path:'/'})
        return false } 
      else { 
        router.go(-1)
      }
    };
    return{
      backHome,
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

html {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption, th, td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle;
}

q, blockquote {
  quotes: none;
}
q:before, q:after, blockquote:before, blockquote:after {
  content: "";
  content: none;
}

a img {
  border: none;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

@keyframes shining {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
body {
  background-color: #482472;
  font-family: Poppins;
}

.scenery {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 5px;
  color: #fff;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzJhMWY2ZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2FlMzA4MiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
  background-size: 100%;
  background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #2a1f6f), color-stop(100%, #ae3082));
  background-image: -moz-linear-gradient(#2a1f6f, #ae3082);
  background-image: -webkit-linear-gradient(#2a1f6f, #ae3082);
  background-image: linear-gradient(#2a1f6f, #ae3082);
  -moz-box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 100px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 100px;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 100px;
}

.star {
  position: absolute;
  z-index: 1;
  background-color: #fff;
  animation-name: shining;
  animation-timing-function: ease;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  -moz-box-shadow: #fff 0px 0px 5px;
  -webkit-box-shadow: #fff 0px 0px 5px;
  box-shadow: #fff 0px 0px 5px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  border-radius: 200px;
}

.star:nth-child(1) {
  width: 3px;
  height: 3px;
  bottom: 121px;
  left: 105px;
  animation-duration: 2s;
}

.star:nth-child(2) {
  width: 2px;
  height: 2px;
  bottom: 543px;
  left: 979px;
  animation-duration: 1s;
}

.star:nth-child(3) {
  width: 3px;
  height: 3px;
  bottom: 49px;
  left: 370px;
  animation-duration: 1s;
}

.star:nth-child(4) {
  width: 3px;
  height: 3px;
  bottom: 417px;
  left: 904px;
  animation-duration: 1.5s;
}

.star:nth-child(5) {
  width: 2px;
  height: 2px;
  bottom: 330px;
  left: 966px;
  animation-duration: 1.5s;
}

.star:nth-child(6) {
  width: 3px;
  height: 3px;
  bottom: 443px;
  left: 615px;
  animation-duration: 1s;
}

.star:nth-child(7) {
  width: 1px;
  height: 1px;
  bottom: 112px;
  left: 609px;
  animation-duration: 1s;
}

.star:nth-child(8) {
  width: 3px;
  height: 3px;
  bottom: 358px;
  left: 836px;
  animation-duration: 0.5s;
}

.star:nth-child(9) {
  width: 1px;
  height: 1px;
  bottom: 495px;
  left: 393px;
  animation-duration: 0.66667s;
}

.star:nth-child(10) {
  width: 1px;
  height: 1px;
  bottom: 1px;
  left: 565px;
  animation-duration: 2s;
}

.star:nth-child(11) {
  width: 1px;
  height: 1px;
  bottom: 191px;
  left: 856px;
  animation-duration: 0.66667s;
}

.star:nth-child(12) {
  width: 1px;
  height: 1px;
  bottom: 75px;
  left: 986px;
  animation-duration: 4s;
}

.star:nth-child(13) {
  width: 3px;
  height: 3px;
  bottom: 514px;
  left: 827px;
  animation-duration: 2s;
}

.star:nth-child(14) {
  width: 2px;
  height: 2px;
  bottom: 142px;
  left: 454px;
  animation-duration: 1.33333s;
}

.star:nth-child(15) {
  width: 2px;
  height: 2px;
  bottom: 589px;
  left: 39px;
  animation-duration: 1s;
}

.star:nth-child(16) {
  width: 1px;
  height: 1px;
  bottom: 375px;
  left: 518px;
  animation-duration: 1s;
}

.star:nth-child(17) {
  width: 2px;
  height: 2px;
  bottom: 525px;
  left: 629px;
  animation-duration: 0.66667s;
}

.star:nth-child(18) {
  width: 2px;
  height: 2px;
  bottom: 518px;
  left: 913px;
  animation-duration: 4s;
}

.star:nth-child(19) {
  width: 2px;
  height: 2px;
  bottom: 345px;
  left: 967px;
  animation-duration: 1.5s;
}

.star:nth-child(20) {
  width: 1px;
  height: 1px;
  bottom: 494px;
  left: 267px;
  animation-duration: 3s;
}

.star:nth-child(21) {
  width: 2px;
  height: 2px;
  bottom: 490px;
  left: 772px;
  animation-duration: 2s;
}

.star:nth-child(22) {
  width: 3px;
  height: 3px;
  bottom: 256px;
  left: 159px;
  animation-duration: 1.33333s;
}

.star:nth-child(23) {
  width: 3px;
  height: 3px;
  bottom: 260px;
  left: 576px;
  animation-duration: 1.5s;
}

.star:nth-child(24) {
  width: 1px;
  height: 1px;
  bottom: 219px;
  left: 381px;
  animation-duration: 4s;
}

.star:nth-child(25) {
  width: 3px;
  height: 3px;
  bottom: 444px;
  left: 289px;
  animation-duration: 0.5s;
}

.star:nth-child(26) {
  width: 3px;
  height: 3px;
  bottom: 616px;
  left: 624px;
  animation-duration: 1s;
}

.star:nth-child(27) {
  width: 2px;
  height: 2px;
  bottom: 68px;
  left: 101px;
  animation-duration: 1.33333s;
}

.star:nth-child(28) {
  width: 2px;
  height: 2px;
  bottom: 321px;
  left: 837px;
  animation-duration: 1s;
}

.star:nth-child(29) {
  width: 3px;
  height: 3px;
  bottom: 49px;
  left: 512px;
  animation-duration: 1s;
}

.star:nth-child(30) {
  width: 2px;
  height: 2px;
  bottom: 214px;
  left: 222px;
  animation-duration: 3s;
}

.star:nth-child(31) {
  width: 3px;
  height: 3px;
  bottom: 477px;
  left: 524px;
  animation-duration: 1.5s;
}

.star:nth-child(32) {
  width: 3px;
  height: 3px;
  bottom: 188px;
  left: 795px;
  animation-duration: 0.5s;
}

.star:nth-child(33) {
  width: 3px;
  height: 3px;
  bottom: 566px;
  left: 530px;
  animation-duration: 1s;
}

.star:nth-child(34) {
  width: 3px;
  height: 3px;
  bottom: 393px;
  left: 542px;
  animation-duration: 1s;
}

.star:nth-child(35) {
  width: 2px;
  height: 2px;
  bottom: 418px;
  left: 981px;
  animation-duration: 1s;
}

.star:nth-child(36) {
  width: 2px;
  height: 2px;
  bottom: 21px;
  left: 527px;
  animation-duration: 1.5s;
}

.star:nth-child(37) {
  width: 3px;
  height: 3px;
  bottom: 65px;
  left: 705px;
  animation-duration: 2s;
}

.star:nth-child(38) {
  width: 2px;
  height: 2px;
  bottom: 326px;
  left: 235px;
  animation-duration: 0.5s;
}

.star:nth-child(39) {
  width: 3px;
  height: 3px;
  bottom: 38px;
  left: 672px;
  animation-duration: 2s;
}

.star:nth-child(40) {
  width: 2px;
  height: 2px;
  bottom: 95px;
  left: 823px;
  animation-duration: 1.5s;
}

.star:nth-child(41) {
  width: 1px;
  height: 1px;
  bottom: 590px;
  left: 742px;
  animation-duration: 1.33333s;
}

.star:nth-child(42) {
  width: 3px;
  height: 3px;
  bottom: 216px;
  left: 776px;
  animation-duration: 1s;
}

.star:nth-child(43) {
  width: 2px;
  height: 2px;
  bottom: 76px;
  left: 437px;
  animation-duration: 3s;
}

.star:nth-child(44) {
  width: 2px;
  height: 2px;
  bottom: 84px;
  left: 417px;
  animation-duration: 2s;
}

.star:nth-child(45) {
  width: 2px;
  height: 2px;
  bottom: 263px;
  left: 70px;
  animation-duration: 0.66667s;
}

.star:nth-child(46) {
  width: 1px;
  height: 1px;
  bottom: 274px;
  left: 294px;
  animation-duration: 1.5s;
}

.star:nth-child(47) {
  width: 2px;
  height: 2px;
  bottom: 66px;
  left: 442px;
  animation-duration: 0.33333s;
}

.star:nth-child(48) {
  width: 3px;
  height: 3px;
  bottom: 3px;
  left: 883px;
  animation-duration: 1s;
}

.star:nth-child(49) {
  width: 1px;
  height: 1px;
  bottom: 95px;
  left: 610px;
  animation-duration: 0.33333s;
}

.star:nth-child(50) {
  width: 1px;
  height: 1px;
  bottom: 63px;
  left: 845px;
  animation-duration: 1.5s;
}

.star:nth-child(51) {
  width: 2px;
  height: 2px;
  bottom: 261px;
  left: 860px;
  animation-duration: 3s;
}

.star:nth-child(52) {
  width: 3px;
  height: 3px;
  bottom: 257px;
  left: 857px;
  animation-duration: 1s;
}

.star:nth-child(53) {
  width: 2px;
  height: 2px;
  bottom: 315px;
  left: 462px;
  animation-duration: 2s;
}

.star:nth-child(54) {
  width: 3px;
  height: 3px;
  bottom: 20px;
  left: 787px;
  animation-duration: 1s;
}

.star:nth-child(55) {
  width: 3px;
  height: 3px;
  bottom: 271px;
  left: 644px;
  animation-duration: 3s;
}

.star:nth-child(56) {
  width: 1px;
  height: 1px;
  bottom: 588px;
  left: 50px;
  animation-duration: 1s;
}

.star:nth-child(57) {
  width: 1px;
  height: 1px;
  bottom: 521px;
  left: 950px;
  animation-duration: 1s;
}

.star:nth-child(58) {
  width: 2px;
  height: 2px;
  bottom: 269px;
  left: 185px;
  animation-duration: 2s;
}

.star:nth-child(59) {
  width: 1px;
  height: 1px;
  bottom: 278px;
  left: 482px;
  animation-duration: 0.66667s;
}

.star:nth-child(60) {
  width: 3px;
  height: 3px;
  bottom: 258px;
  left: 714px;
  animation-duration: 4s;
}

.star:nth-child(61) {
  width: 1px;
  height: 1px;
  bottom: 28px;
  left: 829px;
  animation-duration: 3s;
}

.star:nth-child(62) {
  width: 3px;
  height: 3px;
  bottom: 327px;
  left: 73px;
  animation-duration: 1.33333s;
}

.star:nth-child(63) {
  width: 1px;
  height: 1px;
  bottom: 220px;
  left: 17px;
  animation-duration: 1s;
}

.star:nth-child(64) {
  width: 3px;
  height: 3px;
  bottom: 410px;
  left: 501px;
  animation-duration: 0.5s;
}

.star:nth-child(65) {
  width: 2px;
  height: 2px;
  bottom: 358px;
  left: 270px;
  animation-duration: 0.66667s;
}

.star:nth-child(66) {
  width: 3px;
  height: 3px;
  bottom: 496px;
  left: 29px;
  animation-duration: 1.5s;
}

.star:nth-child(67) {
  width: 2px;
  height: 2px;
  bottom: 39px;
  left: 397px;
  animation-duration: 4s;
}

.star:nth-child(68) {
  width: 2px;
  height: 2px;
  bottom: 77px;
  left: 928px;
  animation-duration: 2s;
}

.star:nth-child(69) {
  width: 2px;
  height: 2px;
  bottom: 192px;
  left: 345px;
  animation-duration: 1s;
}

.star:nth-child(70) {
  width: 3px;
  height: 3px;
  bottom: 324px;
  left: 691px;
  animation-duration: 1s;
}

.star:nth-child(71) {
  width: 1px;
  height: 1px;
  bottom: 221px;
  left: 874px;
  animation-duration: 3s;
}

.star:nth-child(72) {
  width: 3px;
  height: 3px;
  bottom: 408px;
  left: 59px;
  animation-duration: 0.33333s;
}

.star:nth-child(73) {
  width: 3px;
  height: 3px;
  bottom: 166px;
  left: 444px;
  animation-duration: 0.5s;
}

.star:nth-child(74) {
  width: 2px;
  height: 2px;
  bottom: 558px;
  left: 512px;
  animation-duration: 1s;
}

.star:nth-child(75) {
  width: 1px;
  height: 1px;
  bottom: 387px;
  left: 470px;
  animation-duration: 4s;
}

.star:nth-child(76) {
  width: 3px;
  height: 3px;
  bottom: 308px;
  left: 743px;
  animation-duration: 1.33333s;
}

.star:nth-child(77) {
  width: 2px;
  height: 2px;
  bottom: 21px;
  left: 390px;
  animation-duration: 2s;
}

.star:nth-child(78) {
  width: 1px;
  height: 1px;
  bottom: 185px;
  left: 565px;
  animation-duration: 2s;
}

.star:nth-child(79) {
  width: 3px;
  height: 3px;
  bottom: 472px;
  left: 28px;
  animation-duration: 0.5s;
}

.star:nth-child(80) {
  width: 3px;
  height: 3px;
  bottom: 587px;
  left: 363px;
  animation-duration: 4s;
}

.star:nth-child(81) {
  width: 1px;
  height: 1px;
  bottom: 124px;
  left: 513px;
  animation-duration: 2s;
}

.star:nth-child(82) {
  width: 3px;
  height: 3px;
  bottom: 438px;
  left: 983px;
  animation-duration: 3s;
}

.star:nth-child(83) {
  width: 2px;
  height: 2px;
  bottom: 582px;
  left: 4px;
  animation-duration: 0.5s;
}

.star:nth-child(84) {
  width: 2px;
  height: 2px;
  bottom: 598px;
  left: 556px;
  animation-duration: 2s;
}

.star:nth-child(85) {
  width: 3px;
  height: 3px;
  bottom: 351px;
  left: 331px;
  animation-duration: 2s;
}

.star:nth-child(86) {
  width: 3px;
  height: 3px;
  bottom: 190px;
  left: 193px;
  animation-duration: 4s;
}

.star:nth-child(87) {
  width: 1px;
  height: 1px;
  bottom: 194px;
  left: 938px;
  animation-duration: 1s;
}

.star:nth-child(88) {
  width: 2px;
  height: 2px;
  bottom: 300px;
  left: 375px;
  animation-duration: 1.33333s;
}

.star:nth-child(89) {
  width: 2px;
  height: 2px;
  bottom: 147px;
  left: 234px;
  animation-duration: 0.33333s;
}

.star:nth-child(90) {
  width: 3px;
  height: 3px;
  bottom: 240px;
  left: 773px;
  animation-duration: 0.5s;
}

.star:nth-child(91) {
  width: 3px;
  height: 3px;
  bottom: 5px;
  left: 359px;
  animation-duration: 4s;
}

.star:nth-child(92) {
  width: 3px;
  height: 3px;
  bottom: 39px;
  left: 403px;
  animation-duration: 0.66667s;
}

.star:nth-child(93) {
  width: 1px;
  height: 1px;
  bottom: 582px;
  left: 411px;
  animation-duration: 0.33333s;
}

.star:nth-child(94) {
  width: 2px;
  height: 2px;
  bottom: 379px;
  left: 886px;
  animation-duration: 1.5s;
}

.star:nth-child(95) {
  width: 1px;
  height: 1px;
  bottom: 617px;
  left: 665px;
  animation-duration: 1s;
}

.star:nth-child(96) {
  width: 1px;
  height: 1px;
  bottom: 570px;
  left: 350px;
  animation-duration: 1.33333s;
}

.star:nth-child(97) {
  width: 2px;
  height: 2px;
  bottom: 407px;
  left: 649px;
  animation-duration: 1.5s;
}

.star:nth-child(98) {
  width: 2px;
  height: 2px;
  bottom: 599px;
  left: 416px;
  animation-duration: 2s;
}

.star:nth-child(99) {
  width: 3px;
  height: 3px;
  bottom: 234px;
  left: 793px;
  animation-duration: 0.33333s;
}

.title {
  position: relative;
  z-index: 50;
}
.title h1 {
  font-size: 15rem;
  font-weight: bold;
}
.title h1 span {
  vertical-align: middle;
  margin: 0 30px;
}

.message {
  margin-top: 50px;
}
.message h2 {
  font-size: 1.8rem;
}

.action {
  margin-top: 30px;
}
.action button {
  padding: 10px 20px;
  font-family: Poppins;
  font-size: 1.2rem;
  color: #fff;
  border: 2px solid #ff9c61;
  background-color: #ff9c61;
  border-radius: 50px;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  box-shadow: 0px 0px 15px #ff9c61;
}
.action button:hover {
  cursor: pointer;
  background-color: transparent;
}

.square {
  width: 150px;
  height: 150px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  -moz-transform: scale(1.1) rotate(45deg);
  -ms-transform: scale(1.1) rotate(45deg);
  -webkit-transform: scale(1.1) rotate(45deg);
  transform: scale(1.1) rotate(45deg);
}
.square > * {
  position: absolute;
}
.square .light {
  box-shadow: 0px 0px 10px #fedbae;
  background-color: #fedbae;
}
.square .light1, .square .light3 {
  width: 15px;
  height: 135px;
  -moz-transform: skew(0deg, 45deg);
  -ms-transform: skew(0deg, 45deg);
  -webkit-transform: skew(0deg, 45deg);
  transform: skew(0deg, 45deg);
}
.square .light2, .square .light4 {
  width: 120px;
  height: 15px;
  -moz-transform: skew(45deg);
  -ms-transform: skew(45deg);
  -webkit-transform: skew(45deg);
  transform: skew(45deg);
}
.square .light1 {
  z-index: 10;
  top: 5.5px;
  left: 15px;
}
.square .light3 {
  z-index: 2;
  top: 7.5px;
  right: 15px;
}
.square .light2 {
  top: 0;
  left: 22.5px;
}
.square .light4 {
  bottom: 0;
  right: 22.5px;
}
.square .shadow {
  background-color: #ff9c61;
  box-shadow: 0px 0px 10px #ff9c61;
}
.square .shadow1 {
  bottom: 7.5px;
  right: 0;
  width: 15px;
  height: 120px;
  -moz-transform: skew(0deg, -45deg);
  -ms-transform: skew(0deg, -45deg);
  -webkit-transform: skew(0deg, -45deg);
  transform: skew(0deg, -45deg);
}
.square .shadow2 {
  z-index: 3;
  top: 15px;
  left: 22.5px;
  width: 120px;
  height: 15px;
  -moz-transform: skew(-45deg);
  -ms-transform: skew(-45deg);
  -webkit-transform: skew(-45deg);
  transform: skew(-45deg);
}
.square .stairs1 li, .square .stairs2 li, .square .stairs3 li, .square .stairs4 li {
  position: relative;
  width: 7.5px;
  height: 7.5px;
  background-color: #fedbae;
  box-shadow: 0px 0px 10px #fedbae;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.square .stairs1 li::before, .square .stairs2 li::before {
  content: "";
  position: absolute;
  left: 0;
  width: 7.5px;
  height: 13px;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZlZGJhZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmOWM2MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
  background-size: 100%;
  background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #fedbae), color-stop(100%, #ff9c61));
  background-image: -moz-linear-gradient(left, #fedbae, #ff9c61);
  background-image: -webkit-linear-gradient(left, #fedbae, #ff9c61);
  background-image: linear-gradient(to right, #fedbae, #ff9c61);
  box-shadow: 0px 0px 10px #fedbae;
}
.square .stairs1 {
  top: 1px;
  left: 11px;
  width: 0px;
  height: 150px;
}
.square .stairs1 li {
  margin-bottom: 3px;
}
.square .stairs1 li::before {
  top: 100%;
}
.square .stairs2 {
  z-index: 10;
  bottom: 19px;
  left: 3px;
  width: 150px;
  height: 0px;
  display: flex;
}
.square .stairs2 li {
  margin-right: 3.5px;
}
.square .stairs2 li:last-child::before {
  background: #fedbae;
}
.square .stairs2 li::before {
  bottom: 100%;
}
.square .stairs3 {
  bottom: -32px;
  right: 34px;
  width: 0px;
  height: 150px;
  z-index: 10;
}
.square .stairs3 li {
  margin-bottom: 3.5px;
}
.square .stairs4 {
  top: -4px;
  left: 16px;
  width: 150px;
  height: 0px;
  display: flex;
}
.square .stairs4 li {
  margin-right: 3.5px;
}

.planet {
  position: absolute;
  z-index: 10;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-sizing: border-box;
}
.planet::before, .planet::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.planet::before {
  width: 70px;
  height: 70px;
}
.planet::after {
  width: 60px;
  height: 60px;
}

.planet1 {
  box-shadow: 0px 0px 30px #a3358c;
  bottom: 260px;
  left: 50px;
  border: 5px solid #a3358c;
  background-color: #cf3684;
}
.planet1::before {
  background-color: #fd8f5d;
}
.planet1::after {
  background-color: #ffdf70;
}

.planet2 {
  box-shadow: 0px 0px 30px #1383df;
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  bottom: 40px;
  right: 80px;
  border: 5px solid #1383df;
  background-color: #08abf3;
}
.planet2::before {
  background-color: #11c1f1;
}
.planet2::after {
  background-color: #22e5f1;
}

.planet3 {
  box-shadow: 0px 0px 30px #7a7afe;
  -moz-transform: scale(0.6);
  -ms-transform: scale(0.6);
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
  top: 20px;
  right: 30px;
  border: 5px solid #7a7afe;
  background-color: #9a82ff;
}
.planet3::before {
  background-color: #b588ff;
}
.planet3::after {
  background-color: #d491ff;
}

.girl {
  position: absolute;
  z-index: 99;
  width: 12px;
  height: 40px;
  top: 130px;
  left: 460px;
}
.girl .head {
  position: relative;
  z-index: 10;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-left: 3px solid #000;
  border-radius: 5px;
  -moz-transform: rotate(-20deg);
  -ms-transform: rotate(-20deg);
  -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
}
.girl .head::before {
  content: "";
  position: absolute;
  left: -16px;
  top: 0px;
  width: 0px;
  height: 0px;
  display: block;
  border-right: 15px solid #fff;
  border-top: 5px solid transparent;
  border-bottom: 4px solid transparent;
}
.girl .body {
  position: absolute;
  top: 7px;
  left: -2px;
  width: 0px;
  height: 0px;
  box-sizing: border-box;
  border-bottom: 20px solid #fff;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-radius: 7px;
}
.girl .legs {
  position: absolute;
  bottom: 5px;
  left: 3px;
  width: 3px;
  height: 10px;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
}
</style>
