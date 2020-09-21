$(document).ready(function () {

  //Search 
  $('.search-btn').on('click', function () {
    $('.myinput').toggleClass('mytoggle').focus();
    $('.mysearch-box').css('background', '#fff');
  });

  $('.myinput').on('focusout', function () {
    $(this).removeClass('mytoggle');
    $('.mysearch-box').css('background', 'transparent');
  });

  //Search 
  // Product Detail Page 
  $('.color-choose input').on('click', function () {
    var headphonesColor = $(this).attr('data-image');

    $('.product-active').removeClass('product-active');
    $('.left-column img[data-image = ' + headphonesColor + ']').addClass('product-active');
    $(this).addClass('product-active');
  });
  // Product Detail Page 


  $('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);

  });



  // Menu active 

  $('.product-img').click(function () {
    $('.product-img').removeClass('product-small-img');
    $(this).addClass('product-small-img');
  });


  // $('.navbar-nav .nav-item .nav-link').click(function () {
  //   $('.nav-item .nav-link').removeClass("menu-active");
  //   $(this).addClass("menu-active");
  //   if ($(this).attr('name') == "menubtn") {
  //     //store the id of the collapsible element
  //     localStorage.setItem('collapseItem', $(this).attr('href'));
  //   };
  // });
  // var collapseItem = localStorage.getItem('collapseItem');
  // if (collapseItem) {
  //   $(collapseItem).collapse('show')
  // }

  $(".sidebar-menu .nav-item .nav-link").click(function () {
    var id = $(this).attr("id");

    $('#' + id).siblings().find(".menu-active").removeClass("menu-active");
    //                      
    $('#' + id).addClass("menu-active");
    localStorage.setItem("selectedolditem", id);
    if ($(this).attr('name') == "menubtn") {
      //store the id of the collapsible element
      localStorage.setItem('collapseItem', $(this).attr('href'));
    };
  });

  var selectedolditem = localStorage.getItem('selectedolditem');
  var collapseItem = localStorage.getItem('collapseItem');
  if (collapseItem) {
    $(collapseItem).collapse('show')
  }

  if (selectedolditem != null) {
    $('#' + selectedolditem).siblings().find(".menu-active").removeClass("menu-active");
    //                                        
    $('#' + selectedolditem).addClass("menu-active");
  }


  $('.pagination .page-item .page-link').click(function () {

    $('.page-item .page-link').removeClass("pagination-active");
    $(this).addClass("pagination-active");

  });



  // Menu active 

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



  function previewFile(input) {
    var file = $("input[type=file]").get(0).files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function () {
        $('.main-image-text').css('display', 'none');
        $('.show-img img').css('display', 'block');
        $("#previewImg").attr("src", reader.result);
      }

      reader.readAsDataURL(file);
    }
  }



});




// number or not check//
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;
}
// number or not check// 