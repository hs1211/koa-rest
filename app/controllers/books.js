'use strict';


function home(ctx) {
  ctx.body = {a: 'abc'};
}

function add(ctx) {
//  console.log(ctx.request);
//  console.log(ctx.request.body);
  ctx.body = {text: ctx.req.body};

}

module.exports={
  home: home,
  add: add
}

/*module.exports.home = function * home(next) {
  console.log("xdxxx");
  if ('GET' != this.method) return yield next;
  this.body = yield "HELLO WORLD";
};*/
