// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function defer(f) {
  return new Promise((function (resolve, _) {
                Curry._1(f, resolve);
                return /* () */0;
              }));
}

function $$return(a) {
  return Promise.resolve(a);
}

function $great$great$eq(m, f) {
  return m.then(Curry.__1(f));
}

exports.defer = defer;
exports.$$return = $$return;
exports.$great$great$eq = $great$great$eq;
/* No side effect */
