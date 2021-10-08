const simpleGit = require('simple-git');

const git = simpleGit();
const dayjs = require('dayjs');
const Date = dayjs().subtract(14, 'd').format();

git.add(['./']).commit(Date, { '--date': Date });
