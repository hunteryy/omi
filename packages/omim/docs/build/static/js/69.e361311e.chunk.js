webpackJsonp([69],{61:function(n,e){n.exports="## Line\n\nLine chart.\n\n## Usage\n\n```html\n<m-line id=\"myLine\" width=\"600\" height=\"300\" \n  data=\"{\n    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n    datasets: [{\n      label: '# of Votes',\n      data: [12, 19, 3, 5, 2, 3],\n      backgroundColor: 'rgba(255, 99, 132, .4)',\n      borderColor: 'rgb(255, 99, 132)',\n      borderWidth: 1\n    }]\n  }\"\n\n  options=\"{\n    responsive: true,\n    title: {\n      display: true,\n      text: 'Omi-chart Line Chart'\n    },\n    tooltips: {\n      mode: 'index',\n      intersect: false\n    },\n    hover: {\n      mode: 'nearest',\n      intersect: true\n    },\n    scales: {\n      xAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Month'\n        }\n      }],\n      yAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Value'\n        }\n      }]\n    }\n  }\">\n</m-line>\n```\n\n## Update the chart\n\n```js\n//get the element\nvar chart = document.querySelector('#myLine')\n//change data of chart\nchart.props.data.datasets.forEach(dataset => {\n  dataset.data.forEach((item, index) => {\n    dataset.data[index] = Math.random() * 100\n  })\n})\n//update chart\nchart.update()\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  data: object,\n  options: object,\n  width: number,\n  height: number\n}\n```"}});
//# sourceMappingURL=69.e361311e.chunk.js.map