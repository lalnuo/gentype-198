// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var FooGen = require("./Foo.gen");

function make(prim) {
  return FooGen.make((function () {
                  switch (prim) {
                    case 26203 : 
                        return "up";
                    case -1032980382 : 
                        return "down";
                    case -944764921 : 
                        return "left";
                    case -379319332 : 
                        return "right";
                    
                  }
                })());
}

var Foo = /* module */[/* make */make];

exports.Foo = Foo;
/* ./Foo.gen Not a pure module */
