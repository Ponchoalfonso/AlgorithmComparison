const { findMaxMinV1, findMaxMinV2, maxMinWorkbench } = require('./algorithm-comparator');
const { ResultPlotter } = require('./plotter');

document.addEventListener("DOMContentLoaded", function() {
  /* Testing algorithms */
  let r1 = maxMinWorkbench(findMaxMinV1, 10, 10000, 2);
  let r2 = maxMinWorkbench(findMaxMinV2, 10, 10000, 2);

  /* Drawing chart */
  document.querySelector('#loading').innerHTML = '';
  let canvas = document.querySelector('#myChart');
  const rp = new ResultPlotter(canvas);

  rp.addResults(r1, "JS sort method");
  rp.addResults(r2, "Comparing values algorithm");
});