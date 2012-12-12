var APIeasy = require('api-easy');
var assert = require('assert');

var suite = APIeasy.describe('Moustach.io');

suite
  .discuss('When selecting all moustaches')
  .use('localhost', 3111)
  .get('/moustaches')
    .expect(200)
    .expect('should have a JSON content type', function(err, res) {
      assert.include(res.headers['content-type'], 'application/json');
    })
  .export(module);
