// -----------------------lineChart1------------------------

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Medelvärde');

      data.addRows([
        [0, 0],   [1, 4.3],  [2, 5.2],  [3, 5.8],  [4, 6],  [5, 6.2],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
      ]);

      var options = {
        hAxis: {
          gridlines: { count: 0 },
          title: 'Dag'
        },
        vAxis: {
          gridlines: { count: 10 },
          title: 'Smileys'
        },
      };

      var chart = new google.visualization.LineChart(document.getElementById('lineChart'));

      chart.draw(data, options);

    }

// -----------------------lineChart1------------------------

// ------------------------pieChart----------------------

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var pieData = new google.visualization.DataTable();
  pieData.addColumn('string', 'Nöjdhet');
  pieData.addColumn('number', 'Elever');
  pieData.addRows([
    ['10', 30],
    ['9', 15],
    ['Okej', 14],
    ['Mindre bra', 10],
    ['Dåligt', 20]
  ]);

  // Set chart options
  var pieOptions = {'title':'Vad tyckte eleverna om Javascript',
                 'width':500,
                 'height':300,
                  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};

  // Instantiate and draw our chart, passing in some options.
  var pieChart = new google.visualization.PieChart(document.getElementById('pieChart'));
  pieChart.draw(pieData, pieOptions);
}

// ------------------------PIECHART----------------------
