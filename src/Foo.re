module Foo = {
  [@genType.import ("foo/bar", "default")] [@react.component]
  external make:
    (~direction: [@bs.string] [ | `up | `down | `left | `right]) =>
    string =
    "";
};