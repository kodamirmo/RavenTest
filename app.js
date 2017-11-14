var Raven = require('raven');
var url = '';
Raven.config(url).install();

try {
  JSON.parse(undefined);
} catch (e) {
  console.log('Error => ', e);
  Raven.captureException(e);
}
