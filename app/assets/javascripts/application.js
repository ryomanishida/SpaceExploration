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
//= require jquery

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// gemのturbolinks（ロードを早くするもの）が邪魔してjsをリロードしないと使えない。
// document.addEventListener("turbolinks:load")を入れることによって、turbolinksを無効化する。
 document.addEventListener("turbolinks:load",function() {
// ランダムな場所に流す
let starId = 0;

function getRadomNumber (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

function getStarId() {
  let current = starId;
  starId += 1;
  return current;
};

// 流れ星工場
function addShootingStar() {
  let bodyElement = document.getElementById('body');
  if (!bodyElement) return;

  let targetId = `star-${getStarId()}`;

  // 追加するElementを作成
  let element = document.createElement('div');
  element.id = targetId;
  element.className = 'star-position';
  element.innerHTML = '<div class="star" />';

  // 角度を計算
  let degree = getRadomNumber(-90, 90);
  element.style.transform = `rotateZ(${degree}deg)`;

  // 表示位置の計算。中心から放射状に流れるように、位置は角度を元に計算する
  let radius = getRadomNumber(50, document.body.clientWidth / 4);
  let radian = degree * (Math.PI / 180);
  let vertical = radius * Math.cos(radian);
  let horizonal = radius * Math.sin(radian);
  let center = document.body.clientWidth / 2;
  element.style.left = `${center - horizonal}px`;
  element.style.top = `${vertical + 100}px`;

  // Elementを追加
  bodyElement.appendChild(element);

  // １秒後に追加したElementを削除する
  setTimeout(() => {
    let target = document.getElementById(targetId);
    if (target) {
      target.remove();
    }
  }, 1000);
};


// インターバル処理を設定
let intervalId = setInterval(addShootingStar, 5 * 1000);

function onChange(e) {
  if(intervalId) {
    clearInterval(intervalId);
  }
}

// ハンバーガーメニュー
$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// スライドショー
$(document).ready(function () {
  $("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'slide',
    // 変化に係る時間(ミリ秒)
    speed : 1700,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'bubble',
    // 子要素の種類('div' or 'img')
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印
    hidePrevious : true
  });
});
})