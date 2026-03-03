$(function(){
  //スクロール時の処理
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 600) {
      $(".concept-logo img").addClass("show");
    } else {
      // 600px以上スクロールで表示
      $(".concept-logo img").removeClass("show");
    }
  });
});

