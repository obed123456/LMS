// ---------------------lineChart----------------------------------

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      // data.addColumn('number', 'X');
      data.addColumn('date', 'Time of Day');
      data.addColumn('number', 'Medelvärde');

      data.addRows([
        [new Date(2017, 9, 1), 1.8],   [new Date(2017, 9, 2), 2],  [new Date(2017, 9, 3), 2.2], [new Date(2017, 9, 4), 2.8],
        [new Date(2017, 9, 5), 2.1], [new Date(2017, 9, 6), 1.7], [new Date(2017, 9, 7), 1.6], [new Date(2017, 9, 8), 1.9],
        [new Date(2017, 9, 9), 1.8], [new Date(2017, 9, 10), 2.2], [new Date(2017, 9, 11), 2.8], [new Date(2017, 9, 12), 2.6],
        [new Date(2017, 9, 13), 1.7], [new Date(2017, 9, 14), 1.4], [new Date(2017, 9, 15), 2.0],
      ]);

      var options = {
        legend: {
          position: 'top'
        },
        hAxis: {
          title: 'Dag',
          // viewWindow: { max: 14, min: 1 },
          // gridlines: {count: -1},
          drawTicks: 'true',
          format: 'M/d/yy',
        },
        vAxis: {
          // minValue: 1,
          // maxvalue: 3,
          // viewWindow: { max: 3, min: 1 },
          gridlines: { count: 3 },
          title: 'Smileys'
        },
      };

      var chart = new google.visualization.LineChart(document.getElementById('lineChart'));

      chart.draw(data, options);

    }


// ---------------------lineChart----------------------------------
//
// ---------------------curveChart---------------------------------

// google.charts.load('current', {'packages':['corechart']});
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


// ---------------------curveChart---------------------------------
//
// ---------------------pieChart-1----------------------------------

// google.charts.load('current', {'packages':['corechart']});
      // google.charts.setOnLoadCallback(drawChart1);
      //
      // function drawChart1() {
      //
      //   var data = google.visualization.arrayToDataTable([
      //     ['Task', 'Hours per Day'],
      //     ['Mycket Bra',     11],
      //     ['Bra',             2],
      //     ['Okej',            2],
      //     ['Mindre Bra',      2],
      //     ['Dåligt',          7]
      //   ]);
      //
      //   var options = {
      //     title: 'Avslutade Kurser'
      //   };
      //
      //   var chart = new google.visualization.PieChart(document.getElementById('pieChart1'));
      //
      //   chart.draw(data, options);
      // }

google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

  var pieData1 = new google.visualization.DataTable();
  pieData1.addColumn('string', 'Nöjdhet');
  pieData1.addColumn('number', 'Elever');
  pieData1.addRows([
    ['Mycket Bra', 35],
    ['Bra', 15],
    ['Okej', 10],
    ['Inte bra', 7],
    ['Dåligt', 4]
  ]);

  var pieOptions1 = {'title':'Vad tyckte eleverna om kursen som helhet?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart1 = new google.visualization.PieChart(document.getElementById('pieChart1'));
  pieChart1.draw(pieData1, pieOptions1);
}
// ---------------------pieChart-1----------------------------------

// ---------------------pieChart-2----------------------------------

// google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

  var pieData2 = new google.visualization.DataTable();
  pieData2.addColumn('string', 'Nöjdhet');
  pieData2.addColumn('number', 'Elever');
  pieData2.addRows([
    ['Mycket Bra', 30],
    ['Bra', 15],
    ['Okej', 14],
    ['Inte bra', 10],
    ['Dåligt', 20]
  ]);

  var pieOptions2 = {'title':'Vad tyckte eleverna om upplägget på kursen?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart2 = new google.visualization.PieChart(document.getElementById('pieChart2'));
  pieChart2.draw(pieData2, pieOptions2);
}

// ---------------------pieChart-2----------------------------------

// ---------------------pieChart-3----------------------------------

