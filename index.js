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

  const getName = (num) => {
    const findName = filtered.map((index) => index.athlete);
    const name = findName.find((_, index) => index === num)

    return name;
  };

  const getGold = (num) => {
    const findGold = filtered.map( index => index.gold);
    const findMedal = findGold.find((_, index) => index === num);

    return findMedal;
  };

  const getSilver = (num) => {
    const getAllSilver = filtered.map( index => index.silver);
    const findMedal = getAllSilver.find((_, index) => index === num);

    return findMedal;
  };

  const getBronze = (num) => {
    const getBronze = filtered.map( index => index.bronze);
    const findMedal = getBronze.find((_, index) => index === num);

    return findMedal;
  };

  option = {
    color: ['#f0d456', '#b1b3b2', '#c98908'],
    tooltip: {},
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    dataset: [{
      dimensions: ['name', 'goldMedals', 'silverMedals', 'bronzeMedals'],
      source: [
        { name: getName(0), goldMedals: getGold(0), silverMedals: getSilver(0), bronzeMedals: getBronze(0)},
        { name: getName(1), goldMedals: getGold(1), silverMedals: getSilver(1), bronzeMedals: getBronze(1)},
        { name: getName(2), goldMedals: getGold(2), silverMedals: getSilver(2), bronzeMedals: getBronze(2)},
        { name: getName(3), goldMedals: getGold(3), silverMedals: getSilver(3), bronzeMedals: getBronze(3)},
        { name: getName(4), goldMedals: getGold(4), silverMedals: getSilver(4), bronzeMedals: getBronze(4)},
        { name: getName(5), goldMedals: getGold(5), silverMedals: getSilver(5), bronzeMedals: getBronze(5)},
        { name: getName(6), goldMedals: getGold(6), silverMedals: getSilver(6), bronzeMedals: getBronze(6)},
        { name: getName(7), goldMedals: getGold(7), silverMedals: getSilver(7), bronzeMedals: getBronze(7)},
        { name: getName(8), goldMedals: getGold(8), silverMedals: getSilver(8), bronzeMedals: getBronze(8)},
        { name: getName(9), goldMedals: getGold(9), silverMedals: getSilver(9), bronzeMedals: getBronze(9)},
        { name: getName(10), goldMedals: getGold(10), silverMedals: getSilver(10), bronzeMedals: getBronze(10)},
        { name: getName(11), goldMedals: getGold(11), silverMedals: getSilver(11), bronzeMedals: getBronze(11)},
        { name: getName(12), goldMedals: getGold(12), silverMedals: getSilver(12), bronzeMedals: getBronze(12)},
        { name: getName(13), goldMedals: getGold(13), silverMedals: getSilver(13), bronzeMedals: getBronze(13)},
        { name: getName(14), goldMedals: getGold(14), silverMedals: getSilver(14), bronzeMedals: getBronze(14)},
      ],
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