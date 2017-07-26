'use strict';


function home(ctx) {
  ctx.body = {a: 'abc'};
}

function add(ctx) {
  //console.log(ctx.request);
  //console.log(ctx.request.body);
  ctx.body = {text: ctx.request.body};

}

function addNum(a,b) {
  return a+b+1;
}

module.exports={
  home: home,
  add: add,
  addNum: addNum
}

/*module.exports.home = function * home(next) {
  console.log("xdxxx");
  if ('GET' != this.method) return yield next;
  this.body = yield "HELLO WORLD";
};*/
