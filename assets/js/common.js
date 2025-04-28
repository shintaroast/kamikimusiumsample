

$(function() {
    // ハンバーガーメニュー
    $('.header_hamburger').on('click', function() {
        if ($('#header').hasClass('open')) {
            $('.header_hamburger p').css('opacity', 0); // 文字をフェードアウト
            setTimeout(function() {
                $('#header').removeClass('open');
                $('.header_hamburger p').text('Menu').css('opacity', 1); // テキスト変更後にフェードイン
            }, 300); // 0.3秒後にテキストを変更
        } else {
            $('.header_hamburger p').css('opacity', 0); // 文字をフェードアウト
            setTimeout(function() {
                $('#header').addClass('open');
                $('.header_hamburger p').text('Close').css('opacity', 1); // テキスト変更後にフェードイン
            }, 300); // 0.3秒後にテキストを変更
        }
    });
});
$(function() {
    $('.header_hamburger').on('click', function() {
        if ($('#header').hasClass('open')) {
            $('.header_hamburger p').css('opacity', 0); // 文字をフェードアウト
            $('.header_menu').fadeOut(300, function() { // 0.3秒かけてフェードアウト
                $('#header').removeClass('open');
                $('.header_hamburger p').text('Menu').css('opacity', 1); // テキスト変更後にフェードイン
            });
            // ロゴのフェードアウト
            $('.hdr_logo img').css({
                opacity: 0,
                visibility: 'hidden'
            });
        } else {
            $('.header_hamburger p').css('opacity', 0); // 文字をフェードアウト
            $('#header').addClass('open');
            $('.header_menu').css('display', 'block').hide().fadeIn(300, function() { // 0.3秒かけてフェードイン
                $('.header_hamburger p').text('Close').css('opacity', 1); // テキスト変更後にフェードイン
            });
            // ロゴのフェードイン
            $('.hdr_logo svg path').css({
                opacity: 1,
                visibility: 'visible'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const headerLinks = document.querySelectorAll(".hdr_nav-itm a");
    const logoImg = document.querySelector(".hdr_logo img");
    const hamburger = document.getElementById("js-hamburger");
    const hamburgerLines = hamburger.querySelectorAll("span");
    const hamburgerText = hamburger.querySelector("p");

    function updateHeaderStyle() {
        if (window.scrollY > 750 && !hamburger.classList.contains("open")) {
            // スクロール時のスタイル
            header.classList.add("scrolled");
            headerLinks.forEach(link => link.style.color = "#3A3A3A");
            if (logoImg) {
                logoImg.style.display = "block";  // ロゴを表示
                logoImg.style.filter = "invert(1)";
            }
            hamburgerLines.forEach(line => line.style.backgroundColor = "#3A3A3A");
            if (hamburgerText) hamburgerText.style.color = "#3A3A3A";
        } else if (!hamburger.classList.contains("open")) {
            // デフォルトのスタイル
            header.classList.remove("scrolled");
            headerLinks.forEach(link => link.style.color = "#FFF");
            if (logoImg) {
                logoImg.style.display = "none";  // ロゴを非表示
                logoImg.style.filter = "invert(0)";
            }
            hamburgerLines.forEach(line => line.style.backgroundColor = "#FFF");
            if (hamburgerText) hamburgerText.style.color = "#FFF";
        }
    }

    window.addEventListener("scroll", updateHeaderStyle);

    hamburger.addEventListener("click", function () {
        this.classList.toggle("open");

        if (this.classList.contains("open")) {
            // ハンバーガーメニューが開いたらロゴを表示
            if (logoImg) logoImg.style.display = "block";
            headerLinks.forEach(link => link.style.color = "#FFF");
            if (hamburgerText) hamburgerText.style.color = "#FFF";
            hamburgerLines.forEach(line => line.style.backgroundColor = "#FFF");
        } else {
            // メニューを閉じたら、スクロール状態に応じた色に戻す
            updateHeaderStyle();
        }
    });
});

// スクロールでヘッダーの色が変わる
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const headerLinks = document.querySelectorAll(".hdr_nav-itm a");
    const logoImg = document.querySelector(".hdr_logo img");
    const hamburger = document.getElementById("js-hamburger");
    const hamburgerLines = hamburger.querySelectorAll("span");
    const hamburgerText = hamburger.querySelector("p");

    function updateHeaderStyle() {
        if (window.scrollY > 750 && !hamburger.classList.contains("open")) {
            // スクロール時のスタイル（暗くする）
            header.classList.add("scrolled");
            headerLinks.forEach(link => link.style.color = "#3A3A3A");
            if (logoImg) logoImg.style.filter = "invert(1)";
            hamburgerLines.forEach(line => line.style.backgroundColor = "#3A3A3A");
            if (hamburgerText) hamburgerText.style.color = "#3A3A3A";
        } else {
            // デフォルトのスタイル（白）
            header.classList.remove("scrolled");
            headerLinks.forEach(link => link.style.color = "#FFF");
            if (logoImg) logoImg.style.filter = "invert(0)";
            hamburgerLines.forEach(line => line.style.backgroundColor = "#FFF");
            if (hamburgerText) hamburgerText.style.color = "#FFF";
        }
    }

    window.addEventListener("scroll", updateHeaderStyle);

    hamburger.addEventListener("click", function () {
        this.classList.toggle("open");

        if (this.classList.contains("open")) {
            // ハンバーガーメニューが開いたら文字色を白に強制変更
            headerLinks.forEach(link => link.style.color = "#FFF");
            if (hamburgerText) hamburgerText.style.color = "#FFF";
            hamburgerLines.forEach(line => line.style.backgroundColor = "#FFF");
        } else {
            // メニューを閉じたら、スクロール状態に応じた色に戻す
            updateHeaderStyle();
        }
    });
});
document.querySelector(".header_hamburger").addEventListener("click", function () {
    this.classList.toggle("open");

    const logoImg = document.querySelector(".header_logo img");
    const headerLinks = document.querySelectorAll(".header_nav a");
    const hamburgerText = document.querySelector(".header_hamburger span");
    const hamburgerLines = document.querySelectorAll(".header_hamburger span");

    if (this.classList.contains("open")) {
        // ハンバーガーメニューが開いたらロゴを表示
        if (logoImg) logoImg.style.display = "block";

        // リンクの文字色を白に変更
        headerLinks.forEach(link => link.style.color = "#FFF");

        // ハンバーガーアイコンのテキスト色を白に変更
        if (hamburgerText) hamburgerText.style.color = "#FFF";

        // ハンバーガーボタン内の線を白くする
        hamburgerLines.forEach(line => line.style.backgroundColor = "#FFF");

    } else {
        // メニューを閉じたら、スクロール状態に応じた色に戻す
        updateHeaderStyle();
    }
});



// メインビジュアルの写真切り替えのアニメーション
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "assets/images/home/mv_photo-pc@2x.jpg",
        "assets/images/home/mv_photo-pc2@2x.jpg",
        "assets/images/home/mv_photo-pc3@2x.jpg"
    ];

    let currentIndex = 0;
    const app = new PIXI.Application({
        view: document.getElementById("pixiCanvas"),
        width: 1920,
        height: 1080,
    });

    let sprites = [];
    let displacementSprite = PIXI.Sprite.from("assets/images/common/displacement-water.jpg");
    let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    displacementFilter.scale.x = 0;
    displacementFilter.scale.y = 0;
    app.stage.addChild(displacementSprite);

    images.forEach((image, index) => {
        let sprite = PIXI.Sprite.from(image);
        sprite.width = app.screen.width;
        sprite.height = app.screen.height;
        sprite.alpha = index === 0 ? 1 : 0;
        sprite.filters = [displacementFilter];
        sprites.push(sprite);
        app.stage.addChild(sprite);
    });

    // 黒いオーバーレイ用のdivを取得
    const overlay = document.getElementById("blackOverlay");

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % images.length;
        let currentSprite = sprites[currentIndex];
        let nextSprite = sprites[nextIndex];

        // 1. 黒画面をフェードインしながら歪みを最大化
        gsap.to(overlay, { opacity: 1, duration: 0.9, ease: "power2.out" });
        gsap.to(displacementFilter.scale, { x: 190, y: 190, duration: 0.9, ease: "power2.out" });

        setTimeout(() => {
            // 2. 画像を切り替える
            currentSprite.alpha = 0;
            nextSprite.alpha = 1;
            currentIndex = nextIndex;

            // 3. 黒画面をフェードアウトしながら歪みを戻す
            gsap.to(overlay, { opacity: 0, duration: 0.9, ease: "power2.out" });
            gsap.to(displacementFilter.scale, { x: 0, y: 0, duration: 0.9, ease: "power2.out" });
        }, 400); // 黒画面が最大になったタイミングで画像切り替え
    }

    setInterval(nextSlide, 5000);
});