google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {

  var pieData3 = new google.visualization.DataTable();
  pieData3.addColumn('string', 'Nöjdhet');
  pieData3.addColumn('number', 'Elever');
  pieData3.addRows([
    ['Mycket Bra', 20],
    ['Bra', 16],
    ['Okej', 14],
    ['Inte bra', 10],
    ['Dåligt', 6]
  ]);

  var pieOptions3 = {'title':'Hur har kursen motsvarat elevens förväntningar?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart3 = new google.visualization.PieChart(document.getElementById('pieChart3'));
  pieChart3.draw(pieData3, pieOptions3);
}

// ---------------------pieChart-3----------------------------------
// ---------------------pieChart-4----------------------------------
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {

  var pieData4 = new google.visualization.DataTable();
  pieData4.addColumn('string', 'Nöjdhet');
  pieData4.addColumn('number', 'Elever');
  pieData4.addRows([
    ['Mycket Bra', 30],
    ['Bra', 15],
    ['Okej', 14],
    ['Inte bra', 10],
    ['Dåligt', 20]
  ]);

  var pieOptions4 = {'title':'Vad tyckte eleverna om kursen som helhet?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart4 = new google.visualization.PieChart(document.getElementById('pieChart4'));
  pieChart4.draw(pieData4, pieOptions4);
}

// ---------------------pieChart-4----------------------------------
// ---------------------pieChart-5----------------------------------
google.charts.setOnLoadCallback(drawChart5);

function drawChart5() {

  var pieData5 = new google.visualization.DataTable();
  pieData5.addColumn('string', 'Nöjdhet');
  pieData5.addColumn('number', 'Elever');
  pieData5.addRows([
    ['Mycket Bra', 20],
    ['Bra', 16],
    ['Okej', 14],
    ['Inte bra', 10],
    ['Dåligt', 6]
  ]);

  var pieOptions5 = {'title':'Vad tyckte eleverna om upplägget på kursen?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart5 = new google.visualization.PieChart(document.getElementById('pieChart5'));
  pieChart5.draw(pieData5, pieOptions5);
}

// ---------------------pieChart-5----------------------------------
// ---------------------pieChart-6----------------------------------
google.charts.setOnLoadCallback(drawChart6);

function drawChart6() {

  var pieData6 = new google.visualization.DataTable();
  pieData6.addColumn('string', 'Nöjdhet');
  pieData6.addColumn('number', 'Elever');
  pieData6.addRows([
    ['Mycket Bra', 35],
    ['Bra', 15],
    ['Okej', 10],
    ['Inte bra', 7],
    ['Dåligt', 4]
  ]);

  var pieOptions6 = {'title':'Hur har kursen motsvarat elevens förväntningar?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart6 = new google.visualization.PieChart(document.getElementById('pieChart6'));
  pieChart6.draw(pieData6, pieOptions6);
}

// ---------------------pieChart-6----------------------------------
// ---------------------pieChart-7----------------------------------
google.charts.setOnLoadCallback(drawChart7);

function drawChart7() {

  var pieData7 = new google.visualization.DataTable();
  pieData7.addColumn('string', 'Nöjdhet');
  pieData7.addColumn('number', 'Elever');
  pieData7.addRows([
    ['Mycket Bra', 20],
    ['Bra', 16],
    ['Okej', 14],
    ['Inte bra', 10],
    ['Dåligt', 6]
  ]);

  var pieOptions7 = {'title':'Vad tyckte eleverna om kursen som helhet?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart7 = new google.visualization.PieChart(document.getElementById('pieChart7'));
  pieChart7.draw(pieData7, pieOptions7);
}

// ---------------------pieChart-7----------------------------------
// ---------------------pieChart-8----------------------------------
google.charts.setOnLoadCallback(drawChart8);

function drawChart8() {

  var pieData8 = new google.visualization.DataTable();
  pieData8.addColumn('string', 'Nöjdhet');
  pieData8.addColumn('number', 'Elever');
  pieData8.addRows([
    ['Mycket Bra', 35],
    ['Bra', 15],
    ['Okej', 10],
    ['Inte bra', 7],
    ['Dåligt', 4]
  ]);

  var pieOptions8 = {'title':'Vad tyckte eleverna om upplägget på kursen?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart8 = new google.visualization.PieChart(document.getElementById('pieChart8'));
  pieChart8.draw(pieData8, pieOptions8);
}

// ---------------------pieChart-8----------------------------------
// ---------------------pieChart-9----------------------------------
google.charts.setOnLoadCallback(drawChart9);

function drawChart9() {

  var pieData9 = new google.visualization.DataTable();
  pieData9.addColumn('string', 'Nöjdhet');
  pieData9.addColumn('number', 'Elever');
  pieData9.addRows([
    ['Mycket Bra', 30],
    ['Bra', 15],
    ['Okej', 14],
    ['Inte bra', 10],
    ['Dåligt', 20]
  ]);

  var pieOptions9 = {'title':'Hur har kursen motsvarat elevens förväntningar?',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  var pieChart9 = new google.visualization.PieChart(document.getElementById('pieChart9'));
  pieChart9.draw(pieData9, pieOptions9);
}

// ---------------------pieChart-9----------------------------------



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
