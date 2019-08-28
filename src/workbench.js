const { findMaxMinV1, findMaxMinV2, findMaxMinV3, maxMinWorkbench } = require('./algorithm-comparator');

/* Testing algorithms */
let r1 = maxMinWorkbench(findMaxMinV1, 1, 100000, 1);
let r2 = maxMinWorkbench(findMaxMinV2, 1, 100000, 1);
let r3 = maxMinWorkbench(findMaxMinV3, 1, 100000, 1);