// メインビジュアルテキストフェードインアニメーション
function BlurTextAnimeControl() {
    $('.slideConts').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('slideText');
        }else{
        $(this).removeClass('slideText');
        }
        });
    }
    $(window).on('load', function(){
    BlurTextAnimeControl();
  });


//  メインビジュアル左側スライダーアニメーション
document.addEventListener("DOMContentLoaded", function () {
    var $progress = document.querySelector('.slider-progress .progress');
    var progressDuration = 5000; // プログレスバーが伸びる時間（5秒）

    function startProgress() {
        // プログレスバーをリセット
        $progress.style.transition = "none";
        $progress.style.height = "0%";

        // 短い遅延を入れてからアニメーション開始
        setTimeout(() => {
            $progress.style.transition = `height ${progressDuration / 1000}s linear`;
            $progress.style.height = "100%";
        }, 50);
    }

    // ループ処理（一定時間ごとに実行）
    setInterval(startProgress, progressDuration);
    
    // 初回実行
    startProgress();
});

// メインビジュアル右側のアニメーション
$(document).ready(function() {
    var totalSlides = 3; // 総スライド数
    var currentSlide = 0; // 現在のスライド番号

    // スライドが切り替わるごとにカウントとラインを更新
    function updateCounter() {
        var newSlideNumber = (currentSlide % totalSlides) + 1; // 1, 2, 3の順で表示
        var newNumber = newSlideNumber < 10 ? "0" + newSlideNumber : newSlideNumber; // 1桁の場合にゼロ埋め

        // 数字のアニメーション
        var currentNumber = $('.slider-counter .current');
        currentNumber.fadeOut(200, function() {
            $(this).text(newNumber).fadeIn(200);  // 新しいスライド番号を表示
        });

        // 縦線のアニメーション
        $('.line').css('background-color', 'rgba(255, 255, 255, 0.3)');  // すべてのラインをリセット
        $('#line-' + newSlideNumber).css('background-color', 'white');  // 対応するラインを白に
    }

    // スライドをループする関数
    function startLoop() {
        setInterval(function() {
            currentSlide = (currentSlide + 1) % totalSlides; // 次のスライドに切り替え
            updateCounter();
        }, 5000); // 3秒ごとに切り替え
    }

    // ループ開始
    startLoop();
});

