(function ($) {
  "use strict";

  /* 1. Proloder */
  $(window).on("load", function () {
    $("#preloader-active").delay(650).fadeOut("slow");
    $("body").delay(650).css({
      overflow: "visible",
    });
  });

  /* 2. sticky And Scroll UP */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $("#back-top").fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $("#back-top").fadeIn(500);
    }
  });

  // Scroll Up
  $("#back-top a").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  /* 3. slick Nav */
  // mobile_menu
  var menu = $("ul#navigation");
  if (menu.length) {
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: "+",
      openedSymbol: "-",
    });
  }

  /* 4. MainSlider-1 */
  // h1-hero-active
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      fade: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  /* 5. Testimonial Active*/
  var testimonial = $(".h1-testimonial-active");
  if (testimonial.length) {
    testimonial.slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: false,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrow: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: false,
          },
        },
      ],
    });
  }

  /* 6. Nice Selectorp  */
  var nice_Select = $("select");
  if (nice_Select.length) {
    nice_Select.niceSelect();
  }

  /* 7. data-background */
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  /* 10. WOW active */
  new WOW().init();


  // 12 Pop Up Img
  var popUp = $(".single_gallery_part, .img-pop-up");
  if (popUp.length) {
    popUp.magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

})(jQuery);

/**********************************************Start Editing**********By Michael*********20-12-2021********************************* */

// Change Link Color Depending on Page Url ::
  let allLinks = document.querySelectorAll('.header-area .main-menu ul li a')
    allLinks.forEach( (link) => {
      if (link.href == document.location.href) {
        link.style.color = '#ff5600';
      }
    });

    //Create My Buttons Div ==> Which Contains the two buttoms [Add To Cart, Read More]
  let allBoxText = document.querySelectorAll(".box-text");
  allBoxText.forEach((box) => {
  let mybuttons = document.createElement("div");
  mybuttons.className = "mybuttons";
  box.appendChild(mybuttons);
});

// Create the two buttoms [Add To Cart, Read More]
let allMyButtons = document.querySelectorAll(".mybuttons");
allMyButtons.forEach((onediv) => {
  let span1Add = document.createElement("span");
  span1Add.className = 'add-cart';
  span1Add.classList.add('add');
  let span1Txt = document.createTextNode('أضف الي العربه');
  span1Add.appendChild(span1Txt);

  let span2Add = document.createElement('span');
  span2Add.className = 'add-cart'
  span2Add.classList.add('more');
  let span2Txt = document.createTextNode('المزيد');

  span2Add.appendChild(span2Txt);
  onediv.appendChild(span1Add);
  onediv.appendChild(span2Add);
});



//Create The Popup Overlay When Clicking on Read More Button :
  let allSpans = document.querySelectorAll(
    ".Food-menu .box .box-text .mybuttons .more"
  );

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    let titleOfFood =
      e.target.parentElement.parentElement.querySelector(
        ".name-price span"
      ).textContent;
    let titleOfDesc =
      e.target.parentElement.parentElement.querySelector(
        ".description span"
      ).textContent;
    let productImage =
      e.target.parentElement.parentElement.parentElement.querySelector(
        ".img img"
      );
    let productPrices = e.target.parentElement.parentElement.querySelector(
      ".prices-count .prices"
    );

    let theOverlay = document.createElement("div");
    theOverlay.classList.add('the-overlay', 'faded-out');
    requestAnimationFrame(() => {
      theOverlay.classList.remove("faded-out");
    });
    document.body.appendChild(theOverlay);

    let theTitleDiv = document.createElement("div");
    theTitleDiv.className = "the-title-div";

    let theDescriptionDiv = document.createElement("div");
    theDescriptionDiv.className = "the-desc-div";

    let theImagesDiv = document.createElement("div");
    theImagesDiv.className = "the-imgs-div";
    theOverlay.appendChild(theImagesDiv);

    let thePricesDiv = document.createElement("div");
    thePricesDiv.className = "the-prices-div";

    let addCartDiv = document.createElement("div");
    addCartDiv.className = "the-add-div";

    /****************************************** */

    let theTitleTxt = document.createTextNode(titleOfFood);
    theTitleDiv.appendChild(theTitleTxt);

    let theDescTxt = document.createTextNode(titleOfDesc);
    theDescriptionDiv.appendChild(theDescTxt);

    /*Create the cloning of image and prices*/
    console.log(productImage)
    let imgClone = productImage.cloneNode(true);
    let productClone = productPrices.cloneNode(true);
    theImagesDiv.appendChild(imgClone);
    thePricesDiv.appendChild(productClone);

    let addToCart = document.createElement("div");
    let addToCartText = document.createTextNode("أضف الي العربه");
    addToCart.className = "add-cart-ov";
    addToCart.appendChild(addToCartText);
    addCartDiv.appendChild(addToCart);

    let proceedCheckout = document.createElement("div");
    let proceedCheckoutTxt = document.createTextNode("متابعه الشراء");
    proceedCheckout.className = "add-cart-ov";
    proceedCheckout.classList.add('proceed')
    proceedCheckout.appendChild(proceedCheckoutTxt);
    addCartDiv.appendChild(proceedCheckout);

    let rightContent = document.createElement("div");
    rightContent.className = "right-content";
    rightContent.appendChild(theTitleDiv);
    rightContent.appendChild(theDescriptionDiv);
    rightContent.appendChild(thePricesDiv);
    rightContent.appendChild(addCartDiv);

    theOverlay.appendChild(rightContent);

    let closeButton = document.createElement("span");
    let closeTxt = document.createTextNode("x");
    closeButton.className = "close-button";
    closeButton.appendChild(closeTxt);
    theOverlay.appendChild(closeButton);

    let detailsH2 = document.createElement('h2');
    let detailsH2Txt = document.createTextNode('تفاصيل المنتج');
    detailsH2.appendChild(detailsH2Txt);
    detailsH2.className = 'details-header';
    rightContent.prepend(detailsH2);

    closeButton.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });   
});


