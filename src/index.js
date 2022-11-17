const dom = document.getElementById('main');
// eslint-disable-next-line no-undef
const myChart = echarts.init(dom);

const url = 'https://www.ag-grid.com/example-assets/olympic-winners.json';
let option;

const getData = fetch(url)
  .then((response) => response.json())
  .then((user) => user);

const printData = async () => {
  const dataFromApi = await getData; 
  const names = dataFromApi.map(item => item.athlete);
  const filtered = dataFromApi
    .filter(({athlete}, index) => !names.includes(athlete, index + 1))
    .slice(0, 15);
 
  const returnData = (array) => {
      return {
        name: array.athlete,
        goldMedals: array.gold,
        silverMedals: array.silver,
        bronzeMedals: array.bronze,
      }
    }

  option = {
    color: ['#f0d456', '#b1b3b2', '#c98908'],
    tooltip: {},
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    dataset: [{
      dimensions: ['name', 'goldMedals', 'silverMedals', 'bronzeMedals'],
      source: filtered.map(answer => (
        returnData(answer)
      )),
    }],
    xAxis: {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 }
    }, 
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };

  option && myChart.setOption(option);

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
}

printData ();

window.addEventListener('resize', myChart.resize);
