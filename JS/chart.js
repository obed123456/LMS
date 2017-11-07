google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawLineChart);

      function drawLineChart() {
        var linedata = google.visualization.arrayToDataTable([
          ['Vecka', 'Hur upplever du tempot i utbildningen', 'Hur engagerad anser du själv att du är i dina studier',   'Hur upplever du stämmingen i klassen'],
          ['39',    3,       4,      2],
          ['40',    4,       4,      3],
          ['41',    6,       5,      6],
          ['42',    7,       3,      5],
          ['43',    6,       5,      6],
          ['44',    3,       7,      8]
        ]);

        var lineOptions = {
          title: 'Veckoutvärdering',
          curveType: 'function',
          legend: { position: 'side' }
        };

        var lineChart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        lineChart.draw(linedata, lineOptions);
      }

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Mycket Bra',     11],
          ['Bra',             2],
          ['Okej',            2],
          ['Mindre Bra',      2],
          ['Dåligt',          7]
        ]);

        var options = {
          title: 'Avslutade Kurser'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


// var ctx = document.getElementById("myPieChart");
// var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes:false [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
//
// var ctx = document.getElementById("myChart1").getContext('2d');
// var myChart1 = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: false [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
//
// var ctx = document.getElementById('myChart2').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',
//
//     // The data for our dataset
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "My First dataset",
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//     },
//
//     // Configuration options go here
//     options: {
//       yAxes: false
//     }
// });
