$(document).ready(function(){
  let a_1 = 0;
  let a_2 = 0;
  let a_3 = 0;
  let a_4 = 0;
  let a_5 = 0;
  let a_6 = 0;
  let a_7 = 0;
  let a_8 = 0;
  let a_9 = 0;
  let a_10 = 0;

  let b_1;
  let b_2;
  let b_3;
  let b_4;
  let b_5;
  let b_6;
  let b_7;
  let b_8;
  let b_9;
  let b_10;

  let c_1 = 0;
  let c_2 = 0;
  let c_3 = 0;
  let c_4 = 0;
  let c_5 = 0;
  let c_6 = 0;
  let c_7 = 0;
  let c_8 = 0;
  let c_9 = 0;
  let c_10 = 0;
  $(".strelka2, .photo_right").click(function(){
    if ($(this).siblings('.photo_block').hasClass("photo_block1")) {
      a_1 += 16.667;
      b_1 = a_1+"%";
      $(".photo_block1").css("background-position", b_1);
      c_1 += 1;
      if (c_1 == 1) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_1 == 2) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_1 == 3) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_1 == 4) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_1 == 5) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_1 == 6) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_1 > 6) {
        c_1 = 0;
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(0)').addClass("opacity");

      }


      console.log(c_1);
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block2")) {
      a_2 += 20;
      b_2 = a_2+"%";
      $(".photo_block2").css("background-position", b_2);
      c_2 += 1;
      if (c_2 == 1) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_2 == 2) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_2 == 3) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_2 == 4) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_2 == 5) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_2 > 5) {
        c_2 = 0;
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block3")) {
      a_3 += 16.667;
      b_3 = a_3+"%";
      $(".photo_block3").css("background-position", b_3);
      c_3 += 1;
      if (c_3 == 1) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_3 == 2) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_3 == 3) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_3 == 4) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_3 == 5) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_3 == 6) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_3 > 6) {
        c_3 = 0;
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block4")) {
      a_4 += 100;
      b_4 = a_4+"%";
      $(".photo_block4").css("background-position", b_4);
      c_4 += 1;
      if (c_4 == 1) {
        $(".under_photo4").children().removeClass("opacity");
        $(".under_photo4").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_4 > 1) {
        c_4 = 0;
        $(".under_photo4").children().removeClass("opacity");
        $(".under_photo4").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block5")) {
      a_5 += 20;
      b_5 = a_5+"%";
      $(".photo_block5").css("background-position", b_5);
      c_5 += 1;
      if (c_5 == 1) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_5 == 2) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_5 == 3) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_5 == 4) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_5 == 5) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_5 > 5) {
        c_5 = 0;
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block6")) {
      a_6 += 33.333;
      b_6 = a_6+"%";
      $(".photo_block6").css("background-position", b_6);
      c_6 += 1;
      if (c_6 == 1) {
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_6 == 2) {
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_6 == 3) {
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_6 > 3) {
        c_6 = 0;
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block7")) {
      a_7 += 14.286;
      b_7 = a_7+"%";
      $(".photo_block7").css("background-position", b_7);
      c_7 += 1;
      if (c_7 == 1) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_7 == 2) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_7 == 3) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_7 == 4) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_7 == 5) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_7 == 6) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_7 == 7) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(7)').addClass("opacity");
      } else if (c_7 > 7) {
        c_7 = 0;
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block8")) {
      a_8 += 11.111;
      b_8 = a_8+"%";
      $(".photo_block8").css("background-position", b_8);
      c_8 += 1;
      if (c_8 == 1) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_8 == 2) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_8 == 3) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_8 == 4) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_8 == 5) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_8 == 6) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_8 == 7) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(7)').addClass("opacity");
      } else if (c_8 == 8) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(8)').addClass("opacity");
      } else if (c_8 == 9) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(9)').addClass("opacity");
      } else if (c_8 > 9) {
        c_8 = 0;
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block9")) {
      a_9 += 50;
      b_9 = a_9+"%";
      $(".photo_block9").css("background-position", b_9);
      c_9 += 1;
      if (c_9 == 1) {
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_9 == 2) {
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_9 > 2) {
        c_9 = 0;
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block10")) {
      a_10 += 50;
      b_10 = a_10+"%";
      $(".photo_block10").css("background-position", b_10);
      c_10 += 1;
      if (c_10 == 1) {
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_10 == 2) {
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_10 > 2) {
        c_10 = 0;
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(0)').addClass("opacity");

      }
    }

  })
  $(".strelka1, .photo_left").click(function(){
    if ($(this).siblings('.photo_block').hasClass("photo_block1")) {
      a_1 -= 16.667;
      b_1 = a_1+"%";
      $(".photo_block1").css("background-position", b_1);
      c_1 -= 1;
      if (c_1 == 1) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_1 == 2) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_1 == 3) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_1 == 4) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_1 == 5) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_1 == 6) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_1 > 6) {
        c_1 = 0;
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_1 == 0) {
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_1 == -1) {
        c_1 = 6;
        $(".under_photo1").children().removeClass("opacity");
        $(".under_photo1").children('.gallery_photo:eq(6)').addClass("opacity");
      }
      console.log(c_1);
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block2")) {
      a_2 -= 20;
      b_2 = a_2+"%";
      $(".photo_block2").css("background-position", b_2);
      c_2 -= 1;
      if (c_2 == 1) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_2 == 2) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_2 == 3) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_2 == 4) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_2 == 5) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_2 > 5) {
        c_2 = 0;
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_2 == 0) {
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_2 == -1) {
        c_2 = 5;
        $(".under_photo2").children().removeClass("opacity");
        $(".under_photo2").children('.gallery_photo:eq(5)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block3")) {
      a_3 -= 16.667;
      b_3 = a_3+"%";
      $(".photo_block3").css("background-position", b_3);
      c_3 -= 1;
      if (c_3 == 1) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_3 == 2) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_3 == 3) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_3 == 4) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_3 == 5) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_3 == 6) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_3 > 6) {
        c_3 = 0;
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_3 == 0) {
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_3 == -1) {
        c_3 = 6;
        $(".under_photo3").children().removeClass("opacity");
        $(".under_photo3").children('.gallery_photo:eq(6)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block4")) {
      a_4 -= 100;
      b_4 = a_4+"%";
      $(".photo_block4").css("background-position", b_4);
      c_4 -= 1;
      if (c_4 == 1) {
        $(".under_photo4").children().removeClass("opacity");
        $(".under_photo4").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_4 > 1) {
        c_4 = 0;
        $(".under_photo4").children().removeClass("opacity");
        $(".under_photo4").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_4 == 0) {
        $(".under_photo4").children().removeClass("opacity");
        $(".under_photo4").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_4 == -1) {
        c_4 = 1;
        $(".under_photo4").children().removeClass("opacity");
        $(".under_photo4").children('.gallery_photo:eq(1)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block5")) {
      a_5 -= 20;
      b_5 = a_5+"%";
      $(".photo_block5").css("background-position", b_5);
      c_5 -= 1;
      if (c_5 == 1) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_5 == 2) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_5 == 3) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_5 == 4) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_5 == 5) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_5 > 5) {
        c_5 = 0;
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_5 == 0) {
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_5 == -1) {
        c_5 = 5;
        $(".under_photo5").children().removeClass("opacity");
        $(".under_photo5").children('.gallery_photo:eq(5)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block6")) {
      a_6 -= 33.333;
      b_6 = a_6+"%";
      $(".photo_block6").css("background-position", b_6);
      c_6 -= 1;
      if (c_6 == 1) {
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_6 == 2) {
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_6 == 3) {
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_6 > 3) {
        c_6 = 0;
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_6 == 0) {
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_6 == -1) {
        c_6 = 3;
        $(".under_photo6").children().removeClass("opacity");
        $(".under_photo6").children('.gallery_photo:eq(3)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block7")) {
      a_7 -= 14.286;
      b_7 = a_7+"%";
      $(".photo_block7").css("background-position", b_7);
      c_7 -= 1;
      if (c_7 == 1) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_7 == 2) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_7 == 3) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_7 == 4) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_7 == 5) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_7 == 6) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_7 == 7) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(7)').addClass("opacity");
      } else if (c_7 > 7) {
        c_7 = 0;
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_7 == 0) {
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_7 == -1) {
        c_7 = 7;
        $(".under_photo7").children().removeClass("opacity");
        $(".under_photo7").children('.gallery_photo:eq(7)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block8")) {
      a_8 -= 11.111;
      b_8 = a_8+"%";
      $(".photo_block8").css("background-position", b_8);
      c_8 -= 1;
      if (c_8 == 1) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_8 == 2) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_8 == 3) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(3)').addClass("opacity");
      } else if (c_8 == 4) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(4)').addClass("opacity");
      } else if (c_8 == 5) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(5)').addClass("opacity");
      } else if (c_8 == 6) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(6)').addClass("opacity");
      } else if (c_8 == 7) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(7)').addClass("opacity");
      } else if (c_8 == 8) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(8)').addClass("opacity");
      } else if (c_8 == 9) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(9)').addClass("opacity");
      } else if (c_8 > 9) {
        c_8 = 0;
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_8 == 0) {
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_8 == -1) {
        c_8 = 9;
        $(".under_photo8").children().removeClass("opacity");
        $(".under_photo8").children('.gallery_photo:eq(9)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block9")) {
      a_9 -= 50;
      b_9 = a_9+"%";
      $(".photo_block9").css("background-position", b_9);
      c_9 -= 1;
      if (c_9 == 1) {
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_9 == 2) {
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_9 > 2) {
        c_9 = 0;
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_9 == 0) {
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_9 == -1) {
        c_9 = 2;
        $(".under_photo9").children().removeClass("opacity");
        $(".under_photo9").children('.gallery_photo:eq(2)').addClass("opacity");
      }
    }
    if ($(this).siblings('.photo_block').hasClass("photo_block10")) {
      a_10 -= 50;
      b_10 = a_10+"%";
      $(".photo_block10").css("background-position", b_10);
      c_10 -= 1;
      if (c_10 == 1) {
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(1)').addClass("opacity");
      } else if (c_10 == 2) {
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(2)').addClass("opacity");
      } else if (c_10 > 2) {
        c_10 = 0;
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(0)').addClass("opacity");

      } else if (c_10 == 0) {
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(0)').addClass("opacity");
      } else if (c_10 == -1) {
        c_10 = 2;
        $(".under_photo10").children().removeClass("opacity");
        $(".under_photo10").children('.gallery_photo:eq(2)').addClass("opacity");
      }
    }

  })

  $(".photo1").click(function(){
    if ($(this).parent().hasClass("under_photo1")) {
      $(".under_photo1").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_1 = 0;
      console.log(c_1);
      a_1 = 0;
      b_1 = a_1+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block1").css("background-position", b_1);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo2")) {
      $(".under_photo2").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_2 = 0;
      console.log(c_2);
      a_2 = 0;
      b_2 = a_2+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block2").css("background-position", b_2);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo3")) {
      $(".under_photo3").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_3 = 0;
      console.log(c_3);
      a_3 = 0;
      b_3 = a_3+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block3").css("background-position", b_3);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo4")) {
      $(".under_photo4").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_4 = 0;
      console.log(c_4);
      a_4 = 0;
      b_4 = a_4+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block4").css("background-position", b_4);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo5")) {
      $(".under_photo5").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_5 = 0;
      console.log(c_5);
      a_5 = 0;
      b_5 = a_5+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block5").css("background-position", b_5);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo6")) {
      $(".under_photo6").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_6 = 0;
      console.log(c_6);
      a_6 = 0;
      b_6 = a_6+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block6").css("background-position", b_6);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 0;
      console.log(c_7);
      a_7 = 0;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 0;
      console.log(c_8);
      a_8 = 0;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo9")) {
      $(".under_photo9").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_9 = 0;
      console.log(c_9);
      a_9 = 0;
      b_9 = a_9+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block9").css("background-position", b_9);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo10")) {
      $(".under_photo10").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_10 = 0;
      console.log(c_10);
      a_10 = 0;
      b_10 = a_10+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block10").css("background-position", b_10);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo2").click(function(){
    if ($(this).parent().hasClass("under_photo1")) {
      $(".under_photo1").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_1 = 1;
      console.log(c_1);
      a_1 = 16.667;
      b_1 = a_1+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block1").css("background-position", b_1);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo2")) {
      $(".under_photo2").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_2 = 1;
      console.log(c_2);
      a_2 = 20;
      b_2 = a_2+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block2").css("background-position", b_2);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo3")) {
      $(".under_photo3").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_3 = 1;
      console.log(c_3);
      a_3 = 16.667;
      b_3 = a_3+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block3").css("background-position", b_3);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo4")) {
      $(".under_photo4").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_4 = 1;
      console.log(c_4);
      a_4 = 100;
      b_4 = a_4+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block4").css("background-position", b_4);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo5")) {
      $(".under_photo5").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_5 = 1;
      console.log(c_5);
      a_5 = 20;
      b_5 = a_5+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block5").css("background-position", b_5);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo6")) {
      $(".under_photo6").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_6 = 1;
      console.log(c_6);
      a_6 = 33.333;
      b_6 = a_6+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block6").css("background-position", b_6);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 1;
      console.log(c_7);
      a_7 = 14.286;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 1;
      console.log(c_8);
      a_8 = 11.111;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo9")) {
      $(".under_photo9").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_9 = 1;
      console.log(c_9);
      a_9 = 50;
      b_9 = a_9+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block9").css("background-position", b_9);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo10")) {
      $(".under_photo10").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_10 = 1;
      console.log(c_10);
      a_10 = 50;
      b_10 = a_10+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block10").css("background-position", b_10);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo3").click(function(){
    if ($(this).parent().hasClass("under_photo1")) {
      $(".under_photo1").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_1 = 2;
      console.log(c_1);
      a_1 = 33.334;
      b_1 = a_1+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block1").css("background-position", b_1);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo2")) {
      $(".under_photo2").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_2 = 2;
      console.log(c_2);
      a_2 = 40;
      b_2 = a_2+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block2").css("background-position", b_2);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo3")) {
      $(".under_photo3").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_3 = 2;
      console.log(c_3);
      a_3 = 33.334;
      b_3 = a_3+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block3").css("background-position", b_3);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo5")) {
      $(".under_photo5").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_5 = 2;
      console.log(c_5);
      a_5 = 40;
      b_5 = a_5+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block5").css("background-position", b_5);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo6")) {
      $(".under_photo6").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_6 = 2;
      console.log(c_6);
      a_6 = 66.666;
      b_6 = a_6+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block6").css("background-position", b_6);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 2;
      console.log(c_7);
      a_7 = 28.572;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 2;
      console.log(c_8);
      a_8 = 22.222;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo9")) {
      $(".under_photo9").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_9 = 2;
      console.log(c_9);
      a_9 = 100;
      b_9 = a_9+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block9").css("background-position", b_9);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo10")) {
      $(".under_photo10").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_10 = 2;
      console.log(c_10);
      a_10 = 100;
      b_10 = a_10+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block10").css("background-position", b_10);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo4").click(function(){
    if ($(this).parent().hasClass("under_photo1")) {
      $(".under_photo1").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_1 = 3;
      console.log(c_1);
      a_1 = 50.001;
      b_1 = a_1+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block1").css("background-position", b_1);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo2")) {
      $(".under_photo2").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_2 = 3;
      console.log(c_2);
      a_2 = 60;
      b_2 = a_2+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block2").css("background-position", b_2);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo3")) {
      $(".under_photo3").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_3 = 3;
      console.log(c_3);
      a_3 = 50.001;
      b_3 = a_3+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block3").css("background-position", b_3);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo5")) {
      $(".under_photo5").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_5 = 3;
      console.log(c_5);
      a_5 = 60;
      b_5 = a_5+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block5").css("background-position", b_5);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo6")) {
      $(".under_photo6").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_6 = 3;
      console.log(c_6);
      a_6 = 100;
      b_6 = a_6+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block6").css("background-position", b_6);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 3;
      console.log(c_7);
      a_7 = 42.858;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 3;
      console.log(c_8);
      a_8 = 33.333;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }

  })

  $(".photo5").click(function(){
    if ($(this).parent().hasClass("under_photo1")) {
      $(".under_photo1").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_1 = 4;
      console.log(c_1);
      a_1 = 66.668;
      b_1 = a_1+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block1").css("background-position", b_1);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo2")) {
      $(".under_photo2").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_2 = 4;
      console.log(c_2);
      a_2 = 80;
      b_2 = a_2+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block2").css("background-position", b_2);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo3")) {
      $(".under_photo3").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_3 = 4;
      console.log(c_3);
      a_3 = 66.668;
      b_3 = a_3+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block3").css("background-position", b_3);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo5")) {
      $(".under_photo5").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_5 = 4;
      console.log(c_5);
      a_5 = 80;
      b_5 = a_5+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block5").css("background-position", b_5);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 4;
      console.log(c_7);
      a_7 = 57.144;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 4;
      console.log(c_8);
      a_8 = 44.444;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo6").click(function(){
    if ($(this).parent().hasClass("under_photo1")) {
      $(".under_photo1").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_1 = 5;
      console.log(c_1);
      a_1 = 83.335;
      b_1 = a_1+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block1").css("background-position", b_1);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo2")) {
      $(".under_photo2").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_2 = 5;
      console.log(c_2);
      a_2 = 100;
      b_2 = a_2+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block2").css("background-position", b_2);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo3")) {
      $(".under_photo3").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_3 = 5;
      console.log(c_3);
      a_3 = 83.335;
      b_3 = a_3+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block3").css("background-position", b_3);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo5")) {
      $(".under_photo5").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_5 = 5;
      console.log(c_5);
      a_5 = 100;
      b_5 = a_5+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block5").css("background-position", b_5);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 5;
      console.log(c_7);
      a_7 = 71.43;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 5;
      console.log(c_8);
      a_8 = 55.555;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo7").click(function(){
    if ($(this).parent().hasClass("under_photo1")) {
      $(".under_photo1").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_1 = 6;
      console.log(c_1);
      a_1 = 100.002;
      b_1 = a_1+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block1").css("background-position", b_1);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo3")) {
      $(".under_photo3").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_3 = 6;
      console.log(c_3);
      a_3 = 100.002;
      b_3 = a_3+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block3").css("background-position", b_3);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 6;
      console.log(c_7);
      a_7 = 85.716;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 6;
      console.log(c_8);
      a_8 = 66.666;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo8").click(function(){
    if ($(this).parent().hasClass("under_photo7")) {
      $(".under_photo7").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_7 = 7;
      console.log(c_7);
      a_7 = 100.002;
      b_7 = a_7+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block7").css("background-position", b_7);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    } else if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 7;
      console.log(c_8);
      a_8 = 77.777;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo9").click(function(){
    if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 8;
      console.log(c_8);
      a_8 = 88.888;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })

  $(".photo10").click(function(){
    if ($(this).parent().hasClass("under_photo8")) {
      $(".under_photo8").children().removeClass("opacity");
      $(this).addClass("opacity");
      c_8 = 9;
      console.log(c_8);
      a_8 = 100;
      b_8 = a_8+"%";
      tr = 'all 0s';
      $(".photo_block").css("transition", tr);
      $(".photo_block8").css("background-position", b_8);
      tr = 'all 2s';
      setTimeout(function(){
        $(".photo_block").css("transition", tr);
      }, 20);
    }
  })



});
