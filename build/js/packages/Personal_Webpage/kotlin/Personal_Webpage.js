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
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var flex = $module$kotlin_css.kotlinx.css.flex_f3fbr5$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var get_em = $module$kotlin_css.kotlinx.css.get_em_rcaex3$;
  var padding = $module$kotlin_css.kotlinx.css.padding_fjjo64$;
  var FlexWrap = $module$kotlin_css.kotlinx.css.FlexWrap;
  var set_flexWrap = $module$kotlin_css.kotlinx.css.set_flexWrap_6el38z$;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var set_marginTop = $module$kotlin_css.kotlinx.css.set_marginTop_n8chyh$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var RowGap = $module$kotlin_css.kotlinx.css.RowGap;
  var set_rowGap = $module$kotlin_css.kotlinx.css.set_rowGap_ar4whm$;
  var ColumnGap = $module$kotlin_css.kotlinx.css.ColumnGap;
  var set_columnGap = $module$kotlin_css.kotlinx.css.set_columnGap_87l4s6$;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_1klik0$;
  var child = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.child_9r8yuv$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H2_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var get_vh = $module$kotlin_css.kotlinx.css.get_vh_rcaex3$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var get_pct = $module$kotlin_css.kotlinx.css.get_pct_rcaex3$;
  var TextAlign = $module$kotlin_css.kotlinx.css.TextAlign;
  var set_textAlign = $module$kotlin_css.kotlinx.css.set_textAlign_q2ys32$;
  var H1_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var padding_1 = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_bottom = $module$kotlin_css.kotlinx.css.set_bottom_n8chyh$;
  var set_left = $module$kotlin_css.kotlinx.css.set_left_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var set_zIndex = $module$kotlin_css.kotlinx.css.set_zIndex_a6g65m$;
  var set_background = $module$kotlin_css.kotlinx.css.set_background_krvuuu$;
  var set_backgroundSize = $module$kotlin_css.kotlinx.css.set_backgroundSize_krvuuu$;
  var set_filter = $module$kotlin_css.kotlinx.css.set_filter_krvuuu$;
  var set_opacity = $module$kotlin_css.kotlinx.css.set_opacity_if475a$;
  var set_borderWidth = $module$kotlin_css.kotlinx.css.set_borderWidth_n8chyh$;
  var BorderStyle = $module$kotlin_css.kotlinx.css.BorderStyle;
  var set_borderStyle = $module$kotlin_css.kotlinx.css.set_borderStyle_whe14r$;
  var set_borderRadius = $module$kotlin_css.kotlinx.css.set_borderRadius_n8chyh$;
  var set_borderColor = $module$kotlin_css.kotlinx.css.set_borderColor_ommczd$;
  var A_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
  var boxShadow = $module$kotlin_css.kotlinx.css.properties.boxShadow_x2br9$;
  var set_border = $module$kotlin_css.kotlinx.css.set_border_krvuuu$;
  var Overflow = $module$kotlin_css.kotlinx.css.Overflow;
  var set_overflowY = $module$kotlin_css.kotlinx.css.set_overflowY_qhpm6s$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var P_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var enumEncode = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_1 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IFRAME_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
  var ARTICLE_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
  var margin = $module$kotlin_css.kotlinx.css.margin_fjjo64$;
  var margin_0 = $module$kotlin_css.kotlinx.css.margin_9vmwvs$;
  var H2_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var HR_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
  var margin_1 = $module$kotlin_css.kotlinx.css.margin_cx3uck$;
  function Experience(videoUrl, title, description, time, redirections) {
    this.videoUrl = videoUrl;
    this.title = title;
    this.description = description;
    this.time = time;
    this.redirections = redirections;
  }
  Experience.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Experience',
    interfaces: []
  };
  Experience.prototype.component1 = function () {
    return this.videoUrl;
  };
  Experience.prototype.component2 = function () {
    return this.title;
  };
  Experience.prototype.component3 = function () {
    return this.description;
  };
  Experience.prototype.component4 = function () {
    return this.time;
  };
  Experience.prototype.component5 = function () {
    return this.redirections;
  };
  Experience.prototype.copy_437zdn$ = function (videoUrl, title, description, time, redirections) {
    return new Experience(videoUrl === void 0 ? this.videoUrl : videoUrl, title === void 0 ? this.title : title, description === void 0 ? this.description : description, time === void 0 ? this.time : time, redirections === void 0 ? this.redirections : redirections);
  };
  Experience.prototype.toString = function () {
    return 'Experience(videoUrl=' + Kotlin.toString(this.videoUrl) + (', title=' + Kotlin.toString(this.title)) + (', description=' + Kotlin.toString(this.description)) + (', time=' + Kotlin.toString(this.time)) + (', redirections=' + Kotlin.toString(this.redirections)) + ')';
  };
  Experience.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.redirections) | 0;
    return result;
  };
  Experience.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.videoUrl, other.videoUrl) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.redirections, other.redirections)))));
  };
  function Redirection(url, icon) {
    this.url = url;
    this.icon = icon;
  }
  Redirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Redirection',
    interfaces: []
  };
  Redirection.prototype.component1 = function () {
    return this.url;
  };
  Redirection.prototype.component2 = function () {
    return this.icon;
  };
  Redirection.prototype.copy_puj7f4$ = function (url, icon) {
    return new Redirection(url === void 0 ? this.url : url, icon === void 0 ? this.icon : icon);
  };
  Redirection.prototype.toString = function () {
    return 'Redirection(url=' + Kotlin.toString(this.url) + (', icon=' + Kotlin.toString(this.icon)) + ')';
  };
  Redirection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    return result;
  };
  Redirection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.url, other.url) && Kotlin.equals(this.icon, other.icon)))));
  };
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    var experiences = listOf([new Experience('https://www.youtube.com/embed/Id363jnLcLY', 'Microflux', 'Rss reader all that is build using kotlin with MPP in mind Rss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindvvRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindvRss reader all that is build using kotlin with MPP in mind', 'From a to b', listOf([new Redirection('https://github.com/ConstantinCezB', 'drawable/github.svg'), new Redirection('https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu', 'drawable/google-play.svg')])), new Experience('https://www.youtube.com/embed/5qap5aO4i9A', 'Microflux', 'Rss reader all that is build using kotlin with MPP in mind', 'From a to b', listOf([new Redirection('https://github.com/ConstantinCezB', 'drawable/github.svg'), new Redirection('https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu', 'drawable/google-play.svg')])), new Experience('https://www.youtube.com/embed/Id363jnLcLY', 'Microflux', 'Rss reader all that is build using kotlin with MPP in mind', 'From a to b', listOf([new Redirection('https://github.com/ConstantinCezB', 'drawable/github.svg'), new Redirection('https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu', 'drawable/google-play.svg')]))]);
    backgroundImage_0($receiver, 'drawable/background.png', main$lambda$lambda);
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    set_color($receiver_0.css, new Color('#fff'));
    introSegment_0($receiver_0, main$lambda$lambda$lambda);
    experienceSegment_0($receiver_0, 'Work Experience', experiences, main$lambda$lambda$lambda_0);
    experienceSegment_0($receiver_0, 'Work Experience 2', experiences, main$lambda$lambda$lambda_1);
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function experienceSegment$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function experienceSegment$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function experienceSegment$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function experienceSegment$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    flex($receiver_1, 1.0);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_justifyContent($receiver_1, JustifyContent.center);
    set_alignItems($receiver_1, Align.center);
    padding($receiver_1, get_em(10));
    var $receiver_0_0 = new RDOMBuilder_init(h2$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$(props.title);
    $receiver_0.child_52psg1$($receiver_0_0.create());
    lineSeparator_0($receiver_0, experienceSegment$lambda$lambda$lambda);
    var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_2 = $receiver_0_1.css;
    set_display($receiver_2, Display.flex);
    set_flexWrap($receiver_2, FlexWrap.wrap);
    set_marginTop($receiver_2, new LinearDimension('0'));
    set_backgroundColor($receiver_2, new Color('rgba(52, 52, 52, 0.6)'));
    set_width($receiver_2, new LinearDimension('100%'));
    padding_0($receiver_2, get_em(5));
    set_rowGap($receiver_2, new RowGap('2.5em'));
    set_columnGap($receiver_2, new ColumnGap('2.5em'));
    set_justifyContent($receiver_2, JustifyContent.center);
    var tmp$;
    tmp$ = props.experiences.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      experienceCard_0($receiver_0_1, element, experienceSegment$lambda$lambda$lambda$lambda$lambda);
    }
    $receiver_0.child_52psg1$($receiver_0_1.create());
    lineSeparator_0($receiver_0, experienceSegment$lambda$lambda$lambda_0);
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var experienceSegment;
  function experienceSegment$lambda$lambda(closure$title, closure$experiences, closure$handler) {
    return function ($receiver) {
      $receiver.title = closure$title;
      $receiver.experiences = closure$experiences;
      closure$handler($receiver);
      return Unit;
    };
  }
  function experienceSegment$lambda_0(closure$title, closure$experiences, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(experienceSegment$lambda$lambda(closure$title, closure$experiences, closure$handler));
      return Unit;
    };
  }
  function experienceSegment_0($receiver, title, experiences, handler) {
    return child($receiver, experienceSegment, void 0, experienceSegment$lambda_0(title, experiences, handler));
  }
  function styledH1$lambda(it) {
    return new H1_init(html.emptyMap, it);
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_1(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledImg$lambda(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function introSegment$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function introSegment$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function introSegment$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function introSegment$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function introSegment$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function introSegment$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function introSegment$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function introSegment$lambda($receiver, f) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    flex($receiver_1, 1.0);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_alignItems($receiver_1, Align.center);
    set_height($receiver_1, get_vh(100));
    var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    set_height($receiver_0_0.css, get_pct(20));
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    var $receiver_2 = $receiver_0_1.css;
    set_display($receiver_2, Display.flex);
    flex($receiver_2, 1.0);
    set_flexDirection($receiver_2, FlexDirection.column);
    set_alignItems($receiver_2, Align.center);
    circularProfilePicture_0($receiver_0_1, '', 'drawable/profile_picture.jpg', introSegment$lambda$lambda$lambda$lambda);
    var $receiver_0_2 = new StyledDOMBuilder_init(styledH1$lambda);
    set_textAlign($receiver_0_2.css, TextAlign.center);
    $receiver_0_2.unaryPlus_pdl1vz$('Constantin Cezar Begu');
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    iconText_0($receiver_0_1, 'drawable/kotlin_icon.png', 'Kotlin Developer', introSegment$lambda$lambda$lambda$lambda_0);
    var $receiver_0_3 = new RDOMBuilder_init(div$lambda(null));
    linkIcon_0($receiver_0_3, 'mailto:constantin.cez.b@gmail.com', 'drawable/email-open.svg', introSegment$lambda$lambda$lambda$lambda$lambda);
    linkIcon_0($receiver_0_3, 'https://www.linkedin.com/in/cezar-begu-a67207196', 'drawable/linkedin.svg', introSegment$lambda$lambda$lambda$lambda$lambda_0);
    linkIcon_0($receiver_0_3, 'https://github.com/ConstantinCezB', 'drawable/github.svg', introSegment$lambda$lambda$lambda$lambda$lambda_1);
    linkIcon_0($receiver_0_3, 'https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu', 'drawable/google-play.svg', introSegment$lambda$lambda$lambda$lambda$lambda_2);
    linkIcon_0($receiver_0_3, 'https://www.youtube.com/channel/UCaOxNPXls62EUa9PUlAq2Ng?view_as=subscriber', 'drawable/youtube.svg', introSegment$lambda$lambda$lambda$lambda$lambda_3);
    $receiver_0_1.child_52psg1$($receiver_0_3.create());
    $receiver_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_4 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    set_height($receiver_0_4.css, get_pct(30));
    $receiver_0.child_52psg1$($receiver_0_4.create());
    var $receiver_0_5 = new StyledDOMBuilder_init(styledImg$lambda(null, 'drawable/chevron-triple-down.svg'));
    var $receiver_3 = $receiver_0_5.css;
    set_display($receiver_3, Display.inlineBlock);
    set_width($receiver_3, get_em(3));
    set_height($receiver_3, get_em(3));
    $receiver_0.child_52psg1$($receiver_0_5.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var introSegment;
  function introSegment$lambda$lambda(closure$handler) {
    return function ($receiver) {
      closure$handler($receiver);
      return Unit;
    };
  }
  function introSegment$lambda_0(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(introSegment$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function introSegment_0($receiver, handler) {
    return child($receiver, introSegment, void 0, introSegment$lambda_0(handler));
  }
  function styledDiv$lambda_2(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function backgroundImage$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.block);
    padding_1($receiver_1, get_em(0));
    set_position($receiver_1, Position.fixed);
    set_top($receiver_1, get_em(0));
    set_bottom($receiver_1, get_em(0));
    set_left($receiver_1, get_em(0));
    set_right($receiver_1, get_em(0));
    set_zIndex($receiver_1, -1);
    var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
    var $receiver_2 = $receiver_0_0.css;
    set_position($receiver_2, Position.absolute);
    set_background($receiver_2, 'url(' + '"' + props.icon + '"' + ')');
    set_backgroundSize($receiver_2, 'cover');
    set_top($receiver_2, get_pct(-10));
    set_bottom($receiver_2, get_pct(10));
    set_left($receiver_2, get_pct(-10));
    set_right($receiver_2, get_pct(10));
    set_width($receiver_2, get_pct(120));
    set_height($receiver_2, get_pct(120));
    set_filter($receiver_2, 'blur(20px) brightness(0.7)');
    set_opacity($receiver_2, 1);
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var backgroundImage;
  function backgroundImage$lambda$lambda(closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.icon = closure$icon;
      closure$handler($receiver);
      return Unit;
    };
  }
  function backgroundImage$lambda_0(closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(backgroundImage$lambda$lambda(closure$icon, closure$handler));
      return Unit;
    };
  }
  function backgroundImage_0($receiver, icon, handler) {
    return child($receiver, backgroundImage, void 0, backgroundImage$lambda_0(icon, handler));
  }
  function styledImg$lambda_0(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function styledA$lambda(closure$href, closure$target) {
    return function (it) {
      return new A_init(attributesMapOf_0(['href', closure$href, 'target', closure$target]), it);
    };
  }
  function circularProfilePicture$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledA$lambda(props.link, null));
    set_display($receiver_0.css, Display.inlineBlock);
    var $receiver_0_0 = new StyledDOMBuilder_init(styledImg$lambda_0(null, props.icon));
    var $receiver_1 = $receiver_0_0.css;
    set_width($receiver_1, get_em(20));
    set_borderWidth($receiver_1, get_em(0.25));
    set_borderStyle($receiver_1, BorderStyle.solid);
    set_borderRadius($receiver_1, get_pct(50));
    set_borderColor($receiver_1, Color.Companion.currentColor);
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var circularProfilePicture;
  function circularProfilePicture$lambda$lambda(closure$link, closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.link = closure$link;
      $receiver.icon = closure$icon;
      closure$handler($receiver);
      return Unit;
    };
  }
  function circularProfilePicture$lambda_0(closure$link, closure$icon, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(circularProfilePicture$lambda$lambda(closure$link, closure$icon, closure$handler));
      return Unit;
    };
  }
  function circularProfilePicture_0($receiver, link, icon, handler) {
    return child($receiver, circularProfilePicture, void 0, circularProfilePicture$lambda_0(link, icon, handler));
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_3(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledP$lambda(it) {
    return new P_init(html.emptyMap, it);
  }
  function iframe$lambda(closure$sandbox, closure$classes) {
    return function (it) {
      return new IFRAME_init(attributesMapOf_1(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
    };
  }
  function styledArticle$lambda(it) {
    return new ARTICLE_init(html.emptyMap, it);
  }
  function experienceCard$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function experienceCard$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledArticle$lambda);
    var $receiver_1 = $receiver_0.css;
    var tmp$, tmp$_0, tmp$_1;
    set_height($receiver_1, get_em(45));
    set_width($receiver_1, get_em(35));
    padding_1($receiver_1, get_em(1));
    set_borderRadius($receiver_1, get_em(1));
    set_backgroundColor($receiver_1, new Color('#17141d'));
    tmp$ = get_em(0);
    tmp$_0 = get_em(0);
    tmp$_1 = get_em(1);
    boxShadow($receiver_1, Color.Companion.black, tmp$, tmp$_0, tmp$_1);
    var $receiver_0_0 = new RDOMBuilder_init(iframe$lambda(null, null));
    var $receiver_2 = $receiver_0_0.attrs;
    $receiver_2.width = '100%';
    $receiver_2.height = '315em';
    $receiver_2.src = props.experience.videoUrl;
    $receiver_0_0.set_hpg2xa$($receiver_2, 'frameborder', 0);
    $receiver_0_0.set_hpg2xa$($receiver_2, 'allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    $receiver_0_0.set_hpg2xa$($receiver_2, 'allowfullscreen', '');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda_3);
    padding_1($receiver_0_1.css, get_em(1));
    var $receiver_0_2 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$(props.experience.title);
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    var $receiver_0_3 = new StyledDOMBuilder_init(styledDiv$lambda_3);
    var $receiver_3 = $receiver_0_3.css;
    set_border($receiver_3, 'none');
    padding_1($receiver_3, get_em(1));
    set_width($receiver_3, LinearDimension.Companion.auto);
    set_height($receiver_3, get_em(13.5));
    set_overflowY($receiver_3, Overflow.auto);
    $receiver_0_3.unaryPlus_pdl1vz$(props.experience.description);
    $receiver_0_1.child_52psg1$($receiver_0_3.create());
    var $receiver_0_4 = new StyledDOMBuilder_init(styledP$lambda);
    set_fontSize($receiver_0_4.css, get_em(0.8));
    $receiver_0_4.unaryPlus_pdl1vz$(props.experience.time);
    $receiver_0_1.child_52psg1$($receiver_0_4.create());
    var $receiver_0_5 = new StyledDOMBuilder_init(styledDiv$lambda_3);
    var $receiver_4 = $receiver_0_5.css;
    set_display($receiver_4, Display.flex);
    set_justifyContent($receiver_4, JustifyContent.center);
    var tmp$_2;
    tmp$_2 = props.experience.redirections.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      linkIcon_0($receiver_0_5, element.url, element.icon, experienceCard$lambda$lambda$lambda$lambda$lambda$lambda);
    }
    $receiver_0_1.child_52psg1$($receiver_0_5.create());
    $receiver_0.child_52psg1$($receiver_0_1.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var experienceCard;
  function experienceCard$lambda$lambda(closure$experience, closure$handler) {
    return function ($receiver) {
      $receiver.experience = closure$experience;
      closure$handler($receiver);
      return Unit;
    };
  }
  function experienceCard$lambda_0(closure$experience, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(experienceCard$lambda$lambda(closure$experience, closure$handler));
      return Unit;
    };
  }
  function experienceCard_0($receiver, experience, handler) {
    return child($receiver, experienceCard, void 0, experienceCard$lambda_0(experience, handler));
  }
  function styledImg$lambda_1(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function styledH2$lambda(it) {
    return new H2_init_0(html.emptyMap, it);
  }
  function styledDiv$lambda_4(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function iconText$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_4);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    margin($receiver_1, void 0, void 0, get_em(2));
    var $receiver_0_0 = new StyledDOMBuilder_init(styledImg$lambda_1(null, props.icon));
    padding($receiver_0_0.css, void 0, get_em(2));
    var $receiver_2 = $receiver_0_0.attrs;
    $receiver_2.height = '32em';
    $receiver_2.width = '32em';
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledH2$lambda);
    margin_0($receiver_0_1.css, get_em(0));
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
  function styledHr$lambda(it) {
    return new HR_init(html.emptyMap, it);
  }
  function lineSeparator$lambda($receiver, f) {
    var $receiver_0 = new StyledDOMBuilder_init(styledHr$lambda);
    var $receiver_1 = $receiver_0.css;
    set_border($receiver_1, 'none');
    set_color($receiver_1, Color.Companion.currentColor);
    set_backgroundColor($receiver_1, Color.Companion.currentColor);
    margin_0($receiver_1, get_em(0));
    set_width($receiver_1, get_pct(100));
    set_height($receiver_1, get_em(0.2));
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var lineSeparator;
  function lineSeparator$lambda$lambda(closure$handler) {
    return function ($receiver) {
      closure$handler($receiver);
      return Unit;
    };
  }
  function lineSeparator$lambda_0(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(lineSeparator$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function lineSeparator_0($receiver, handler) {
    return child($receiver, lineSeparator, void 0, lineSeparator$lambda_0(handler));
  }
  function styledImg$lambda_2(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function styledA$lambda_0(closure$href, closure$target) {
    return function (it) {
      return new A_init(attributesMapOf_0(['href', closure$href, 'target', closure$target]), it);
    };
  }
  function linkIcon$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledA$lambda_0(props.link, null));
    set_display($receiver_0.css, Display.inlineBlock);
    var $receiver_0_0 = new StyledDOMBuilder_init(styledImg$lambda_2(null, props.icon));
    var $receiver_1 = $receiver_0_0.css;
    set_width($receiver_1, get_em(2));
    set_height($receiver_1, get_em(2));
    margin_1($receiver_1, void 0, get_em(0.5));
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
  var package$data = _.data || (_.data = {});
  package$data.Experience = Experience;
  package$data.Redirection = Redirection;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  _.main = main;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  var package$segment = _.segment || (_.segment = {});
  package$segment.experienceSegment_61g9q1$ = experienceSegment_0;
  package$segment.introSegment_1hs4h9$ = introSegment_0;
  var package$views = _.views || (_.views = {});
  package$views.backgroundImage_p41x75$ = backgroundImage_0;
  package$views.circularProfilePicture_r5jfew$ = circularProfilePicture_0;
  package$views.experienceCard_sp0xow$ = experienceCard_0;
  package$views.iconText_h7tj22$ = iconText_0;
  package$views.lineSeparator_1hs4h9$ = lineSeparator_0;
  package$views.linkIcon_7nb38n$ = linkIcon_0;
  experienceSegment = functionalComponent(experienceSegment$lambda);
  introSegment = functionalComponent(introSegment$lambda);
  backgroundImage = functionalComponent(backgroundImage$lambda);
  circularProfilePicture = functionalComponent(circularProfilePicture$lambda);
  experienceCard = functionalComponent(experienceCard$lambda);
  iconText = functionalComponent(iconText$lambda);
  lineSeparator = functionalComponent(lineSeparator$lambda);
  linkIcon = functionalComponent(linkIcon$lambda);
  main();
  Kotlin.defineModule('Personal_Webpage', _);
  return _;
}));

//# sourceMappingURL=Personal_Webpage.js.map
