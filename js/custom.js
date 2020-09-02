$(document).ready(function () {

  $('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);
  });

  // Menu active 

  $('.navbar-nav .nav-item .nav-link').click(function () {

    $('.nav-item .nav-link').removeClass("menu-active");
    $(this).addClass("menu-active");

  });

  $('.pagination .page-item .page-link').click(function () {

    $('.page-item .page-link').removeClass("pagination-active");
    $(this).addClass("pagination-active");

  });



  // Menu active 

  // Collapse 
  $('.navbar-nav .nav-item .nav-link').click(function () {
    if ($(this).attr('name') == "menubtn") {
      //store the id of the collapsible element
      localStorage.setItem('collapseItem', $(this).attr('href'));
    };
  });
  var collapseItem = localStorage.getItem('collapseItem');

  if (collapseItem) {
    $(collapseItem).collapse('show')
  }

  // Collapse 


  // Search show hide 
  // $('.search-show').mouse(function () {
  //   $('.search-box').css("display", "block");
  // });
  $('.search-show').click(function () {
    $('.search-show').css('display', 'none');
    $('.search-box').css("display", "block");
    $('.search-hide').css("display", "block");
  });
  $('.search-hide').click(function () {
    $('.search-hide').css('display', 'none');
    $('.search-box').css("display", "none");
    $('.search-show').css("display", "block");
  });

  // $(".search-show").mouseover(function () {
  //   $('.search-box').css('transition', '0.4s linear');
  //   $(".search-box").css("display", "block");
  // });

  // $(".search-show").focus(function () {
  //   $(".search-box").css("display", "block");
  // });

  // $(".search-show").mouseleave(function () {
  //   $('.search-box').css('transition', '0.4s linear');
  //   $(".search-box").css("display", "none");
  // });
  // Search show hide 



  // var Size = $(window).width();

  //   while (Size <= 768) {
  //     var maxLength = 300;
  //     $(".show-read-more").each(function () {
  //       var myStr = $(this).text();
  //       if ($.trim(myStr).length > maxLength) {
  //         var newStr = myStr.substring(0, maxLength);
  //         var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
  //         $(this).empty().html(newStr);
  //         $(this).append("<br/>");
  //         $(this).append(
  //           '<a href="javascript:void(0);" class="read-more">Read More</a>'
  //         );
  //         $(this).append('<span class="more-text">' + removedStr + "</span>");
  //       }
  //     });
  //     $(".read-more").click(function () {
  //       $(this).siblings(".more-text").contents().unwrap();
  //       $(this).remove();
  //     });
  //   }

  // $(window).scroll(function () {
  //   if ($(document).scrollTop() >= 50) {
  //     $(".header-menu").addClass("navbar-fixed");
  //   } else {
  //     $(".header-menu").removeClass("navbar-fixed");
  //   }
  // });

  // Check Width
  //   function checkWidth() {
  //     var windowSize = $(window).width();
  //     if (windowSize <= 768) {
  //       var maxLength = 300;
  //       $(".show-read-more").each(function () {
  //         var myStr = $(this).text();
  //         if ($.trim(myStr).length > maxLength) {
  //           var newStr = myStr.substring(0, maxLength);
  //           var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
  //           $(this).empty().html(newStr);
  //           $(this).append("<br/>");
  //           $(this).append(
  //             '<a href="javascript:void(0);" class="read-more">Read More</a>'
  //           );
  //           $(this).append('<span class="more-text">' + removedStr + "</span>");
  //         }
  //       });
  //       $(".read-more").click(function () {
  //         $(this).siblings(".more-text").contents().unwrap();
  //         $(this).remove();
  //       });
  //     }
  //   }
  // open
  //   $(".open").click(function () {
  //     $(".open").css("display", "none");
  //     $(".close").css("display", "block");
  //     $(".toggle-logo").css("color", "transparent");
  //     $(".toggle-logo").bind("click", false);
  //   });

  //   $(".close").click(function () {
  //     $(".open").css("display", "block");
  //     $(".close").css("display", "none");
  //     $(".toggle-logo").css("color", "#c94f9b");
  //     $(".toggle-logo").unbind("click", false);
  //   });
  //   //close

  //   // Check Width
  // //   checkWidth();
  //   activePageLinkControl();
});

// function activePageLinkControl() {
//   $(".pagination .page-item a").click(function () {
//     $(".page-item").removeClass("active");
//     $(this).closest(".page-item").addClass("active");
//   });
// }

// function goBack() {
//   window.history.back();
// }

// number or not check//
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;
}
// number or not check//