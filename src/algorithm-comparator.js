// Array.sort
const findMaxMinV1 = (v) => {
  v.sort((a,b) => (a - b));
  console.log(`The minimum is ${v[0]}\nThe maximum is ${v[v.length - 1]}`);
}

// Comparing
const findMaxMinV2 = (v) => {
  let min = v[0];
  let max = v[0];
  for (let i = 1; i < v.length; i++) {
    let n = v[i];
    if (n < min)
      min = n;
    if (n > max)
      max = n;
  }
  console.log(`The minimum is ${min}\nThe maximum is ${max}`);
}

// Bubble
const findMaxMinV3 = v => {
  for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v.length - i; j++) {
      if (v[j] > v[j+1]) {
        let aux = v[j+1];
        v[j+1] = v[j];
        v[j] = aux;
      }
    }
  }
  console.log(`The minimum is ${v[0]}\nThe maximum is ${v[v.length - 1]}`);
}

/**
 * Tests a max min finding algorithm a given number of times with an increasing number of test elements.
 * @param {function} algorithm The algorithm function that will be tested.
 * @param {number} nt The number of tests that will be aplyed to the algorithm.
 * @param {number} n The number of elements that will be introduced in the algorithm to be tested. 
 * @param {number} multiplier Multiplier that will multiply the number of test elements each test.
 * @return {object[]} An array of objects with the results of each test: (number of elemnts, time to complete)
 */
const maxMinWorkbench = (algorithm, nt, n, multiplier) => {
  console.log('Algorithm testing started!\n');
  const results = [];
  let ne = n; // number of elements
  for (let t = 0; t < nt; t++) {
    let te = Array.from({length: ne}, () => Math.floor(Math.random() * 500000 + 1)); // testing elements
    console.log(`Running test ${t + 1}`);
    let sp = Date.now(); // start point
    algorithm(te);
    let tm = Date.now() - sp; // time
    console.log(`Test ${t + 1} completed! Time: ${tm}ms\n`)
    results.push({elements: ne, time: tm / 1000});
    ne = ne * multiplier;
  }
  let tt = 0; // total time
  for (const result of results) {
    tt += result.time;
  }
  console.log(`Test completed in ${tt/1000}s`);
  return results;
}

module.exports = { findMaxMinV1, findMaxMinV2, findMaxMinV3, maxMinWorkbench }