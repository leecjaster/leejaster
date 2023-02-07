"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 3204:
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 2635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/camelcase/index.js
var camelcase = __webpack_require__(3204);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=(/* unused pure expression or super */ null && (4/3)),c=function(e){return console.warn(e);},h=function(e,t){return e-t;},g=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function p(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function m(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,c=e.formats,h=void 0===c?["auto","webp"]:c;return h=h.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:h,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||d))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/d):800),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:h}));}function f(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=m(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function v(e){var t,a=(e=m(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,f=e.height,v=e.filename,k=e.reporter,E=void 0===k?{warn:c}:k,M=e.backgroundColor,S=e.placeholderURL;if(a||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=p(v)):i={width:h,height:f,format:(null==(t=i)?void 0:t.format)||p(v)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(E.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:c}:o,d=e.breakpoints,h=void 0===d?l:d,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:c}:u,h=a.width/a.height,g=w(void 0===l?s:l);if(i&&r){var p=b(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";d.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?y(e):"fullWidth"===i?y(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(v,t,Math.round(t/x.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;E.warn("["+a+"] The resolver for image "+v+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:g(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:g(t),sizes:W,type:"image/"+e});}});var j={images:I,layout:o,backgroundColor:M};switch(S&&(j.placeholder={fallback:S}),o){case"fixed":j.width=x.presentationWidth,j.height=x.presentationHeight;break;case"fullWidth":j.width=1,j.height=1/x.aspectRatio;break;case"constrained":j.width=e.width||x.presentationWidth||1,j.height=(j.width||1)/x.aspectRatio;}return j;}var w=function(e){return Array.from(new Set([1].concat(e))).sort(h);};function y(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,d=e.layout,c=a.width/a.height,g=w(void 0===l?s:l);if(i&&r){var p=b(a,{width:i,height:r,fit:o});i=p.width,r=p.height,c=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/c),i||(i=r*c);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(h),aspectRatio:c,presentationWidth:m,presentationHeight:Math.round(m/c),unscaledWidth:i};}function b(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var k=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),E=(/* unused pure expression or super */ null && (["images","placeholder"]));function M(){return true&&true;}var S=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},N=function(e){var t,a,i;return null==(t=S(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},x=function(e){var t,a,i;return null==(t=S(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function I(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,k);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),v(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function W(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,E),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var j,R=["src","srcSet","loading","alt","shouldLoad"],_=["fallback","sources","shouldLoad"],A=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,R);return/*#__PURE__*/react.createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},O=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,_),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react.createElement(A,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react.createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react.createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};A.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},O.displayName="Picture",O.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var T=["fallback"],z=function(t){var a=t.fallback,i=o(t,T);return a?/*#__PURE__*/react.createElement(O,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react.createElement("div",n({},i));};z.displayName="Placeholder",z.propTypes={fallback:prop_types.string,sources:null==(j=O.propTypes)?void 0:j.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var L=function(t){return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(O,n({},t)),/*#__PURE__*/react.createElement("noscript",null,/*#__PURE__*/react.createElement(O,n({},t,{shouldLoad:!0}))));};L.displayName="MainImage",L.propTypes=O.propTypes;var q=["children"],C=function(){return/*#__PURE__*/react.createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},D=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react.createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},P=function(a){var i=a.children,r=o(a,q);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(D,n({},r)),i,/*#__PURE__*/react.createElement(C,null));},H=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],F=["style","className"],B=function(e){return e.replace(/\n/g,"");},G=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,H);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,S=u.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return M()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(M()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,F),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?B(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:B(e.srcSet)});})),/*#__PURE__*/react.createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react.createElement(P,{layout:b,width:w,height:y},/*#__PURE__*/react.createElement(z,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return M()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,S,m,f))),/*#__PURE__*/react.createElement(L,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),M()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},V=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],U=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,V);return s&&console.warn(s),r?/*#__PURE__*/react.createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(G),X=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},Y=new Set(["fixed","fullWidth","constrained"]),Z={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:X,height:X,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!Y.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};U.displayName="StaticImage",U.propTypes=Z;
;// CONCATENATED MODULE: ./src/components/header.js
function Header({siteTitle}){const{0:isExpanded,1:toggleExpansion}=(0,react.useState)(false);return/*#__PURE__*/react.createElement("nav",{className:"flex flex-wrap items-center justify-between p-6 bg-gray-100"},/*#__PURE__*/react.createElement("div",{className:"flex items-center flex-shrink-0 mr-6 text-white"},/*#__PURE__*/react.createElement("span",{className:"text-xl font-semibold tracking-tight"},/*#__PURE__*/react.createElement(U,{src:"../images/lee-jaster-logo.png",loading:"eager",width:50,quality:95,formats:["auto","webp","avif"],alt:"",__imageData:__webpack_require__(282)}))),/*#__PURE__*/react.createElement("div",{className:"block lg:hidden"},/*#__PURE__*/react.createElement("button",{onClick:()=>toggleExpansion(!isExpanded),className:"flex items-center px-3 py-2 text-black rounded hover:text-grey hover:border-grey"},/*#__PURE__*/react.createElement("svg",{className:"w-5 h-5 fill-black",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/react.createElement("title",null,"Menu"),/*#__PURE__*/react.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),/*#__PURE__*/react.createElement("div",{className:`${isExpanded?`block`:`hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`},/*#__PURE__*/react.createElement("div",{className:"text-sm lg:flex-grow"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:`/`,href:"#responsive-header",className:"block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"},"Home"),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:`/page-2`,className:"block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"},"page 2")),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("a",{href:"https://github.com/kosvrouvas/gatsby-tailwindcss-starter",target:"_blank",rel:"noreferrer",className:"inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"},"Download"))));}Header.propTypes={siteTitle:(prop_types_default()).string};Header.defaultProps={siteTitle:``};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Layout=({children})=>{var _data$site$siteMetada;const data=(0,gatsby_browser_entry.useStaticQuery)("3649515864");return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(header,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`}),/*#__PURE__*/react.createElement("main",null,children),/*#__PURE__*/react.createElement("footer",{style:{marginTop:`var(--space-5)`,fontSize:`var(--font-sm)`}},"\xA9 ",new Date().getFullYear()," \xB7 Built with",` `,/*#__PURE__*/react.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */function Seo({description,title,children}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?`${title} | ${defaultTitle}`:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2635);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9357);
const NotFoundPage=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"404: Not Found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"You just hit a route that doesn't exist... the sadness."));const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:"404: Not Found"});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0a60196adfa69b63979014b318088601/3f67e/lee-jaster-logo.png","srcSet":"/static/0a60196adfa69b63979014b318088601/8dbfb/lee-jaster-logo.png 13w,\\n/static/0a60196adfa69b63979014b318088601/d4fed/lee-jaster-logo.png 25w,\\n/static/0a60196adfa69b63979014b318088601/3f67e/lee-jaster-logo.png 50w,\\n/static/0a60196adfa69b63979014b318088601/c955f/lee-jaster-logo.png 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/0a60196adfa69b63979014b318088601/1f193/lee-jaster-logo.avif 13w,\\n/static/0a60196adfa69b63979014b318088601/6f17a/lee-jaster-logo.avif 25w,\\n/static/0a60196adfa69b63979014b318088601/2b6cf/lee-jaster-logo.avif 50w,\\n/static/0a60196adfa69b63979014b318088601/40d21/lee-jaster-logo.avif 100w","type":"image/avif","sizes":"(min-width: 50px) 50px, 100vw"},{"srcSet":"/static/0a60196adfa69b63979014b318088601/41559/lee-jaster-logo.webp 13w,\\n/static/0a60196adfa69b63979014b318088601/b02a1/lee-jaster-logo.webp 25w,\\n/static/0a60196adfa69b63979014b318088601/182c0/lee-jaster-logo.webp 50w,\\n/static/0a60196adfa69b63979014b318088601/db382/lee-jaster-logo.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":30}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map