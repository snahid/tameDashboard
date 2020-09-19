$(document).ready(function () {


  // $(".small-img")[1].click(function(){
  //   $('#big-image').src = $('.small-img')[1].src;
  // });



  $('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);

  });







  // Menu active 


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
    //                       ^ you forgot this
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
    //                                        ^ you forgot this
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

});



// number or not check//
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;
}
// number or not check//







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


// Animal Detail Image Rotate 
var bigImg = document.getElementById('big-image');
var smallImg = document.querySelectorAll(".small-img");



smallImg[0].addEventListener("click", function () {
  bigImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", function () {
  bigImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", function () {
  bigImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", function () {
  bigImg.src = smallImg[3].src;
});
smallImg[4].addEventListener("click", function () {
  bigImg.src = smallImg[4].src;
});
// Animal Detail Image Rotate 


// // Chart 

//  //doughnut chart data
//  var data = {
//   labels: ["Treats", "Food", "Toys"],
//   datasets: [
//     {
//       label: "TeamB Score",
//       data: [45, 20, 35],
//       backgroundColor: [
//         "#F36BCB",
//         "#8D49E6",
//         "#10ADFF"
//       ]
//     }
//   ]
// };
//  //options
//  var options = {
//    responsive: true,
//    cutoutPercentage: 65,
//   title: {
//     display: false,
//     position: "top",
//     text: "Top Products",
//     fontSize: 18,
//     fontColor: "#111"
//   },
//   legend: {
//     display: true,
//     position: "left",
//     labels: {
//       fontColor: "#1E3E59",
//       fontSize: 16,
//       padding: 35
//     }
//   }
// };


// // Text Center 
// // register plugin
// Chart.pluginService.register({
//   beforeDraw: function(chart) {
//     var width = chart.chart.width,
//         height = chart.chart.height,
//         ctx = chart.chart.ctx;

//     ctx.restore();
//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var text = "45%",
//         textX = Math.round((width - ctx.measureText(text).width) / 1.54),
//         textY = height / 2.5;

//     ctx.fillText(text, textX, textY);
//     var text = "Treats",
//         textX = Math.round((width - ctx.measureText(text).width) / 1.55),
//         textY = height / 2;

//     ctx.fillText(text, textX, textY);
//     ctx.save();
//   }
// });
// // Text Center 



// var ctx = document.getElementById('myDonutChart').getContext('2d');
// var chart = new Chart(ctx, {
//   type: 'doughnut',
//   data: data,
//   options: options
// });
// Chart 





// var data = {
//   labels: [
//     "Red",
//     "Blue",
//     "Yellow"
//   ],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: [
//         "#FF6384",
//         "#36A2EB",
//         "#FFCE56"
//       ],
//       hoverBackgroundColor: [
//         "#FF6384",
//         "#36A2EB",
//         "#FFCE56"
//       ]
//     }]
// };

// var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
//   type: 'doughnut',
//   data: data,
//   options: {
//   	responsive: true,
//     legend: {
//       display: false
//     }
//   }
// });

// Chart.pluginService.register({
//   beforeDraw: function(chart) {
//     var width = chart.chart.width,
//         height = chart.chart.height,
//         ctx = chart.chart.ctx;

//     ctx.restore();
//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var text = "75%",
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2.5;
//         var textt = "Treats",
//         texttX = Math.round((width - ctx.measureText(text).width) / 2.2),
//         texttY = height / 1.8;

//     ctx.fillText(text, textX, textY);
//     ctx.fillText(textt, texttX, texttY);
//     ctx.save();
//   }
// });

// const chart = new Highcharts.Chart({
//     chart: {
//       color: '#000',
//       backgroundColor: '#336196',
//       renderTo: 'container',
//       type: 'pie'
//     },
//     title: {
//       text: "What's using data",
//       style: {
//         color: '#000'
//       }
//     },
//     yAxis: {
//       title: {
//         text: 'Total percent market share'
//       }
//     },
//     plotOptions: {
//       pie: {
//         shadow: false,
//         borderColor: null
//       }
//     },
//     tooltip: {
//       formatter: function () {
//         return '<b>' + this.point.name + '</b>: ' + this.y + ' %'
//       }
//     },
//     legend: {
//       align: 'right',
//       layout: 'vertical',
//       verticalAlign: 'middle',
//       symbolRadius: 0,
//       symbolPadding: 10,
//       itemMarginTop: 15,
//       itemStyle: {
//         color: '#fff'
//       }
//     },
//     series: [{
//       name: 'Browsers',
//       data: data,
//       size: '120%',
//       innerSize: '60%',
//       showInLegend: true,
//       dataLabels: {
//         enabled: false
//       },
//       marker: {
//         symbol: 'square',
//         radius: 12
//       }
//     }]
//   },
//   function (chart) {
//     var textX = chart.plotLeft + chart.plotWidth * 0.5
//     var textY = chart.plotTop + chart.plotHeight * 0.52

//     var span =
//       '<div id="pieChartInfoText" style="position:absolute; text-align:center;">'
//     span +=
//       '<div style="color:#fff;font-size: 20px;width:50pxmargin-top:36px;margin-left:18px;"></div><br>'
//     span += '</div>'

//     $('#addText').append(span)
//     span = $('#pieChartInfoText')
//     span.css('left', textX + span.width() * -0.5)
//     span.css('top', textY + span.height() * -0.5)
//   }
// )