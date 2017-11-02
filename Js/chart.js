// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Nöjdhet');
  data.addColumn('number', 'Elever');
  data.addRows([
    ['Mycket bra', 30],
    ['Bra', 15],
    ['Okej', 14],
    ['Mindre bra', 10],
    ['Dåligt', 20]
  ]);

  // Set chart options
  var options = {'title':'Vad eleverna tycker om utbildningen',
                 'width':500,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
