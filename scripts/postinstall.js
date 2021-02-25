const { spawnSync } = require('child_process');

spawnSync('git', ['config', 'core.hooksPath', '.githooks']);
