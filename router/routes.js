var koa   = require('koa'),
    router = require('koa-router')(),
    app   = koa();

router.get('/', function *(next) {
  this.body="hello";
  //yield next;
})


  module.exports = router;