//********** Add To Cart Functionality **********//

let NameArr = [];
let DescArr = [];
let ImgArr =  [];
let CountArr = [];
let PriceArr =  [];

let allAddButtons = document.querySelectorAll('.add-cart.add');
allAddButtons.forEach( (addbtn) => {
  addbtn.addEventListener('click', (e) =>{

    let input1 = e.target.parentElement.parentElement.querySelector('.prices input:first-of-type');
    let input2 = e.target.parentElement.parentElement.querySelector('.prices input:nth-of-type(2)');
    let input3 = e.target.parentElement.parentElement.querySelector('.prices input:last-of-type');

    if(e.target.parentElement.parentElement.querySelector('.create-count').value == ""){
      Swal.fire({
        icon: 'error',
        title: 'حدث خطأ ما...',
        text: 'برجاء تحديد كميه المنتج',
        footer: '<a href="">Why do I have this issue?</a>'
      });

    }else{
      if (input1.checked || input2.checked || input3.checked){

        let FoodName = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        let FoodImg = e.target.parentElement.parentElement.parentElement.querySelector('.img img').src;
        let FoodCount = e.target.parentElement.parentElement.querySelector('.create-count').value;
        let price_value = 0;
    
        let Small = e.target.parentElement.parentElement.querySelector('.prices-count .prices #small');
          if (Small.checked) {
            price_value = Small.value;
          };

    
        let Med =  e.target.parentElement.parentElement.querySelector('.prices-count .prices #meduim');
          if (Med.checked) {
            price_value = Med.value;
          };

    
        let Large =  e.target.parentElement.parentElement.querySelector('.prices-count .prices #large');
          if (Large.checked) {
            price_value = Large.value;
          };

    
        NameArr.push(FoodName);
        ImgArr.push(FoodImg);
        PriceArr.push(price_value);
        CountArr.push(FoodCount);

        
        if (window.localStorage.getItem("Name")) {
          let myName = window.localStorage.getItem("Name");
          let myNameNW = JSON.parse(myName);
          myNameNW.push(FoodName);
          window.localStorage.setItem("Name", JSON.stringify(myNameNW));

          let myImg = window.localStorage.getItem("Img");
          let myImgNW = JSON.parse(myImg);
          myImgNW.push(FoodImg);
          window.localStorage.setItem("Img", JSON.stringify(myImgNW));

          let myPrice = window.localStorage.getItem("Price");
          let myPriceNW = JSON.parse(myPrice);
          myPriceNW.push(price_value);
          window.localStorage.setItem("Price", JSON.stringify(myPriceNW));

          let myCount = window.localStorage.getItem("Count");
          let myCountNW = JSON.parse(myCount);
          myCountNW.push(FoodCount);
          window.localStorage.setItem("Count", JSON.stringify(myCountNW));
        } else {

        let NameArr2 = JSON.stringify(NameArr);
        let ImagArr2 = JSON.stringify(ImgArr);
        let PriceArr2 = JSON.stringify(PriceArr);
        let CountArr2 = JSON.stringify(CountArr);
    
        window.localStorage.setItem("Name", NameArr2);
        window.localStorage.setItem("Img", ImagArr2);
        window.localStorage.setItem("Price", PriceArr2);
        window.localStorage.setItem("Count", CountArr2);

        };
    


        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'تم اضافه هذا العنصر الي عربه التسوق',
          showConfirmButton: false,
          timer: 1500
        });

        FoodCount = e.target.parentElement.parentElement.querySelector('.create-count').value = "";
        input1.checked = false;
        input2.checked = false;
        input3.checked = false;

      }else{
        Swal.fire({
          icon: 'error',
          title: 'حدث خطأ ما...',
          text: 'برجاء اختيار حجم المنتج',
          footer: '<a href="">Why do I have this issue?</a>'
        });
      }; 
    };

  });
});