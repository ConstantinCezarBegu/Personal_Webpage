(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Personal_Webpage'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Personal_Webpage'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'Personal_Webpage'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'Personal_Webpage'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'Personal_Webpage'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'Personal_Webpage'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'Personal_Webpage'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'Personal_Webpage'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'Personal_Webpage'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'Personal_Webpage'.");
    }root.Personal_Webpage = factory(typeof Personal_Webpage === 'undefined' ? {} : Personal_Webpage, kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var flex = $module$kotlin_css.kotlinx.css.flex_f3fbr5$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_borderWidth = $module$kotlin_css.kotlinx.css.set_borderWidth_n8chyh$;
  var BorderStyle = $module$kotlin_css.kotlinx.css.BorderStyle;
  var set_borderStyle = $module$kotlin_css.kotlinx.css.set_borderStyle_whe14r$;
  var set_borderRadius = $module$kotlin_css.kotlinx.css.set_borderRadius_n8chyh$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_borderColor = $module$kotlin_css.kotlinx.css.set_borderColor_ommczd$;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_1klik0$;
  var child = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.child_9r8yuv$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var attributesMapOf_1 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var H2_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var margin = $module$kotlin_css.kotlinx.css.margin_cx3uck$;
  var A_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function main$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    flex($receiver_1, 1.0);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_justifyContent($receiver_1, JustifyContent.center);
    set_alignItems($receiver_1, Align.center);
    circularProfilePicture_0($receiver_0, 'drawable/profile_picture.jpg', main$lambda$lambda$lambda);
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Constantin Cezar Begu');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    iconText_0($receiver_0, 'drawable/kotlin_icon.png', 'Kotlin Developer', main$lambda$lambda$lambda_0);
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda(null));
    linkIcon_0($receiver_0_1, 'mailto:constantin.cez.b@gmail.com', 'drawable/email-open.svg', main$lambda$lambda$lambda$lambda);
    linkIcon_0($receiver_0_1, 'https://www.linkedin.com/in/cezar-begu-a67207196', 'drawable/linkedin.svg', main$lambda$lambda$lambda$lambda_0);
    linkIcon_0($receiver_0_1, 'https://github.com/ConstantinCezB', 'drawable/github.svg', main$lambda$lambda$lambda$lambda_1);
    linkIcon_0($receiver_0_1, 'https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu', 'drawable/google-play.svg', main$lambda$lambda$lambda$lambda_2);
    linkIcon_0($receiver_0_1, 'https://www.youtube.com/channel/UCaOxNPXls62EUa9PUlAq2Ng?view_as=subscriber', 'drawable/youtube.svg', main$lambda$lambda$lambda$lambda_3);
    $receiver_0.child_52psg1$($receiver_0_1.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function styledImg$lambda(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function circularProfilePicture$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledImg$lambda(null, props.icon));
    var $receiver_1 = $receiver_0.css;
    set_width($receiver_1, new LinearDimension('20em'));
    set_borderWidth($receiver_1, new LinearDimension('0.25em'));
    set_borderStyle($receiver_1, BorderStyle.solid);
    set_borderRadius($receiver_1, new LinearDimension('50%'));
    set_borderColor($receiver_1, Color.Companion.currentColor);
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var circularProfilePicture;
  function circularProfilePicture$lambda$lambda(closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.icon = closure$icon;
      closure$handler($receiver);
      return Unit;
    };
  }
  function circularProfilePicture$lambda_0(closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(circularProfilePicture$lambda$lambda(closure$icon, closure$handler));
      return Unit;
    };
  }
  function circularProfilePicture_0($receiver, icon, handler) {
    return child($receiver, circularProfilePicture, void 0, circularProfilePicture$lambda_0(icon, handler));
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init_0(attributesMapOf_1(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function iconText$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    flex($receiver_1, 1.0);
    set_flexDirection($receiver_1, FlexDirection.row);
    set_alignItems($receiver_1, Align.center);
    var $receiver_0_0 = new RDOMBuilder_init(img$lambda(null, props.icon, null));
    var $receiver_2 = $receiver_0_0.attrs;
    $receiver_2.height = (32).toString();
    $receiver_2.width = (32).toString();
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(h2$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$(props.text);
    $receiver_0.child_52psg1$($receiver_0_1.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var iconText;
  function iconText$lambda$lambda(closure$icon, closure$text, closure$handler) {
    return function ($receiver) {
      $receiver.icon = closure$icon;
      $receiver.text = closure$text;
      closure$handler($receiver);
      return Unit;
    };
  }
  function iconText$lambda_0(closure$icon, closure$text, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(iconText$lambda$lambda(closure$icon, closure$text, closure$handler));
      return Unit;
    };
  }
  function iconText_0($receiver, icon, text, handler) {
    return child($receiver, iconText, void 0, iconText$lambda_0(icon, text, handler));
  }
  function styledImg$lambda_0(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function a$lambda(closure$href, closure$target, closure$classes) {
    return function (it) {
      return new A_init(attributesMapOf_1(['href', closure$href, 'target', closure$target, 'class', closure$classes]), it);
    };
  }
  function linkIcon$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(a$lambda(props.link, null, null));
    var $receiver_0_0 = new StyledDOMBuilder_init(styledImg$lambda_0(null, props.icon));
    var $receiver_1 = $receiver_0_0.css;
    set_display($receiver_1, Display.inlineBlock);
    set_width($receiver_1, new LinearDimension('2em'));
    set_height($receiver_1, new LinearDimension('2em'));
    margin($receiver_1, void 0, new LinearDimension('0.5em'));
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var linkIcon;
  function linkIcon$lambda$lambda(closure$link, closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.link = closure$link;
      $receiver.icon = closure$icon;
      closure$handler($receiver);
      return Unit;
    };
  }
  function linkIcon$lambda_0(closure$link, closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(linkIcon$lambda$lambda(closure$link, closure$icon, closure$handler));
      return Unit;
    };
  }
  function linkIcon_0($receiver, link, icon, handler) {
    return child($receiver, linkIcon, void 0, linkIcon$lambda_0(link, icon, handler));
  }
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.main = main;
  var package$views = _.views || (_.views = {});
  package$views.circularProfilePicture_m3686e$ = circularProfilePicture_0;
  package$views.iconText_h7tj22$ = iconText_0;
  package$views.linkIcon_7nb38n$ = linkIcon_0;
  circularProfilePicture = functionalComponent(circularProfilePicture$lambda);
  iconText = functionalComponent(iconText$lambda);
  linkIcon = functionalComponent(linkIcon$lambda);
  main();
  Kotlin.defineModule('Personal_Webpage', _);
  return _;
}));

//# sourceMappingURL=Personal_Webpage.js.map