// メインビジュアル右側のラインアニメーション
document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll(".line");

    // 最初の線 (#line-1) を白くする
    lines[0].style.backgroundColor = "white";

    // 5秒後に通常のスライダー動作に戻る
    setTimeout(() => {
        lines[0].style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // 元の色に戻す
    }, 5000); // 5秒（5000ms）
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",  // 表示するカードの数を自動に
        spaceBetween: 20,  // カード間の間隔
        centeredSlides: false,  // 左寄せ
        loop: false,
        freeMode: false,  // スクロール自由
        watchOverflow: true, // ★これを追加
        slidesOffsetBefore: 20, // 左端の余白
        slidesOffsetAfter: 20,  // 右端の余白
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            type: "custom",  // カスタムナビゲーション
        },
        scrollbar: {
            el: ".swiper-scrollbar",  // スクロールバーの要素
            hide: false,  // スクロールバーを非表示にしない
            draggable: true,  // ドラッグ可能にする
        },
        pagination: {
            el: ".swiper-pagination",
            type: "custom",  // カスタムページネーション
            renderCustom: function (swiper, current, total) {
                return `<span class="current-slide">${("0" + current).slice(-2)}</span>`;  // 現在のスライド番号
            },
        },
    });
});




$(document).ready(function() {
    // トップに戻るボタン
    let pagetop = $('.to-top');
    pagetop.hide();
  
    // スクロールイベント
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
  
    // ページトップに戻る
    pagetop.click(function() {
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });
  
    // スムーススクロール(ページのハッシュリンクでスクロール)
    let pageHash = window.location.hash;
    if (pageHash) {
        let scrollToElement = $('[data-id="' + pageHash + '"]');
        if (!scrollToElement.length) return;
        
        let locationOffset = scrollToElement.offset().top;
        let navigationBarHeight = $('#header').innerHeight();
        locationOffset = locationOffset - navigationBarHeight - 40; // ここでヘッダーの高さを調整
        $('html, body').animate({
            scrollTop: locationOffset
        }, 600, 'swing');
    }
  
    // ページ内リンクでスムーススクロール
    $('a[href^="#"]').click(function() {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - 40;
        $("html, body").animate({scrollTop: position}, 600, "swing");
        return false;
    });
  });


    gsap.registerPlugin(ScrollTrigger);

    let ticketButton = document.querySelector('.ticket_offer');

    let mm = gsap.matchMedia(); // メディアクエリ管理用のGSAP関数

    mm.add("(min-width: 767px)", () => {
        // PC用（767px以上）の設定
        ScrollTrigger.create({
        trigger: document.body,
        start: "top+=300px",
        onEnter: () => {
            ticketButton.classList.add('mini');
            gsap.to(ticketButton, {
            x: "50%",  // PCでは50%
            duration: 0.8,
            ease: "power2.out"
            });
        },
        onLeaveBack: () => {
            ticketButton.classList.remove('mini');
            gsap.to(ticketButton, {
            x: "0%",
            duration: 0.8,
            ease: "power2.out"
            });
        }
        });
    });

    mm.add("(max-width: 766px)", () => {
        // スマホ用（766px以下）の設定
        ScrollTrigger.create({
        trigger: document.body,
        start: "top+=300px",
        onEnter: () => {
            ticketButton.classList.add('mini');
            gsap.to(ticketButton, {
            x: "58%",  // スマホでは80%
            duration: 0.8,
            ease: "power2.out"
            });
        },
        onLeaveBack: () => {
            ticketButton.classList.remove('mini');
            gsap.to(ticketButton, {
            x: "0%",
            duration: 0.8,
            ease: "power2.out"
            });
        }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const ticketOffer = document.querySelector('.ticket_offer');
        const footer = document.querySelector('#footer');
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              ticketOffer.style.display = 'none'; // フッターにかかったら非表示
            } else {
              ticketOffer.style.display = 'block'; // フッターから離れたら表示
            }
          });
        }, {
          root: null,
          threshold: 0, // 0でフッターがちょっとでも見えたら反応
        });
    
        observer.observe(footer);
      });
