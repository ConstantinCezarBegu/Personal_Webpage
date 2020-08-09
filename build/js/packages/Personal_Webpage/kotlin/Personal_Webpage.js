(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Personal_Webpage'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Personal_Webpage'.");
    }root.Personal_Webpage = factory(typeof Personal_Webpage === 'undefined' ? {} : Personal_Webpage, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  function main() {
    document.bgColor = 'blue';
  }
  _.main = main;
  main();
  Kotlin.defineModule('Personal_Webpage', _);
  return _;
}));

//# sourceMappingURL=Personal_Webpage.js.map
