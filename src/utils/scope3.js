const bear = require('./scope1.js');

const tree = bear.prop;
tree.scope3 = 'scope3';

module.exports = tree;