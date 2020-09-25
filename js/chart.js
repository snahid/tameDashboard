//  Chart 
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Treats', 'Food', 'Toys'],
        datasets: [{
            label: "Score",
            data: [45, 20, 35],
            backgroundColor: [
                "#F36BCB",
                "#8D49E6",
                "#10ADFF"
            ]
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {
            backgroundColor: "#330C27",
            bodyFontColor: "#fff",
            titleFontColor: "#fff",
            bodyFontSize: '12',
            displayColors: false,
          },
        responsive: true,
        cutoutPercentage: 65,
        title: {
            display: false,
            position: "top",
            text: "Top Products",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "left",
            labels: {
                fontColor: "#1E3E59",
                fontSize: 16,
                padding: 40
            }
        }
    }
});
//  Chart

