const { Chart } = require('chart.js');

const randomColor = () => {
  const colors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ];

  let i = Math.floor(Math.random() * 7);

  return colors[i];
}

const numberAbbreviation = number => {
  if (number > 1000000)
    return `${(number/1000000).toFixed(1)}M`
  else if (number > 5000)
    return `${(number/1000).toFixed(0)}K`
  else 
    return number;
}

const config = {
  type: 'line',
  data: {
    labels: [],
    datasets: []
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Max - Min finder, algorithm comparison'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Compared elements'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time in seconds (s)'
        }
      }]
    }
  }
}

/**
 * Plot the results of the max-min finder Workbench.
 */
class ResultPlotter {
  /**
   * Initialize the chart where rsults are going to be displayed
   * @param {HTMLCanvasElement} canvas The canvas where the chart is going to be drawn
   */
  constructor (canvas) {
    let ctx = canvas.getContext('2d'); // context
    this.config = config;
    this.chart = new Chart(ctx, config);
  }

  /**
   * Plot the results of a test in a new line
   * @param {Array} results Array of objects containing the test result { elements, time }
   * @param {string} label Chart line label
   */
  addResults(results, label) {
    let color = randomColor();
    let data = [];
    let labels = [];

    for (const result of results) {
      labels.push(numberAbbreviation(result.elements));
      data.push(result.time);
    }

    let dataset = {
      label: label,
      fill: false,
      backgroundColor: color,
      borderColor: color,
      data: data,
    }

    if (this.config.data.labels.length === 0)
      this.config.data.labels = labels;
    this.config.data.datasets.push(dataset);

    this.chart.update();
  }
}

module.exports = { ResultPlotter };