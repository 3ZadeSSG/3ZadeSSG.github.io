google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['GPU', 'FPS'],
        ['RTX 1080 Ti', 8.3],
        ['RTX 2080 Ti', 8.5],
        ['RTX 3080', 9],
        ['RTX 4090', 27]
      ]);

      var options = {
        title: 'PLFNet Performance on Different GPUs',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Frames Per Second (FPS)',
          minValue: 0
        },
        vAxis: {
          title: 'GPU'
        },
        bars: 'horizontal',
        colors: ['#1b9e77'],
        legend: { position: "none" }
      };

      var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));

      chart.draw(data, options);
    }