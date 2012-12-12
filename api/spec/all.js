var APIeasy = require('api-easy');
var assert = require('assert');

var suite = APIeasy.describe('localhost');

suite
  .discuss('When selecting all moustaches')
  .use('localhost', 3111)
  .get('/moustaches')
  .expect(200)
  .export(module);
