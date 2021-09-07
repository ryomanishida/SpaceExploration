// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
var starId = 0;

function getRadomNumber (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

function getStarId() {
  var current = starId;
  starId += 1;
  return current;
};

function addShootingStar() {
  var bodyElement = document.getElementById('body');
  if (!bodyElement) return;

  var targetId = `star-${getStarId()}`;

  // 追加するElementを作成
  var element = document.createElement('div');
  element.id = targetId;
  element.className = 'star-position';
  element.innerHTML = '<div class="star" />';

  // 角度を計算
  var degree = getRadomNumber(-90, 90);
  element.style.transform = `rotateZ(${degree}deg)`;

  // 表示位置の計算。中心から放射状に流れるように、位置は角度を元に計算する
  var radius = getRadomNumber(50, document.body.clientWidth / 4);
  var radian = degree * (Math.PI / 180);
  var vertical = radius * Math.cos(radian);
  var horizonal = radius * Math.sin(radian);
  var center = document.body.clientWidth / 2;
  element.style.left = `${center - horizonal}px`;
  element.style.top = `${vertical + 100}px`;

  // Elementを追加
  bodyElement.appendChild(element);

  // １秒後に追加したElementを削除する
  setTimeout(() => {
    var target = document.getElementById(targetId);
    if (target) {
      target.remove();
    }
  }, 1000);
};


// インターバル処理を設定
var intervalId = setInterval(addShootingStar, 5 * 1000);

function onChange(e) {
  if(intervalId) {
    clearInterval(intervalId);
  }
  // 指定された秒数でインターバル処理を再設定
  intervalId = setInterval(addShootingStar, e.srcElement.value * 1000);
}
var select = document.getElementById('interval');
select.addEventListener('change', onChange);

addShootingStar();