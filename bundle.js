(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var choo = require('choo')
var css = 0
var app = choo()

;((require('insert-css')("/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTs7O0dBR0c7O0FBRUg7RUFDRSx3QkFBd0IsQ0FBQyxPQUFPO0VBQ2hDLDJCQUEyQixDQUFDLE9BQU87RUFDbkMsK0JBQStCLENBQUMsT0FBTztDQUN4Qzs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7O0dBSUc7O0FBRUg7Ozs7Ozs7Ozs7O1VBV1UsT0FBTztFQUNmLGVBQWU7Q0FDaEI7O0FBRUQ7O0dBRUc7O0FBRUg7Ozs7RUFJRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsVUFBVTtDQUNYOztBQUVEOztHQUVHOztBQUVIO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSxjQUFjO0NBQ2Y7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHNDQUFzQyxDQUFDLE9BQU87Q0FDL0M7O0FBRUQ7OztHQUdHOztBQUVIOztFQUVFLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDtFQUNFLG9CQUFvQixDQUFDLE9BQU87RUFDNUIsMkJBQTJCLENBQUMsT0FBTztFQUNuQyxrQ0FBa0MsQ0FBQyxPQUFPO0NBQzNDOztBQUVEOztHQUVHOztBQUVIOztFQUVFLHFCQUFxQjtDQUN0Qjs7QUFFRDs7R0FFRzs7QUFFSDs7RUFFRSxvQkFBb0I7Q0FDckI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7Z0ZBQ2dGOztBQUVoRjs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtnRkFDZ0Y7O0FBRWhGOzs7R0FHRzs7QUFFSDs7OztFQUlFLGtDQUFrQyxDQUFDLE9BQU87RUFDMUMsZUFBZSxDQUFDLE9BQU87Q0FDeEI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7OztHQUdHOztBQUVIO0VBQ0Usd0JBQXdCLENBQUMsT0FBTztFQUNoQyxVQUFVLENBQUMsT0FBTztFQUNsQixrQkFBa0IsQ0FBQyxPQUFPO0NBQzNCOztBQUVEO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIOzs7O0VBSUUsY0FBYyxDQUFDLE9BQU87RUFDdEIsVUFBVSxDQUFDLE9BQU87Q0FDbkI7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7OztHQUdHOztBQUVIO1FBQ1EsT0FBTztFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDs7O0dBR0c7O0FBRUg7U0FDUyxPQUFPO0VBQ2QscUJBQXFCO0NBQ3RCOztBQUVEOzs7O0dBSUc7O0FBRUg7Ozs7RUFJRSwyQkFBMkIsQ0FBQyxPQUFPO0NBQ3BDOztBQUVEOztHQUVHOztBQUVIOzs7O0VBSUUsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFFRDs7R0FFRzs7QUFFSDs7OztFQUlFLCtCQUErQjtDQUNoQzs7QUFFRDs7R0FFRzs7QUFFSDtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsK0JBQStCO0NBQ2hDOztBQUVEOzs7OztHQUtHOztBQUVIO0VBQ0UsdUJBQXVCLENBQUMsT0FBTztFQUMvQixlQUFlLENBQUMsT0FBTztFQUN2QixlQUFlLENBQUMsT0FBTztFQUN2QixnQkFBZ0IsQ0FBQyxPQUFPO0VBQ3hCLFdBQVcsQ0FBQyxPQUFPO0VBQ25CLG9CQUFvQixDQUFDLE9BQU87Q0FDN0I7O0FBRUQ7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0NBQ2hCOztBQUVEOzs7R0FHRzs7QUFFSDs7RUFFRSx1QkFBdUIsQ0FBQyxPQUFPO0VBQy9CLFdBQVcsQ0FBQyxPQUFPO0NBQ3BCOztBQUVEOztHQUVHOztBQUVIOztFQUVFLGFBQWE7Q0FDZDs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEIsQ0FBQyxPQUFPO0VBQ3RDLHFCQUFxQixDQUFDLE9BQU87Q0FDOUI7O0FBRUQ7O0dBRUc7O0FBRUg7O0VBRUUseUJBQXlCO0NBQzFCOztBQUVEOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGNBQWM7Q0FDZjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFDRSwyQkFBMkIsQ0FBQyxPQUFPO0VBQ25DLGNBQWMsQ0FBQyxPQUFPO0NBQ3ZCIiwiZmlsZSI6InRvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBub3JtYWxpemUuY3NzIHY0LjEuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGRlZmF1bHQgZm9udCBmYW1pbHkgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIElFIGFuZCBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cbiAqL1xuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLCAvKiAxICovXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxubWFpbiwgLyogMiAqL1xubWVudSxcbm5hdixcbnNlY3Rpb24sXG5zdW1tYXJ5IHsgLyogMSAqL1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNy5cbiAqL1xuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cbiAqL1xuXG50ZW1wbGF0ZSwgLyogMSAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBMaW5rc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG91dGxpbmUgb24gZm9jdXNlZCBsaW5rcyB3aGVuIHRoZXkgYXJlIGFsc28gYWN0aXZlIG9yIGhvdmVyZWRcbiAqIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxuICovXG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBGaXJlZm94IDM5LS5cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cbiAqL1xuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cbiAqL1xuXG5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqL1xuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cbiAqL1xuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udDogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb250IHdlaWdodCB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5vcHRncm91cCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2BcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaHRtbCBbdHlwZT1cImJ1dHRvblwiXSwgLyogMSAqL1xuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cbiAqL1xuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG9wYWNpdHk6IDAuNTQ7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufSJdfQ== */") || true) && "_fc852e61")
;((require('insert-css')("/*! Basscss | http://basscss.com | MIT License */\n\n/* Basscss Type Scale */\n\n.h1 { font-size: 32px; font-size: 32px; font-size: 2rem }\n.h2 { font-size: 24px; font-size: 24px; font-size: 1.5rem }\n.h3 { font-size: 20px; font-size: 20px; font-size: 1.25rem }\n.h4 { font-size: 16px; font-size: 16px; font-size: 1rem }\n.h5 { font-size: 14px; font-size: 14px; font-size: .875rem }\n.h6 { font-size: 12px; font-size: 12px; font-size: .75rem }\n/* Basscss Typography */\n\n.font-family-inherit { font-family: inherit }\n.font-size-inherit { font-size: inherit }\n.text-decoration-none { text-decoration: none }\n\n.bold    { font-weight: bold; font-weight: bold }\n.regular { font-weight: normal }\n.italic  { font-style: italic }\n.caps    { text-transform: uppercase; letter-spacing: .2em; }\n\n.left-align   { text-align: left }\n.center       { text-align: center }\n.right-align  { text-align: right }\n.justify      { text-align: justify }\n\n.nowrap { white-space: nowrap }\n.break-word { word-wrap: break-word }\n\n.line-height-1 { line-height: 1 }\n.line-height-2 { line-height: 1.125 }\n.line-height-3 { line-height: 1.25 }\n.line-height-4 { line-height: 1.5 }\n\n.list-style-none { list-style: none }\n.underline { text-decoration: underline }\n\n.truncate {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.list-reset {\n  list-style: none;\n  padding-left: 0;\n}\n/* Basscss Layout */\n\n.inline       { display: inline }\n.block        { display: block }\n.inline-block { display: inline-block }\n.table        { display: table }\n.table-cell   { display: table-cell }\n\n.overflow-hidden { overflow: hidden }\n.overflow-scroll { overflow: scroll }\n.overflow-auto   { overflow: auto }\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table\n}\n.clearfix:after { clear: both }\n\n.left  { float: left }\n.right { float: right }\n\n.fit { max-width: 100% }\n\n.max-width-1 { max-width: 384px; max-width: 384px; max-width: 24rem }\n.max-width-2 { max-width: 512px; max-width: 512px; max-width: 32rem }\n.max-width-3 { max-width: 768px; max-width: 768px; max-width: 48rem }\n.max-width-4 { max-width: 1024px; max-width: 1024px; max-width: 64rem }\n\n.border-box { box-sizing: border-box }\n/* Basscss Align */\n\n.align-baseline { vertical-align: baseline }\n.align-top      { vertical-align: top }\n.align-middle   { vertical-align: middle }\n.align-bottom   { vertical-align: bottom }\n/* Basscss Margin */\n\n.m0  { margin:        0 }\n.mt0 { margin-top:    0 }\n.mr0 { margin-right:  0 }\n.mb0 { margin-bottom: 0 }\n.ml0 { margin-left:   0 }\n.mx0 { margin-left:   0; margin-right:  0 }\n.my0 { margin-top:    0; margin-bottom: 0 }\n\n.m1  { margin: 8px; margin: 8px; margin: .5rem }\n.mt1 { margin-top: 8px; margin-top: 8px; margin-top: .5rem }\n.mr1 { margin-right: 8px; margin-right: 8px; margin-right: .5rem }\n.mb1 { margin-bottom: 8px; margin-bottom: 8px; margin-bottom: .5rem }\n.ml1 { margin-left: 8px; margin-left: 8px; margin-left: .5rem }\n.mx1 { margin-left: 8px; margin-left: 8px; margin-left: .5rem; margin-right: 8px; margin-right: 8px; margin-right: .5rem }\n.my1 { margin-top: 8px; margin-top: 8px; margin-top: .5rem; margin-bottom: 8px; margin-bottom: 8px; margin-bottom: .5rem }\n\n.m2  { margin: 16px; margin: 16px; margin: 1rem }\n.mt2 { margin-top: 16px; margin-top: 16px; margin-top: 1rem }\n.mr2 { margin-right: 16px; margin-right: 16px; margin-right: 1rem }\n.mb2 { margin-bottom: 16px; margin-bottom: 16px; margin-bottom: 1rem }\n.ml2 { margin-left: 16px; margin-left: 16px; margin-left: 1rem }\n.mx2 { margin-left: 16px; margin-left: 16px; margin-left: 1rem; margin-right: 16px; margin-right: 16px; margin-right: 1rem }\n.my2 { margin-top: 16px; margin-top: 16px; margin-top: 1rem; margin-bottom: 16px; margin-bottom: 16px; margin-bottom: 1rem }\n\n.m3  { margin: 32px; margin: 32px; margin: 2rem }\n.mt3 { margin-top: 32px; margin-top: 32px; margin-top: 2rem }\n.mr3 { margin-right: 32px; margin-right: 32px; margin-right: 2rem }\n.mb3 { margin-bottom: 32px; margin-bottom: 32px; margin-bottom: 2rem }\n.ml3 { margin-left: 32px; margin-left: 32px; margin-left: 2rem }\n.mx3 { margin-left: 32px; margin-left: 32px; margin-left: 2rem; margin-right: 32px; margin-right: 32px; margin-right: 2rem }\n.my3 { margin-top: 32px; margin-top: 32px; margin-top: 2rem; margin-bottom: 32px; margin-bottom: 32px; margin-bottom: 2rem }\n\n.m4  { margin: 64px; margin: 64px; margin: 4rem }\n.mt4 { margin-top: 64px; margin-top: 64px; margin-top: 4rem }\n.mr4 { margin-right: 64px; margin-right: 64px; margin-right: 4rem }\n.mb4 { margin-bottom: 64px; margin-bottom: 64px; margin-bottom: 4rem }\n.ml4 { margin-left: 64px; margin-left: 64px; margin-left: 4rem }\n.mx4 { margin-left: 64px; margin-left: 64px; margin-left: 4rem; margin-right: 64px; margin-right: 64px; margin-right: 4rem }\n.my4 { margin-top: 64px; margin-top: 64px; margin-top: 4rem; margin-bottom: 64px; margin-bottom: 64px; margin-bottom: 4rem }\n\n.mxn1 { margin-left: -8px; margin-left: -8px; margin-left: -.5rem; margin-right: -8px; margin-right: -8px; margin-right: -.5rem; }\n.mxn2 { margin-left: -16px; margin-left: -16px; margin-left: -1rem; margin-right: -16px; margin-right: -16px; margin-right: -1rem; }\n.mxn3 { margin-left: -32px; margin-left: -32px; margin-left: -2rem; margin-right: -32px; margin-right: -32px; margin-right: -2rem; }\n.mxn4 { margin-left: -64px; margin-left: -64px; margin-left: -4rem; margin-right: -64px; margin-right: -64px; margin-right: -4rem; }\n\n.ml-auto { margin-left: auto }\n.mr-auto { margin-right: auto }\n.mx-auto { margin-left: auto; margin-right: auto; }\n/* Basscss Padding */\n\n.p0  { padding: 0 }\n.pt0 { padding-top: 0 }\n.pr0 { padding-right: 0 }\n.pb0 { padding-bottom: 0 }\n.pl0 { padding-left: 0 }\n.px0 { padding-left: 0; padding-right:  0 }\n.py0 { padding-top: 0;  padding-bottom: 0 }\n\n.p1  { padding: 8px; padding: 8px; padding: .5rem }\n.pt1 { padding-top: 8px; padding-top: 8px; padding-top: .5rem }\n.pr1 { padding-right: 8px; padding-right: 8px; padding-right: .5rem }\n.pb1 { padding-bottom: 8px; padding-bottom: 8px; padding-bottom: .5rem }\n.pl1 { padding-left: 8px; padding-left: 8px; padding-left: .5rem }\n.py1 { padding-top: 8px; padding-top: 8px; padding-top: .5rem; padding-bottom: 8px; padding-bottom: 8px; padding-bottom: .5rem }\n.px1 { padding-left: 8px; padding-left: 8px; padding-left: .5rem; padding-right: 8px; padding-right: 8px; padding-right: .5rem }\n\n.p2  { padding: 16px; padding: 16px; padding: 1rem }\n.pt2 { padding-top: 16px; padding-top: 16px; padding-top: 1rem }\n.pr2 { padding-right: 16px; padding-right: 16px; padding-right: 1rem }\n.pb2 { padding-bottom: 16px; padding-bottom: 16px; padding-bottom: 1rem }\n.pl2 { padding-left: 16px; padding-left: 16px; padding-left: 1rem }\n.py2 { padding-top: 16px; padding-top: 16px; padding-top: 1rem; padding-bottom: 16px; padding-bottom: 16px; padding-bottom: 1rem }\n.px2 { padding-left: 16px; padding-left: 16px; padding-left: 1rem; padding-right: 16px; padding-right: 16px; padding-right: 1rem }\n\n.p3  { padding: 32px; padding: 32px; padding: 2rem }\n.pt3 { padding-top: 32px; padding-top: 32px; padding-top: 2rem }\n.pr3 { padding-right: 32px; padding-right: 32px; padding-right: 2rem }\n.pb3 { padding-bottom: 32px; padding-bottom: 32px; padding-bottom: 2rem }\n.pl3 { padding-left: 32px; padding-left: 32px; padding-left: 2rem }\n.py3 { padding-top: 32px; padding-top: 32px; padding-top: 2rem; padding-bottom: 32px; padding-bottom: 32px; padding-bottom: 2rem }\n.px3 { padding-left: 32px; padding-left: 32px; padding-left: 2rem; padding-right: 32px; padding-right: 32px; padding-right: 2rem }\n\n.p4  { padding: 64px; padding: 64px; padding: 4rem }\n.pt4 { padding-top: 64px; padding-top: 64px; padding-top: 4rem }\n.pr4 { padding-right: 64px; padding-right: 64px; padding-right: 4rem }\n.pb4 { padding-bottom: 64px; padding-bottom: 64px; padding-bottom: 4rem }\n.pl4 { padding-left: 64px; padding-left: 64px; padding-left: 4rem }\n.py4 { padding-top: 64px; padding-top: 64px; padding-top: 4rem; padding-bottom: 64px; padding-bottom: 64px; padding-bottom: 4rem }\n.px4 { padding-left: 64px; padding-left: 64px; padding-left: 4rem; padding-right: 64px; padding-right: 64px; padding-right: 4rem }\n/* Basscss Grid */\n\n.col {\n  float: left;\n  box-sizing: border-box;\n}\n\n.col-right {\n  float: right;\n  box-sizing: border-box;\n}\n\n.col-1 {\n  width: 8.33333%;\n}\n\n.col-2 {\n  width: 16.66667%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-4 {\n  width: 33.33333%;\n}\n\n.col-5 {\n  width: 41.66667%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-7 {\n  width: 58.33333%;\n}\n\n.col-8 {\n  width: 66.66667%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-10 {\n  width: 83.33333%;\n}\n\n.col-11 {\n  width: 91.66667%;\n}\n\n.col-12 {\n  width: 100%;\n}\n@media (min-width: 40em) {\n\n  .sm-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .sm-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .sm-col-1 {\n    width: 8.33333%;\n  }\n\n  .sm-col-2 {\n    width: 16.66667%;\n  }\n\n  .sm-col-3 {\n    width: 25%;\n  }\n\n  .sm-col-4 {\n    width: 33.33333%;\n  }\n\n  .sm-col-5 {\n    width: 41.66667%;\n  }\n\n  .sm-col-6 {\n    width: 50%;\n  }\n\n  .sm-col-7 {\n    width: 58.33333%;\n  }\n\n  .sm-col-8 {\n    width: 66.66667%;\n  }\n\n  .sm-col-9 {\n    width: 75%;\n  }\n\n  .sm-col-10 {\n    width: 83.33333%;\n  }\n\n  .sm-col-11 {\n    width: 91.66667%;\n  }\n\n  .sm-col-12 {\n    width: 100%;\n  }\n\n}\n@media (min-width: 52em) {\n\n  .md-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .md-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .md-col-1 {\n    width: 8.33333%;\n  }\n\n  .md-col-2 {\n    width: 16.66667%;\n  }\n\n  .md-col-3 {\n    width: 25%;\n  }\n\n  .md-col-4 {\n    width: 33.33333%;\n  }\n\n  .md-col-5 {\n    width: 41.66667%;\n  }\n\n  .md-col-6 {\n    width: 50%;\n  }\n\n  .md-col-7 {\n    width: 58.33333%;\n  }\n\n  .md-col-8 {\n    width: 66.66667%;\n  }\n\n  .md-col-9 {\n    width: 75%;\n  }\n\n  .md-col-10 {\n    width: 83.33333%;\n  }\n\n  .md-col-11 {\n    width: 91.66667%;\n  }\n\n  .md-col-12 {\n    width: 100%;\n  }\n\n}\n@media (min-width: 64em) {\n\n  .lg-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .lg-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .lg-col-1 {\n    width: 8.33333%;\n  }\n\n  .lg-col-2 {\n    width: 16.66667%;\n  }\n\n  .lg-col-3 {\n    width: 25%;\n  }\n\n  .lg-col-4 {\n    width: 33.33333%;\n  }\n\n  .lg-col-5 {\n    width: 41.66667%;\n  }\n\n  .lg-col-6 {\n    width: 50%;\n  }\n\n  .lg-col-7 {\n    width: 58.33333%;\n  }\n\n  .lg-col-8 {\n    width: 66.66667%;\n  }\n\n  .lg-col-9 {\n    width: 75%;\n  }\n\n  .lg-col-10 {\n    width: 83.33333%;\n  }\n\n  .lg-col-11 {\n    width: 91.66667%;\n  }\n\n  .lg-col-12 {\n    width: 100%;\n  }\n\n}\n.flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n\n@media (min-width: 40em) {\n  .sm-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 52em) {\n  .md-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 64em) {\n  .lg-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n.flex-column  { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column }\n.flex-wrap    { -ms-flex-wrap: wrap; flex-wrap: wrap }\n\n.items-start    { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start }\n.items-end      { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end }\n.items-center   { -webkit-box-align: center; -ms-flex-align: center; align-items: center }\n.items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline }\n.items-stretch  { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch }\n\n.self-start    { -ms-flex-item-align: start; align-self: flex-start }\n.self-end      { -ms-flex-item-align: end; align-self: flex-end }\n.self-center   { -ms-flex-item-align: center; align-self: center }\n.self-baseline { -ms-flex-item-align: baseline; align-self: baseline }\n.self-stretch  { -ms-flex-item-align: stretch; align-self: stretch }\n\n.justify-start   { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start }\n.justify-end     { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end }\n.justify-center  { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center }\n.justify-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between }\n.justify-around  { -ms-flex-pack: distribute; justify-content: space-around }\n\n.content-start   { -ms-flex-line-pack: start; align-content: flex-start }\n.content-end     { -ms-flex-line-pack: end; align-content: flex-end }\n.content-center  { -ms-flex-line-pack: center; align-content: center }\n.content-between { -ms-flex-line-pack: justify; align-content: space-between }\n.content-around  { -ms-flex-line-pack: distribute; align-content: space-around }\n.content-stretch { -ms-flex-line-pack: stretch; align-content: stretch }\n\n/* 1. Fix for Chrome 44 bug. https://code.google.com/p/chromium/issues/detail?id=506893 */\n.flex-auto {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  min-width: 0; /* 1 */\n  min-height: 0; /* 1 */\n}\n.flex-none { -webkit-box-flex: 0; -ms-flex: none; flex: none }\n\n.order-0 { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0 }\n.order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1 }\n.order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2 }\n.order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3 }\n.order-last { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999 }\n/* Basscss Position */\n\n.relative { position: relative }\n.absolute { position: absolute }\n.fixed    { position: fixed }\n\n.top-0    { top: 0 }\n.right-0  { right: 0 }\n.bottom-0 { bottom: 0 }\n.left-0   { left: 0 }\n\n.z1 { z-index: 1 }\n.z2 { z-index: 2 }\n.z3 { z-index: 3 }\n.z4 { z-index: 4 }\n/* Basscss Border */\n\n.border {\n  border-style: solid;\n  border-width: 1px;\n}\n\n.border-top {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.border-right {\n  border-right-style: solid;\n  border-right-width: 1px;\n}\n\n.border-bottom {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.border-left {\n  border-left-style: solid;\n  border-left-width: 1px;\n}\n\n.border-none { border: 0 }\n\n.rounded { border-radius: 3px }\n.circle  { border-radius: 50% }\n\n.rounded-top    { border-radius: 3px 3px 0 0 }\n.rounded-right  { border-radius: 0 3px 3px 0 }\n.rounded-bottom { border-radius: 0 0 3px 3px }\n.rounded-left   { border-radius: 3px 0 0 3px }\n\n.not-rounded { border-radius: 0 }\n/* Basscss Hide */\n\n.hide {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n@media (max-width: 40em) {\n  .xs-hide { display: none !important }\n}\n\n@media (min-width: 40em) and (max-width: 52em) {\n  .sm-hide { display: none !important }\n}\n\n@media (min-width: 52em) and (max-width: 64em) {\n  .md-hide { display: none !important }\n}\n\n@media (min-width: 64em) {\n  .lg-hide { display: none !important }\n}\n\n.display-none { display: none !important }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL2Jhc3Njc3MuY3NzIiwibm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy10eXBlLXNjYWxlL2luZGV4LmNzcyIsIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3MtdHlwb2dyYXBoeS9pbmRleC5jc3MiLCJub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzLWxheW91dC9pbmRleC5jc3MiLCJub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzLWFsaWduL2luZGV4LmNzcyIsIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3MtbWFyZ2luL2luZGV4LmNzcyIsIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3MtcGFkZGluZy9pbmRleC5jc3MiLCJub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzLWdyaWQvaW5kZXguY3NzIiwibm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy1ncmlkL2xpYi9ncmlkLmNzcyIsIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3MtZ3JpZC9saWIvc20tZ3JpZC5jc3MiLCJub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzLWdyaWQvbGliL21kLWdyaWQuY3NzIiwibm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy1ncmlkL2xpYi9sZy1ncmlkLmNzcyIsIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3MtZmxleGJveC9pbmRleC5jc3MiLCJub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3Mvc3JjL25vZGVfbW9kdWxlcy9iYXNzY3NzLXBvc2l0aW9uL2luZGV4LmNzcyIsIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3MtYm9yZGVyL2luZGV4LmNzcyIsIm5vZGVfbW9kdWxlcy9iYXNzY3NzL3NyYy9ub2RlX21vZHVsZXMvYmFzc2Nzcy9zcmMvbm9kZV9tb2R1bGVzL2Jhc3Njc3MtaGlkZS9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQ0FqRCx3QkFBd0I7O0FBRXhCLE1BQU0sZ0JBQW9CLENBQXBCLGdCQUFvQixDQUFwQixlQUFvQixFQUFFO0FBQzVCLE1BQU0sZ0JBQW9CLENBQXBCLGdCQUFvQixDQUFwQixpQkFBb0IsRUFBRTtBQUM1QixNQUFNLGdCQUFvQixDQUFwQixnQkFBb0IsQ0FBcEIsa0JBQW9CLEVBQUU7QUFDNUIsTUFBTSxnQkFBb0IsQ0FBcEIsZ0JBQW9CLENBQXBCLGVBQW9CLEVBQUU7QUFDNUIsTUFBTSxnQkFBb0IsQ0FBcEIsZ0JBQW9CLENBQXBCLGtCQUFvQixFQUFFO0FBQzVCLE1BQU0sZ0JBQW9CLENBQXBC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RUFBRTs7QUFFL0Isa0JBQWtCLDBCQUE0RCxFQUFFO0FBQ2hGLGtCQUFrQiwwQkFBNEQsRUFBRTtBQUNoRixrQkFBa0IsMEJBQTRELEVBQUU7QUFDaEYsa0JBQWtCLDBCQUE0RCxFQUFFOztBQUVoRixlQUFlLGdCQUFnQixFQUFFO0FDckNqQyxrQkFBa0I7O0FBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLFdBQVcsd0JBQXdCLEVBQUU7Q0FDdEM7O0FBRUQ7RUFDRSxXQUFXLHdCQUF3QixFQUFFO0NBQ3RDOztBQUVEO0VBQ0UsV0FBVyx3QkFBd0IsRUFBRTtDQUN0Qzs7QUFFRDtFQUNFLFdBQVcsd0JBQXdCLEVBQUU7Q0FDdEM7O0FBRUQsZ0JBQWdCLHdCQUF3QixFQUFFIiwiZmlsZSI6InRvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBCYXNzY3NzIHwgaHR0cDovL2Jhc3Njc3MuY29tIHwgTUlUIExpY2Vuc2UgKi9cblxuQGltcG9ydCAnYmFzc2Nzcy10eXBlLXNjYWxlJztcbkBpbXBvcnQgJ2Jhc3Njc3MtdHlwb2dyYXBoeSc7XG5AaW1wb3J0ICdiYXNzY3NzLWxheW91dCc7XG5AaW1wb3J0ICdiYXNzY3NzLWFsaWduJztcbkBpbXBvcnQgJ2Jhc3Njc3MtbWFyZ2luJztcbkBpbXBvcnQgJ2Jhc3Njc3MtcGFkZGluZyc7XG5AaW1wb3J0ICdiYXNzY3NzLWdyaWQnO1xuQGltcG9ydCAnYmFzc2Nzcy1mbGV4Ym94JztcbkBpbXBvcnQgJ2Jhc3Njc3MtcG9zaXRpb24nO1xuQGltcG9ydCAnYmFzc2Nzcy1ib3JkZXInO1xuQGltcG9ydCAnYmFzc2Nzcy1oaWRlJzsiLCIvKiBCYXNzY3NzIFR5cGUgU2NhbGUgKi9cblxuLmgxIHsgZm9udC1zaXplOiB2YXIoLS1oMSkgfVxuLmgyIHsgZm9udC1zaXplOiB2YXIoLS1oMikgfVxuLmgzIHsgZm9udC1zaXplOiB2YXIoLS1oMykgfVxuLmg0IHsgZm9udC1zaXplOiB2YXIoLS1oNCkgfVxuLmg1IHsgZm9udC1zaXplOiB2YXIoLS1oNSkgfVxuLmg2IHsgZm9udC1zaXplOiB2YXIoLS1oNikgfVxuXG46cm9vdCB7XG4gIC0taDE6IDJyZW07XG4gIC0taDI6IDEuNXJlbTtcbiAgLS1oMzogMS4yNXJlbTtcbiAgLS1oNDogMXJlbTtcbiAgLS1oNTogLjg3NXJlbTtcbiAgLS1oNjogLjc1cmVtO1xufVxuIiwiLyogQmFzc2NzcyBUeXBvZ3JhcGh5ICovXG5cbi5mb250LWZhbWlseS1pbmhlcml0IHsgZm9udC1mYW1pbHk6IGluaGVyaXQgfVxuLmZvbnQtc2l6ZS1pbmhlcml0IHsgZm9udC1zaXplOiBpbmhlcml0IH1cbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZSB9XG5cbi5ib2xkICAgIHsgZm9udC13ZWlnaHQ6IHZhcigtLWJvbGQtZm9udC13ZWlnaHQsIGJvbGQpIH1cbi5yZWd1bGFyIHsgZm9udC13ZWlnaHQ6IG5vcm1hbCB9XG4uaXRhbGljICB7IGZvbnQtc3R5bGU6IGl0YWxpYyB9XG4uY2FwcyAgICB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiB2YXIoLS1jYXBzLWxldHRlci1zcGFjaW5nKTsgfVxuXG4ubGVmdC1hbGlnbiAgIHsgdGV4dC1hbGlnbjogbGVmdCB9XG4uY2VudGVyICAgICAgIHsgdGV4dC1hbGlnbjogY2VudGVyIH1cbi5yaWdodC1hbGlnbiAgeyB0ZXh0LWFsaWduOiByaWdodCB9XG4uanVzdGlmeSAgICAgIHsgdGV4dC1hbGlnbjoganVzdGlmeSB9XG5cbi5ub3dyYXAgeyB3aGl0ZS1zcGFjZTogbm93cmFwIH1cbi5icmVhay13b3JkIHsgd29yZC13cmFwOiBicmVhay13b3JkIH1cblxuLmxpbmUtaGVpZ2h0LTEgeyBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtMSkgfVxuLmxpbmUtaGVpZ2h0LTIgeyBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtMikgfVxuLmxpbmUtaGVpZ2h0LTMgeyBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtMykgfVxuLmxpbmUtaGVpZ2h0LTQgeyBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtNCkgfVxuXG4ubGlzdC1zdHlsZS1ub25lIHsgbGlzdC1zdHlsZTogbm9uZSB9XG4udW5kZXJsaW5lIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgfVxuXG4udHJ1bmNhdGUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGlzdC1yZXNldCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuOnJvb3Qge1xuICAtLWxpbmUtaGVpZ2h0LTE6IDE7XG4gIC0tbGluZS1oZWlnaHQtMjogMS4xMjU7XG4gIC0tbGluZS1oZWlnaHQtMzogMS4yNTtcbiAgLS1saW5lLWhlaWdodC00OiAxLjU7XG4gIC0tbGV0dGVyLXNwYWNpbmc6IDE7XG4gIC0tY2Fwcy1sZXR0ZXItc3BhY2luZzogLjJlbTtcbiAgLS1ib2xkLWZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLyogQmFzc2NzcyBMYXlvdXQgKi9cblxuLmlubGluZSAgICAgICB7IGRpc3BsYXk6IGlubGluZSB9XG4uYmxvY2sgICAgICAgIHsgZGlzcGxheTogYmxvY2sgfVxuLmlubGluZS1ibG9jayB7IGRpc3BsYXk6IGlubGluZS1ibG9jayB9XG4udGFibGUgICAgICAgIHsgZGlzcGxheTogdGFibGUgfVxuLnRhYmxlLWNlbGwgICB7IGRpc3BsYXk6IHRhYmxlLWNlbGwgfVxuXG4ub3ZlcmZsb3ctaGlkZGVuIHsgb3ZlcmZsb3c6IGhpZGRlbiB9XG4ub3ZlcmZsb3ctc2Nyb2xsIHsgb3ZlcmZsb3c6IHNjcm9sbCB9XG4ub3ZlcmZsb3ctYXV0byAgIHsgb3ZlcmZsb3c6IGF1dG8gfVxuXG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlXG59XG4uY2xlYXJmaXg6YWZ0ZXIgeyBjbGVhcjogYm90aCB9XG5cbi5sZWZ0ICB7IGZsb2F0OiBsZWZ0IH1cbi5yaWdodCB7IGZsb2F0OiByaWdodCB9XG5cbi5maXQgeyBtYXgtd2lkdGg6IDEwMCUgfVxuXG4ubWF4LXdpZHRoLTEgeyBtYXgtd2lkdGg6IHZhcigtLXdpZHRoLTEpIH1cbi5tYXgtd2lkdGgtMiB7IG1heC13aWR0aDogdmFyKC0td2lkdGgtMikgfVxuLm1heC13aWR0aC0zIHsgbWF4LXdpZHRoOiB2YXIoLS13aWR0aC0zKSB9XG4ubWF4LXdpZHRoLTQgeyBtYXgtd2lkdGg6IHZhcigtLXdpZHRoLTQpIH1cblxuLmJvcmRlci1ib3ggeyBib3gtc2l6aW5nOiBib3JkZXItYm94IH1cblxuOnJvb3Qge1xuICAtLXdpZHRoLTE6IDI0cmVtO1xuICAtLXdpZHRoLTI6IDMycmVtO1xuICAtLXdpZHRoLTM6IDQ4cmVtO1xuICAtLXdpZHRoLTQ6IDY0cmVtO1xufVxuXG4iLCIvKiBCYXNzY3NzIEFsaWduICovXG5cbi5hbGlnbi1iYXNlbGluZSB7IHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZSB9XG4uYWxpZ24tdG9wICAgICAgeyB2ZXJ0aWNhbC1hbGlnbjogdG9wIH1cbi5hbGlnbi1taWRkbGUgICB7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgfVxuLmFsaWduLWJvdHRvbSAgIHsgdmVydGljYWwtYWxpZ246IGJvdHRvbSB9XG5cbiIsIi8qIEJhc3Njc3MgTWFyZ2luICovXG5cbi5tMCAgeyBtYXJnaW46ICAgICAgICAwIH1cbi5tdDAgeyBtYXJnaW4tdG9wOiAgICAwIH1cbi5tcjAgeyBtYXJnaW4tcmlnaHQ6ICAwIH1cbi5tYjAgeyBtYXJnaW4tYm90dG9tOiAwIH1cbi5tbDAgeyBtYXJnaW4tbGVmdDogICAwIH1cbi5teDAgeyBtYXJnaW4tbGVmdDogICAwOyBtYXJnaW4tcmlnaHQ6ICAwIH1cbi5teTAgeyBtYXJnaW4tdG9wOiAgICAwOyBtYXJnaW4tYm90dG9tOiAwIH1cblxuLm0xICB7IG1hcmdpbjogICAgICAgIHZhcigtLXNwYWNlLTEpIH1cbi5tdDEgeyBtYXJnaW4tdG9wOiAgICB2YXIoLS1zcGFjZS0xKSB9XG4ubXIxIHsgbWFyZ2luLXJpZ2h0OiAgdmFyKC0tc3BhY2UtMSkgfVxuLm1iMSB7IG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTEpIH1cbi5tbDEgeyBtYXJnaW4tbGVmdDogICB2YXIoLS1zcGFjZS0xKSB9XG4ubXgxIHsgbWFyZ2luLWxlZnQ6ICAgdmFyKC0tc3BhY2UtMSk7IG1hcmdpbi1yaWdodDogIHZhcigtLXNwYWNlLTEpIH1cbi5teTEgeyBtYXJnaW4tdG9wOiAgICB2YXIoLS1zcGFjZS0xKTsgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMSkgfVxuXG4ubTIgIHsgbWFyZ2luOiAgICAgICAgdmFyKC0tc3BhY2UtMikgfVxuLm10MiB7IG1hcmdpbi10b3A6ICAgIHZhcigtLXNwYWNlLTIpIH1cbi5tcjIgeyBtYXJnaW4tcmlnaHQ6ICB2YXIoLS1zcGFjZS0yKSB9XG4ubWIyIHsgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMikgfVxuLm1sMiB7IG1hcmdpbi1sZWZ0OiAgIHZhcigtLXNwYWNlLTIpIH1cbi5teDIgeyBtYXJnaW4tbGVmdDogICB2YXIoLS1zcGFjZS0yKTsgbWFyZ2luLXJpZ2h0OiAgdmFyKC0tc3BhY2UtMikgfVxuLm15MiB7IG1hcmdpbi10b3A6ICAgIHZhcigtLXNwYWNlLTIpOyBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0yKSB9XG5cbi5tMyAgeyBtYXJnaW46ICAgICAgICB2YXIoLS1zcGFjZS0zKSB9XG4ubXQzIHsgbWFyZ2luLXRvcDogICAgdmFyKC0tc3BhY2UtMykgfVxuLm1yMyB7IG1hcmdpbi1yaWdodDogIHZhcigtLXNwYWNlLTMpIH1cbi5tYjMgeyBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0zKSB9XG4ubWwzIHsgbWFyZ2luLWxlZnQ6ICAgdmFyKC0tc3BhY2UtMykgfVxuLm14MyB7IG1hcmdpbi1sZWZ0OiAgIHZhcigtLXNwYWNlLTMpOyBtYXJnaW4tcmlnaHQ6ICB2YXIoLS1zcGFjZS0zKSB9XG4ubXkzIHsgbWFyZ2luLXRvcDogICAgdmFyKC0tc3BhY2UtMyk7IG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTMpIH1cblxuLm00ICB7IG1hcmdpbjogICAgICAgIHZhcigtLXNwYWNlLTQpIH1cbi5tdDQgeyBtYXJnaW4tdG9wOiAgICB2YXIoLS1zcGFjZS00KSB9XG4ubXI0IHsgbWFyZ2luLXJpZ2h0OiAgdmFyKC0tc3BhY2UtNCkgfVxuLm1iNCB7IG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTQpIH1cbi5tbDQgeyBtYXJnaW4tbGVmdDogICB2YXIoLS1zcGFjZS00KSB9XG4ubXg0IHsgbWFyZ2luLWxlZnQ6ICAgdmFyKC0tc3BhY2UtNCk7IG1hcmdpbi1yaWdodDogIHZhcigtLXNwYWNlLTQpIH1cbi5teTQgeyBtYXJnaW4tdG9wOiAgICB2YXIoLS1zcGFjZS00KTsgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtNCkgfVxuXG4ubXhuMSB7IG1hcmdpbi1sZWZ0OiAtdmFyKC0tc3BhY2UtMSk7IG1hcmdpbi1yaWdodDogLXZhcigtLXNwYWNlLTEpOyB9XG4ubXhuMiB7IG1hcmdpbi1sZWZ0OiAtdmFyKC0tc3BhY2UtMik7IG1hcmdpbi1yaWdodDogLXZhcigtLXNwYWNlLTIpOyB9XG4ubXhuMyB7IG1hcmdpbi1sZWZ0OiAtdmFyKC0tc3BhY2UtMyk7IG1hcmdpbi1yaWdodDogLXZhcigtLXNwYWNlLTMpOyB9XG4ubXhuNCB7IG1hcmdpbi1sZWZ0OiAtdmFyKC0tc3BhY2UtNCk7IG1hcmdpbi1yaWdodDogLXZhcigtLXNwYWNlLTQpOyB9XG5cbi5tbC1hdXRvIHsgbWFyZ2luLWxlZnQ6IGF1dG8gfVxuLm1yLWF1dG8geyBtYXJnaW4tcmlnaHQ6IGF1dG8gfVxuLm14LWF1dG8geyBtYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbjpyb290IHtcbiAgLS1zcGFjZS0xOiAuNXJlbTtcbiAgLS1zcGFjZS0yOiAxcmVtO1xuICAtLXNwYWNlLTM6IDJyZW07XG4gIC0tc3BhY2UtNDogNHJlbTtcbn1cblxuIiwiLyogQmFzc2NzcyBQYWRkaW5nICovXG5cbi5wMCAgeyBwYWRkaW5nOiAwIH1cbi5wdDAgeyBwYWRkaW5nLXRvcDogMCB9XG4ucHIwIHsgcGFkZGluZy1yaWdodDogMCB9XG4ucGIwIHsgcGFkZGluZy1ib3R0b206IDAgfVxuLnBsMCB7IHBhZGRpbmctbGVmdDogMCB9XG4ucHgwIHsgcGFkZGluZy1sZWZ0OiAwOyBwYWRkaW5nLXJpZ2h0OiAgMCB9XG4ucHkwIHsgcGFkZGluZy10b3A6IDA7ICBwYWRkaW5nLWJvdHRvbTogMCB9XG5cbi5wMSAgeyBwYWRkaW5nOiAgICAgICAgdmFyKC0tc3BhY2UtMSkgfVxuLnB0MSB7IHBhZGRpbmctdG9wOiAgICB2YXIoLS1zcGFjZS0xKSB9XG4ucHIxIHsgcGFkZGluZy1yaWdodDogIHZhcigtLXNwYWNlLTEpIH1cbi5wYjEgeyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2UtMSkgfVxuLnBsMSB7IHBhZGRpbmctbGVmdDogICB2YXIoLS1zcGFjZS0xKSB9XG4ucHkxIHsgcGFkZGluZy10b3A6ICAgIHZhcigtLXNwYWNlLTEpOyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2UtMSkgfVxuLnB4MSB7IHBhZGRpbmctbGVmdDogICB2YXIoLS1zcGFjZS0xKTsgcGFkZGluZy1yaWdodDogIHZhcigtLXNwYWNlLTEpIH1cblxuLnAyICB7IHBhZGRpbmc6ICAgICAgICB2YXIoLS1zcGFjZS0yKSB9XG4ucHQyIHsgcGFkZGluZy10b3A6ICAgIHZhcigtLXNwYWNlLTIpIH1cbi5wcjIgeyBwYWRkaW5nLXJpZ2h0OiAgdmFyKC0tc3BhY2UtMikgfVxuLnBiMiB7IHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjZS0yKSB9XG4ucGwyIHsgcGFkZGluZy1sZWZ0OiAgIHZhcigtLXNwYWNlLTIpIH1cbi5weTIgeyBwYWRkaW5nLXRvcDogICAgdmFyKC0tc3BhY2UtMik7IHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjZS0yKSB9XG4ucHgyIHsgcGFkZGluZy1sZWZ0OiAgIHZhcigtLXNwYWNlLTIpOyBwYWRkaW5nLXJpZ2h0OiAgdmFyKC0tc3BhY2UtMikgfVxuXG4ucDMgIHsgcGFkZGluZzogICAgICAgIHZhcigtLXNwYWNlLTMpIH1cbi5wdDMgeyBwYWRkaW5nLXRvcDogICAgdmFyKC0tc3BhY2UtMykgfVxuLnByMyB7IHBhZGRpbmctcmlnaHQ6ICB2YXIoLS1zcGFjZS0zKSB9XG4ucGIzIHsgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNlLTMpIH1cbi5wbDMgeyBwYWRkaW5nLWxlZnQ6ICAgdmFyKC0tc3BhY2UtMykgfVxuLnB5MyB7IHBhZGRpbmctdG9wOiAgICB2YXIoLS1zcGFjZS0zKTsgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNlLTMpIH1cbi5weDMgeyBwYWRkaW5nLWxlZnQ6ICAgdmFyKC0tc3BhY2UtMyk7IHBhZGRpbmctcmlnaHQ6ICB2YXIoLS1zcGFjZS0zKSB9XG5cbi5wNCAgeyBwYWRkaW5nOiAgICAgICAgdmFyKC0tc3BhY2UtNCkgfVxuLnB0NCB7IHBhZGRpbmctdG9wOiAgICB2YXIoLS1zcGFjZS00KSB9XG4ucHI0IHsgcGFkZGluZy1yaWdodDogIHZhcigtLXNwYWNlLTQpIH1cbi5wYjQgeyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2UtNCkgfVxuLnBsNCB7IHBhZGRpbmctbGVmdDogICB2YXIoLS1zcGFjZS00KSB9XG4ucHk0IHsgcGFkZGluZy10b3A6ICAgIHZhcigtLXNwYWNlLTQpOyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2UtNCkgfVxuLnB4NCB7IHBhZGRpbmctbGVmdDogICB2YXIoLS1zcGFjZS00KTsgcGFkZGluZy1yaWdodDogIHZhcigtLXNwYWNlLTQpIH1cblxuOnJvb3Qge1xuICAtLXNwYWNlLTE6IC41cmVtO1xuICAtLXNwYWNlLTI6IDFyZW07XG4gIC0tc3BhY2UtMzogMnJlbTtcbiAgLS1zcGFjZS00OiA0cmVtO1xufVxuXG4iLCIvKiBCYXNzY3NzIEdyaWQgKi9cblxuQGltcG9ydCBcIi4vbGliL2dyaWRcIjtcbkBpbXBvcnQgXCIuL2xpYi9zbS1ncmlkXCI7XG5AaW1wb3J0IFwiLi9saWIvbWQtZ3JpZFwiO1xuQGltcG9ydCBcIi4vbGliL2xnLWdyaWRcIjtcblxuQGN1c3RvbS1tZWRpYSAtLWJyZWFrcG9pbnQtc20gKG1pbi13aWR0aDogNDBlbSk7XG5AY3VzdG9tLW1lZGlhIC0tYnJlYWtwb2ludC1tZCAobWluLXdpZHRoOiA1MmVtKTtcbkBjdXN0b20tbWVkaWEgLS1icmVha3BvaW50LWxnIChtaW4td2lkdGg6IDY0ZW0pO1xuXG4iLCJcbi5jb2wge1xuICBmbG9hdDogbGVmdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbC0xIHtcbiAgd2lkdGg6IGNhbGMoMS8xMiAqIDEwMCUpO1xufVxuXG4uY29sLTIge1xuICB3aWR0aDogY2FsYygyLzEyICogMTAwJSk7XG59XG5cbi5jb2wtMyB7XG4gIHdpZHRoOiBjYWxjKDMvMTIgKiAxMDAlKTtcbn1cblxuLmNvbC00IHtcbiAgd2lkdGg6IGNhbGMoNC8xMiAqIDEwMCUpO1xufVxuXG4uY29sLTUge1xuICB3aWR0aDogY2FsYyg1LzEyICogMTAwJSk7XG59XG5cbi5jb2wtNiB7XG4gIHdpZHRoOiBjYWxjKDYvMTIgKiAxMDAlKTtcbn1cblxuLmNvbC03IHtcbiAgd2lkdGg6IGNhbGMoNy8xMiAqIDEwMCUpO1xufVxuXG4uY29sLTgge1xuICB3aWR0aDogY2FsYyg4LzEyICogMTAwJSk7XG59XG5cbi5jb2wtOSB7XG4gIHdpZHRoOiBjYWxjKDkvMTIgKiAxMDAlKTtcbn1cblxuLmNvbC0xMCB7XG4gIHdpZHRoOiBjYWxjKDEwLzEyICogMTAwJSk7XG59XG5cbi5jb2wtMTEge1xuICB3aWR0aDogY2FsYygxMS8xMiAqIDEwMCUpO1xufVxuXG4uY29sLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiIsIlxuQG1lZGlhICgtLWJyZWFrcG9pbnQtc20pIHtcblxuICAuc20tY29sIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLnNtLWNvbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuc20tY29sLTEge1xuICAgIHdpZHRoOiBjYWxjKDEvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5zbS1jb2wtMiB7XG4gICAgd2lkdGg6IGNhbGMoMi8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLnNtLWNvbC0zIHtcbiAgICB3aWR0aDogY2FsYygzLzEyICogMTAwJSk7XG4gIH1cblxuICAuc20tY29sLTQge1xuICAgIHdpZHRoOiBjYWxjKDQvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5zbS1jb2wtNSB7XG4gICAgd2lkdGg6IGNhbGMoNS8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLnNtLWNvbC02IHtcbiAgICB3aWR0aDogY2FsYyg2LzEyICogMTAwJSk7XG4gIH1cblxuICAuc20tY29sLTcge1xuICAgIHdpZHRoOiBjYWxjKDcvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5zbS1jb2wtOCB7XG4gICAgd2lkdGg6IGNhbGMoOC8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLnNtLWNvbC05IHtcbiAgICB3aWR0aDogY2FsYyg5LzEyICogMTAwJSk7XG4gIH1cblxuICAuc20tY29sLTEwIHtcbiAgICB3aWR0aDogY2FsYygxMC8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLnNtLWNvbC0xMSB7XG4gICAgd2lkdGg6IGNhbGMoMTEvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5zbS1jb2wtMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cblxuIiwiXG5AbWVkaWEgKC0tYnJlYWtwb2ludC1tZCkge1xuXG4gIC5tZC1jb2wge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAubWQtY29sLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5tZC1jb2wtMSB7XG4gICAgd2lkdGg6IGNhbGMoMS8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLm1kLWNvbC0yIHtcbiAgICB3aWR0aDogY2FsYygyLzEyICogMTAwJSk7XG4gIH1cblxuICAubWQtY29sLTMge1xuICAgIHdpZHRoOiBjYWxjKDMvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5tZC1jb2wtNCB7XG4gICAgd2lkdGg6IGNhbGMoNC8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLm1kLWNvbC01IHtcbiAgICB3aWR0aDogY2FsYyg1LzEyICogMTAwJSk7XG4gIH1cblxuICAubWQtY29sLTYge1xuICAgIHdpZHRoOiBjYWxjKDYvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5tZC1jb2wtNyB7XG4gICAgd2lkdGg6IGNhbGMoNy8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLm1kLWNvbC04IHtcbiAgICB3aWR0aDogY2FsYyg4LzEyICogMTAwJSk7XG4gIH1cblxuICAubWQtY29sLTkge1xuICAgIHdpZHRoOiBjYWxjKDkvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5tZC1jb2wtMTAge1xuICAgIHdpZHRoOiBjYWxjKDEwLzEyICogMTAwJSk7XG4gIH1cblxuICAubWQtY29sLTExIHtcbiAgICB3aWR0aDogY2FsYygxMS8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLm1kLWNvbC0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuXG4iLCJcbkBtZWRpYSAoLS1icmVha3BvaW50LWxnKSB7XG5cbiAgLmxnLWNvbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5sZy1jb2wtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmxnLWNvbC0xIHtcbiAgICB3aWR0aDogY2FsYygxLzEyICogMTAwJSk7XG4gIH1cblxuICAubGctY29sLTIge1xuICAgIHdpZHRoOiBjYWxjKDIvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5sZy1jb2wtMyB7XG4gICAgd2lkdGg6IGNhbGMoMy8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLmxnLWNvbC00IHtcbiAgICB3aWR0aDogY2FsYyg0LzEyICogMTAwJSk7XG4gIH1cblxuICAubGctY29sLTUge1xuICAgIHdpZHRoOiBjYWxjKDUvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5sZy1jb2wtNiB7XG4gICAgd2lkdGg6IGNhbGMoNi8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLmxnLWNvbC03IHtcbiAgICB3aWR0aDogY2FsYyg3LzEyICogMTAwJSk7XG4gIH1cblxuICAubGctY29sLTgge1xuICAgIHdpZHRoOiBjYWxjKDgvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5sZy1jb2wtOSB7XG4gICAgd2lkdGg6IGNhbGMoOS8xMiAqIDEwMCUpO1xuICB9XG5cbiAgLmxnLWNvbC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoMTAvMTIgKiAxMDAlKTtcbiAgfVxuXG4gIC5sZy1jb2wtMTEge1xuICAgIHdpZHRoOiBjYWxjKDExLzEyICogMTAwJSk7XG4gIH1cblxuICAubGctY29sLTEyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG59XG5cbiIsIlxuLmZsZXggeyBkaXNwbGF5OiBmbGV4IH1cblxuQG1lZGlhICgtLWJyZWFrcG9pbnQtc20pIHtcbiAgLnNtLWZsZXggeyBkaXNwbGF5OiBmbGV4IH1cbn1cblxuQG1lZGlhICgtLWJyZWFrcG9pbnQtbWQpIHtcbiAgLm1kLWZsZXggeyBkaXNwbGF5OiBmbGV4IH1cbn1cblxuQG1lZGlhICgtLWJyZWFrcG9pbnQtbGcpIHtcbiAgLmxnLWZsZXggeyBkaXNwbGF5OiBmbGV4IH1cbn1cblxuLmZsZXgtY29sdW1uICB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gfVxuLmZsZXgtd3JhcCAgICB7IGZsZXgtd3JhcDogd3JhcCB9XG5cbi5pdGVtcy1zdGFydCAgICB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0IH1cbi5pdGVtcy1lbmQgICAgICB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZCB9XG4uaXRlbXMtY2VudGVyICAgeyBhbGlnbi1pdGVtczogY2VudGVyIH1cbi5pdGVtcy1iYXNlbGluZSB7IGFsaWduLWl0ZW1zOiBiYXNlbGluZSB9XG4uaXRlbXMtc3RyZXRjaCAgeyBhbGlnbi1pdGVtczogc3RyZXRjaCB9XG5cbi5zZWxmLXN0YXJ0ICAgIHsgYWxpZ24tc2VsZjogZmxleC1zdGFydCB9XG4uc2VsZi1lbmQgICAgICB7IGFsaWduLXNlbGY6IGZsZXgtZW5kIH1cbi5zZWxmLWNlbnRlciAgIHsgYWxpZ24tc2VsZjogY2VudGVyIH1cbi5zZWxmLWJhc2VsaW5lIHsgYWxpZ24tc2VsZjogYmFzZWxpbmUgfVxuLnNlbGYtc3RyZXRjaCAgeyBhbGlnbi1zZWxmOiBzdHJldGNoIH1cblxuLmp1c3RpZnktc3RhcnQgICB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCB9XG4uanVzdGlmeS1lbmQgICAgIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCB9XG4uanVzdGlmeS1jZW50ZXIgIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXIgfVxuLmp1c3RpZnktYmV0d2VlbiB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiB9XG4uanVzdGlmeS1hcm91bmQgIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgfVxuXG4uY29udGVudC1zdGFydCAgIHsgYWxpZ24tY29udGVudDogZmxleC1zdGFydCB9XG4uY29udGVudC1lbmQgICAgIHsgYWxpZ24tY29udGVudDogZmxleC1lbmQgfVxuLmNvbnRlbnQtY2VudGVyICB7IGFsaWduLWNvbnRlbnQ6IGNlbnRlciB9XG4uY29udGVudC1iZXR3ZWVuIHsgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiB9XG4uY29udGVudC1hcm91bmQgIHsgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kIH1cbi5jb250ZW50LXN0cmV0Y2ggeyBhbGlnbi1jb250ZW50OiBzdHJldGNoIH1cblxuLyogMS4gRml4IGZvciBDaHJvbWUgNDQgYnVnLiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTA2ODkzICovXG4uZmxleC1hdXRvIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi13aWR0aDogMDsgLyogMSAqL1xuICBtaW4taGVpZ2h0OiAwOyAvKiAxICovXG59XG4uZmxleC1ub25lIHsgZmxleDogbm9uZSB9XG5cbi5vcmRlci0wIHsgb3JkZXI6IDAgfVxuLm9yZGVyLTEgeyBvcmRlcjogMSB9XG4ub3JkZXItMiB7IG9yZGVyOiAyIH1cbi5vcmRlci0zIHsgb3JkZXI6IDMgfVxuLm9yZGVyLWxhc3QgeyBvcmRlcjogOTk5OTkgfVxuXG5AY3VzdG9tLW1lZGlhIC0tYnJlYWtwb2ludC1zbSAobWluLXdpZHRoOiA0MGVtKTtcbkBjdXN0b20tbWVkaWEgLS1icmVha3BvaW50LW1kIChtaW4td2lkdGg6IDUyZW0pO1xuQGN1c3RvbS1tZWRpYSAtLWJyZWFrcG9pbnQtbGcgKG1pbi13aWR0aDogNjRlbSk7XG5cbiIsIi8qIEJhc3Njc3MgUG9zaXRpb24gKi9cblxuLnJlbGF0aXZlIHsgcG9zaXRpb246IHJlbGF0aXZlIH1cbi5hYnNvbHV0ZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZSB9XG4uZml4ZWQgICAgeyBwb3NpdGlvbjogZml4ZWQgfVxuXG4udG9wLTAgICAgeyB0b3A6IDAgfVxuLnJpZ2h0LTAgIHsgcmlnaHQ6IDAgfVxuLmJvdHRvbS0wIHsgYm90dG9tOiAwIH1cbi5sZWZ0LTAgICB7IGxlZnQ6IDAgfVxuXG4uejEgeyB6LWluZGV4OiB2YXIoLS16MSkgfVxuLnoyIHsgei1pbmRleDogdmFyKC0tejIpIH1cbi56MyB7IHotaW5kZXg6IHZhcigtLXozKSB9XG4uejQgeyB6LWluZGV4OiB2YXIoLS16NCkgfVxuXG46cm9vdCB7XG4gIC0tejE6IDE7XG4gIC0tejI6IDI7XG4gIC0tejM6IDM7XG4gIC0tejQ6IDQ7XG59XG5cbiIsIi8qIEJhc3Njc3MgQm9yZGVyICovXG5cbi5ib3JkZXIge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XG59XG5cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XG59XG5cbi5ib3JkZXItcmlnaHQge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XG59XG5cbi5ib3JkZXItbGVmdCB7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XG59XG5cbi5ib3JkZXItbm9uZSB7IGJvcmRlcjogMCB9XG5cbi5yb3VuZGVkIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cykgfVxuLmNpcmNsZSAgeyBib3JkZXItcmFkaXVzOiA1MCUgfVxuXG4ucm91bmRlZC10b3AgICAgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIDAgfVxuLnJvdW5kZWQtcmlnaHQgIHsgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIH1cbi5yb3VuZGVkLWJvdHRvbSB7IGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSB9XG4ucm91bmRlZC1sZWZ0ICAgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tYm9yZGVyLXJhZGl1cykgfVxuXG4ubm90LXJvdW5kZWQgeyBib3JkZXItcmFkaXVzOiAwIH1cblxuOnJvb3Qge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuIiwiLyogQmFzc2NzcyBIaWRlICovXG5cbi5oaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG59XG5cbkBtZWRpYSAoLS1icmVha3BvaW50LXhzKSB7XG4gIC54cy1oaWRlIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50IH1cbn1cblxuQG1lZGlhICgtLWJyZWFrcG9pbnQtc20tbWQpIHtcbiAgLnNtLWhpZGUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQgfVxufVxuXG5AbWVkaWEgKC0tYnJlYWtwb2ludC1tZC1sZykge1xuICAubWQtaGlkZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudCB9XG59XG5cbkBtZWRpYSAoLS1icmVha3BvaW50LWxnKSB7XG4gIC5sZy1oaWRlIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50IH1cbn1cblxuLmRpc3BsYXktbm9uZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudCB9XG5cbkBjdXN0b20tbWVkaWEgLS1icmVha3BvaW50LXhzIChtYXgtd2lkdGg6IDQwZW0pO1xuQGN1c3RvbS1tZWRpYSAtLWJyZWFrcG9pbnQtc20tbWQgKG1pbi13aWR0aDogNDBlbSkgYW5kIChtYXgtd2lkdGg6IDUyZW0pO1xuQGN1c3RvbS1tZWRpYSAtLWJyZWFrcG9pbnQtbWQtbGcgKG1pbi13aWR0aDogNTJlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pO1xuQGN1c3RvbS1tZWRpYSAtLWJyZWFrcG9pbnQtbGcgKG1pbi13aWR0aDogNjRlbSk7XG5cbiJdfQ== */") || true) && "_4a8ac57f")
;((require('insert-css')("body, html {\n  height: 100%;\n}\n\nbody {\n  background-color: #FFF8DB;\n  color: #3B3216;\n}\n\n.transition .plant-stalk,\n.transition .plant-flower,\n.transition .plant-fruit {\n  -webkit-animation: transition 1s infinite cubic-bezier(.36,.07,.19,.97) both;\n          animation: transition 1s infinite cubic-bezier(.36,.07,.19,.97) both;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n@-webkit-keyframes transition {\n  10%, 30% {\n    -webkit-transform: scale(0.9, 0.9);\n            transform: scale(0.9, 0.9);\n  }\n  20% {\n    -webkit-transform: scale(0.8, 0.8);\n            transform: scale(0.8, 0.8);\n  }\n  50% {\n    -webkit-transform: translate3d(-1px, 1px, 0) rotate(1deg);\n            transform: translate3d(-1px, 1px, 0) rotate(1deg);\n  }\n  55% {\n    -webkit-transform: translate3d(1px, -1px, 0) rotate(-1deg);\n            transform: translate3d(1px, -1px, 0) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate3d(-2px, 4px, 0) rotate(1deg);\n            transform: translate3d(-2px, 4px, 0) rotate(1deg);\n  }\n  65% {\n    -webkit-transform: translate3d(2px, 2px, 0) rotate(-1deg);\n            transform: translate3d(2px, 2px, 0) rotate(-1deg);\n  }\n  70% {\n    -webkit-transform: translate3d(-3px, -2px, 0) rotate(1deg);\n            transform: translate3d(-3px, -2px, 0) rotate(1deg);\n  }\n  75% {\n    -webkit-transform: translate3d(3px, 0, 0) rotate(-1deg);\n            transform: translate3d(3px, 0, 0) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate3d(-4px, 0, 0) rotate(5deg);\n            transform: translate3d(-4px, 0, 0) rotate(5deg);\n  }\n  85% {\n    -webkit-transform: translate3d(4px, 0, 0) rotate(-5deg);\n            transform: translate3d(4px, 0, 0) rotate(-5deg);\n  }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0) rotate(5deg) scale(1.2, 1.2);\n            transform: translate3d(-5px, 0, 0) rotate(5deg) scale(1.2, 1.2);\n  }\n  95% {\n    -webkit-transform: translate3d(5px, 0, 0) rotate(-5deg) scale(1.4, 1.4);\n            transform: translate3d(5px, 0, 0) rotate(-5deg) scale(1.4, 1.4);\n  }\n}\n\n@keyframes transition {\n  10%, 30% {\n    -webkit-transform: scale(0.9, 0.9);\n            transform: scale(0.9, 0.9);\n  }\n  20% {\n    -webkit-transform: scale(0.8, 0.8);\n            transform: scale(0.8, 0.8);\n  }\n  50% {\n    -webkit-transform: translate3d(-1px, 1px, 0) rotate(1deg);\n            transform: translate3d(-1px, 1px, 0) rotate(1deg);\n  }\n  55% {\n    -webkit-transform: translate3d(1px, -1px, 0) rotate(-1deg);\n            transform: translate3d(1px, -1px, 0) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate3d(-2px, 4px, 0) rotate(1deg);\n            transform: translate3d(-2px, 4px, 0) rotate(1deg);\n  }\n  65% {\n    -webkit-transform: translate3d(2px, 2px, 0) rotate(-1deg);\n            transform: translate3d(2px, 2px, 0) rotate(-1deg);\n  }\n  70% {\n    -webkit-transform: translate3d(-3px, -2px, 0) rotate(1deg);\n            transform: translate3d(-3px, -2px, 0) rotate(1deg);\n  }\n  75% {\n    -webkit-transform: translate3d(3px, 0, 0) rotate(-1deg);\n            transform: translate3d(3px, 0, 0) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate3d(-4px, 0, 0) rotate(5deg);\n            transform: translate3d(-4px, 0, 0) rotate(5deg);\n  }\n  85% {\n    -webkit-transform: translate3d(4px, 0, 0) rotate(-5deg);\n            transform: translate3d(4px, 0, 0) rotate(-5deg);\n  }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0) rotate(5deg) scale(1.2, 1.2);\n            transform: translate3d(-5px, 0, 0) rotate(5deg) scale(1.2, 1.2);\n  }\n  95% {\n    -webkit-transform: translate3d(5px, 0, 0) rotate(-5deg) scale(1.4, 1.4);\n            transform: translate3d(5px, 0, 0) rotate(-5deg) scale(1.4, 1.4);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQjs7QUFFRDs7O0VBR0UsNkVBQXFFO1VBQXJFLHFFQUFxRTtFQUNyRSx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qiw0QkFBb0I7VUFBcEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0dBQzVCO0VBQ0Q7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0dBQzVCO0VBQ0Q7SUFDRSwwREFBa0Q7WUFBbEQsa0RBQWtEO0dBQ25EO0VBQ0Q7SUFDRSwyREFBbUQ7WUFBbkQsbURBQW1EO0dBQ3BEO0VBQ0Q7SUFDRSwwREFBa0Q7WUFBbEQsa0RBQWtEO0dBQ25EO0VBQ0Q7SUFDRSwwREFBa0Q7WUFBbEQsa0RBQWtEO0dBQ25EO0VBQ0Q7SUFDRSwyREFBbUQ7WUFBbkQsbURBQW1EO0dBQ3BEO0VBQ0Q7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0dBQ2pEO0VBQ0Q7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0dBQ2pEO0VBQ0Q7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0dBQ2pEO0VBQ0Q7SUFDRSx3RUFBZ0U7WUFBaEUsZ0VBQWdFO0dBQ2pFO0VBQ0Q7SUFDRSx3RUFBZ0U7WUFBaEUsZ0VBQWdFO0dBQ2pFO0NBQ0Y7O0FBckNEO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0dBQzVCO0VBQ0Q7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0dBQzVCO0VBQ0Q7SUFDRSwwREFBa0Q7WUFBbEQsa0RBQWtEO0dBQ25EO0VBQ0Q7SUFDRSwyREFBbUQ7WUFBbkQsbURBQW1EO0dBQ3BEO0VBQ0Q7SUFDRSwwREFBa0Q7WUFBbEQsa0RBQWtEO0dBQ25EO0VBQ0Q7SUFDRSwwREFBa0Q7WUFBbEQsa0RBQWtEO0dBQ25EO0VBQ0Q7SUFDRSwyREFBbUQ7WUFBbkQsbURBQW1EO0dBQ3BEO0VBQ0Q7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0dBQ2pEO0VBQ0Q7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0dBQ2pEO0VBQ0Q7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0dBQ2pEO0VBQ0Q7SUFDRSx3RUFBZ0U7WUFBaEUsZ0VBQWdFO0dBQ2pFO0VBQ0Q7SUFDRSx3RUFBZ0U7WUFBaEUsZ0VBQWdFO0dBQ2pFO0NBQ0YiLCJmaWxlIjoidG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY4REI7XG4gIGNvbG9yOiAjM0IzMjE2O1xufVxuXG4udHJhbnNpdGlvbiAucGxhbnQtc3RhbGssXG4udHJhbnNpdGlvbiAucGxhbnQtZmxvd2VyLFxuLnRyYW5zaXRpb24gLnBsYW50LWZydWl0IHtcbiAgYW5pbWF0aW9uOiB0cmFuc2l0aW9uIDFzIGluZmluaXRlIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuQGtleWZyYW1lcyB0cmFuc2l0aW9uIHtcbiAgMTAlLCAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDFweCwgMCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDU1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIC0xcHgsIDApIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDRweCwgMCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDJweCwgMCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgLTJweCwgMCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApIHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKSByb3RhdGUoLTVkZWcpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKSByb3RhdGUoNWRlZykgc2NhbGUoMS4yLCAxLjIpO1xuICB9XG4gIDk1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApIHJvdGF0ZSgtNWRlZykgc2NhbGUoMS40LCAxLjQpO1xuICB9XG59Il19 */") || true) && "_3dc9ba8f")

app.model(require('./models/game'))

app.router(function (route) {
  return [
    route('/', require('./pages/game'))
  ]
})

var tree = app.start()
document.body.appendChild(tree)

},{"./models/game":2,"./pages/game":34,"choo":8,"insert-css":14}],2:[function(require,module,exports){
(function (Buffer){

var path = require('path')
var extend = require('xtend')

module.exports = {
  namespace: 'game',
  state: {
    title: 'grow',
    clicks: 0,
    frame: 0,
    plants: 0,
    frames: [
      {
        svg: Buffer("PHN2ZyBjbGFzcz0iZnJhbWUgZnJhbWUtMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjE4MDAiIHZpZXdCb3g9IjAgMCA5MDAgMTgwMCI+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjUiIHk9IjE3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCB5PSIxMjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTIwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTQwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTYwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjgwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijg1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjkwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijk1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEwNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTEwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjExNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8Zz4KICAgIDxyZWN0IHg9IjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIxMDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjE1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMjAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIyNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjMwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNDAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIzNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjQ1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNTAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI1NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjYwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI3MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9Ijc1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMTgwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iODUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPC9nPgo8L3N2Zz4K","base64")
      },
      {
        svg: Buffer("PHN2ZyBjbGFzcz0iZnJhbWUgZnJhbWUtMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjE4MDAiIHZpZXdCb3g9IjAgMCA5MDAgMTgwMCI+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjUiIHk9IjE3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyNSIgeT0iMTY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDI1IiB5PSIxNjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgeT0iMTI1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEyMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMzAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTM1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE0MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNDUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTUwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI2NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI4MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI4NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI5MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI5NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTAwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjExMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMzAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNDUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPGc+CiAgICA8cmVjdCB4PSI1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMTAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIxNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjIwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIzMDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjQwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMzUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI0NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjUwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNTUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI2MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjY1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNzAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI3NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjE4MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9Ijg1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDwvZz4KPC9zdmc+Cg==","base64")
      },
      {
        svg: Buffer("PHN2ZyBjbGFzcz0iZnJhbWUgZnJhbWUtMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjE4MDAiIHZpZXdCb3g9IjAgMCA5MDAgMTgwMCI+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjUiIHk9IjE3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyNSIgeT0iMTY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDI1IiB5PSIxNjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzUiIHk9IjE2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3NSIgeT0iMTU1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzc1IiB5PSIxNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzUiIHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjMyNSIgeT0iMTQ1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzI1IiB5PSIxNDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjUiIHk9IjE1MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQ3NSIgeT0iMTUwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTI1IiB5PSIxNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1MjUiIHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCB5PSIxMjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTIwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTQwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTYwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjgwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijg1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjkwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijk1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEwNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTEwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjExNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8Zz4KICAgIDxyZWN0IHg9IjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIxMDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjE1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMjAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIyNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjMwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNDAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIzNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjQ1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNTAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI1NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjYwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI3MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9Ijc1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMTgwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iODUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPC9nPgo8L3N2Zz4K","base64")
      },
      {
        svg: Buffer("PHN2ZyBjbGFzcz0iZnJhbWUgZnJhbWUtMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjE4MDAiIHZpZXdCb3g9IjAgMCA5MDAgMTgwMCI+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjUiIHk9IjE3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyNSIgeT0iMTY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDc1IiB5PSIxNjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjUiIHk9IjE2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyNSIgeT0iMTU1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzc1IiB5PSIxNTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzMjUiIHk9IjE1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjI3NSIgeT0iMTU1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjI1IiB5PSIxNTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMjUiIHk9IjE1MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjE3NSIgeT0iMTUwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzc1IiB5PSIxNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzUiIHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3NSIgeT0iMTQwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzI1IiB5PSIxNDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyNzUiIHk9IjE0MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjI3NSIgeT0iMTM1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjI1IiB5PSIxMzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMjUiIHk9IjEzMDYuNDgiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyNSIgeT0iMTQ1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDc1IiB5PSIxNDUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1MjUiIHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjUyNSIgeT0iMTQwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTc1IiB5PSIxNDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1NzUiIHk9IjEzNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCB5PSIxMjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTIwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTQwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTYwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjgwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijg1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjkwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijk1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEwNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTEwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjExNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8Zz4KICAgIDxyZWN0IHg9IjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIxMDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjE1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMjAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIyNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjMwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNDAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIzNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjQ1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNTAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI1NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjYwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI3MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9Ijc1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMTgwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iODUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPC9nPgo8L3N2Zz4K","base64")
      },
      {
        svg: Buffer("PHN2ZyBjbGFzcz0iZnJhbWUgZnJhbWUtNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjE4MDAiIHZpZXdCb3g9IjAgMCA5MDAgMTgwMCI+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTMiIHk9IjE1NTIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45MyIgeT0iMTYwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzcwLjkzIiB5PSIxNTUyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTMiIHk9IjE2NTIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45MyIgeT0iMTcwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjkzIiB5PSIxNTAyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0NzAuOTMiIHk9IjE1MDIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjUyMC45MyIgeT0iMTUwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTcwLjkzIiB5PSIxNDUyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1MjAuOTMiIHk9IjE0NTIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45MyIgeT0iMTQ1Mi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjkzIiB5PSIxNDAyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuOTMiIHk9IjE0MDIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjMyMC45MyIgeT0iMTQwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjcwLjkzIiB5PSIxNDAyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMjAuOTMiIHk9IjE0MDIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjIyMC45MyIgeT0iMTM1Mi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTcwLjkzIiB5PSIxMzUyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIxNzAuOTMiIHk9IjEzMDIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjEyMC45MyIgeT0iMTMwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzcwLjkzIiB5PSIxMzUyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuOTMiIHk9IjEzMDIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3MC45MyIgeT0iMTI1Mi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzcwLjkzIiB5PSIxMjAyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTMiIHk9IjEyMDAuMDciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45MyIgeT0iMTE1MC4wNyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjkzIiB5PSIxMTAwLjA3IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTMiIHk9IjEwNTAuMDciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45MyIgeT0iMTAwMC4wNyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzcwLjkzIiB5PSIxMDAwLjA3IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuOTMiIHk9Ijk1MC4wNyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzIwLjkzIiB5PSIxMjUyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyNzAuOTMiIHk9IjEyNTIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjI3MC45MyIgeT0iMTIwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjIwLjkzIiB5PSIxMjAyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMjAuOTMiIHk9IjExNTcuNzYiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjIyMC45MyIgeT0iMTEwNy43NiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTcwLjkzIiB5PSIxMTA3Ljc2IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIxNzAuOTMiIHk9IjEwNTcuNzYiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45MyIgeT0iMTMwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDcwLjkzIiB5PSIxMzAyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1MjAuOTMiIHk9IjEzMDIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjUyMC45MyIgeT0iMTI1Mi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTcwLjkzIiB5PSIxMjUyLjY0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1NzAuOTMiIHk9IjEyMDIuNjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjYyMC45MyIgeT0iMTIwMi42NCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IHk9IjEyNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTMwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEzNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTQ1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE1MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTU1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE2NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNzAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNzAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iODAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iODUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iOTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iOTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTA1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEwMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTE1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjIwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjI1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjMwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjM1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjQwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjUwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjQ1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjU1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjYwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxnPgogICAgPHJlY3QgeD0iNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjEwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMTUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIyMDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjI1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMzAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI0MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjM1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNDUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI1MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjU1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNjAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI2NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjcwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNzUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIxODAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI4NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8L2c+Cjwvc3ZnPgo=","base64")
      },
      {
        svg: Buffer("PHN2ZyBjbGFzcz0iZnJhbWUgZnJhbWUtNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjE4MDAiIHZpZXdCb3g9IjAgMCA5MDAgMTgwMCI+CiAgPGc+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45NCIgeT0iMTMwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTQiIHk9IjEzNTEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjk0IiB5PSIxNDAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQ3MC45MyIgeT0iMTQwMS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1MjAuOTgiIHk9IjE0MDEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTIwLjk4IiB5PSIxMzUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjU3MC45NyIgeT0iMTM1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2MjAuOTUiIHk9IjEzNTEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNjcwLjk0IiB5PSIxMzUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjY3MC45NCIgeT0iMTMwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2NzAuOTQiIHk9IjEyNTEuMzYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjk0IiB5PSIxNDUxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3MC45NiIgeT0iMTQ1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzMjAuOSIgeT0iMTQ1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzMjAuOSIgeT0iMTQwMS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyNzAuOTIiIHk9IjE0MDEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjIwLjkzIiB5PSIxNDAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjIyMC45MyIgeT0iMTM1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTQiIHk9IjE1MDEuMzYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjk0IiB5PSIxNTUxLjM0IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQ3MC45MyIgeT0iMTU1MS4zNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuOTYiIHk9IjE2MDEuNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTQiIHk9IjE2MDEuNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuOTQiIHk9IjE2NTEuMzgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjk0IiB5PSIxNzAxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45NCIgeT0iMTI1MS4zNiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuOTYiIHk9IjEyNTEuMzYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjk0IiB5PSIxMTUxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjUyMC45OCIgeT0iMTE1MS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1MjAuOTgiIHk9IjExMDEuMzQiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTcwLjk3IiB5PSIxMTAxLjM0IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjU3MC45NyIgeT0iMTA1MS4yOCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1NzAuOTciIHk9IjEwMDEuMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2MjAuOTUiIHk9IjEwMDEuMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2MjAuOTUiIHk9Ijk1MS4zMSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuOTYiIHk9IjEyMDEuMzEiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzcwLjk2IiB5PSIxMTUxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3MC45NiIgeT0iMTEwMS4zNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuOTYiIHk9IjEwNTEuMjgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjk0IiB5PSIxMDUxLjI4IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45NCIgeT0iMTAwMS4zIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45NCIgeT0iOTUxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC45NCIgeT0iOTAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3MC45NiIgeT0iOTAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3MC45NiIgeT0iODUxLjI3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3MC45NiIgeT0iODAxLjI5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM3MC45NiIgeT0iNzUxLjMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxnPgogICAgICA8cmVjdCBjbGFzcz0icGxhbnQtZmxvd2VyIiB4PSIzMjAuOSIgeT0iNzAxLjI1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZWRlZmE0Ii8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjMyMC45IiB5PSI2NTEuMjYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMzcwLjk2IiB5PSI3MDEuMjUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMzIwLjkiIHk9Ijc1MS4zIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjI3MC45MiIgeT0iNzAxLjI1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iNzAuOTEiIHk9IjExMDEuMzQiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNlZGVmYTQiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iNzAuOTEiIHk9IjEwNTEuMjgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMTIwLjg5IiB5PSIxMTAxLjM0IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjcwLjkxIiB5PSIxMTUxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjIwLjkyIiB5PSIxMTAxLjM0IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMTcwLjk1IiB5PSIxMzAxLjM1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZWRlZmE0Ii8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjE3MC45NSIgeT0iMTI1MS4zNiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogI2ZmZmZmZiIvPgogICAgICA8cmVjdCBjbGFzcz0icGxhbnQtZmxvd2VyIiB4PSIyMjAuOTMiIHk9IjEzMDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMTcwLjk1IiB5PSIxMzUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjEyMC44OSIgeT0iMTMwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogI2ZmZmZmZiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjU3MC45NyIgeT0iOTAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZWRlZmE0Ii8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjU3MC45NyIgeT0iODUxLjI3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjYyMC45NSIgeT0iOTAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjU3MC45NyIgeT0iOTUxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjUyMC45OCIgeT0iOTAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iNjIwLjk1IiB5PSIxMjEwLjQxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZWRlZmE0Ii8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjYyMC45NSIgeT0iMTE2MC40MiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogI2ZmZmZmZiIvPgogICAgICA8cmVjdCBjbGFzcz0icGxhbnQtZmxvd2VyIiB4PSI2NzAuOTQiIHk9IjEyMTAuNDEiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iNjIwLjk1IiB5PSIxMjYwLjM5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjU3MC45NyIgeT0iMTIxMC40MSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogI2ZmZmZmZiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjE3MC45NSIgeT0iODAxLjI5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjZWRlZmE0Ii8+CiAgICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mbG93ZXIiIHg9IjE3MC45NSIgeT0iNzUxLjMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMjIwLjkzIiB5PSI4MDEuMjkiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMTcwLjk1IiB5PSI4NTEuMjciIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgICAgPHJlY3QgY2xhc3M9InBsYW50LWZsb3dlciIgeD0iMTIwLjg5IiB5PSI4MDEuMjkiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiLz4KICAgIDwvZz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzIwLjkiIHk9IjExMDEuMzQiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjcwLjkyIiB5PSIxMDUxLjI4IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjIyMC45MyIgeT0iMTA1MS4yOCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIxNzAuOTUiIHk9IjEwNTEuMjgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTcwLjk1IiB5PSIxMDAxLjMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTcwLjk1IiB5PSI5NTEuMzEiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTcwLjk1IiB5PSI5MDEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTIwLjg5IiB5PSI5MDEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTIwLjg5IiB5PSI4NTEuMjciIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzIwLjkiIHk9IjEyNTEuMzYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjcwLjkyIiB5PSIxMjUxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjIyMC45MyIgeT0iMTI1MS4zNiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMjAuOTMiIHk9IjEyMDEuMzEiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTcwLjk1IiB5PSIxMjAxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjEyMC44OSIgeT0iMTIwMS4zMSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIxMjAuODkiIHk9IjExNTEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OSIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjcwLjkyIiB5PSIxMTAxLjM0IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTkiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQ3MC45MyIgeT0iMTE1MS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk5IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDwvZz4KICA8cmVjdCB5PSIxMjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTIwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTQwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTYwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjcwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjgwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijg1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjkwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9Ijk1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEwNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTEwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjExNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIyNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIzNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI0NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI1NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8Zz4KICAgIDxyZWN0IHg9IjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIxMDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjE1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMjAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIyNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjMwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNDAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIzNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjQ1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNTAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI1NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjYwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI3MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9Ijc1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMTgwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iODUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPC9nPgo8L3N2Zz4K","base64")
      },
      {
        svg: Buffer("PHN2ZyBjbGFzcz0iZnJhbWUgZnJhbWUtNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjE4MDAiIHZpZXdCb3g9IjAgMCA5MDAgMTgwMCI+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuMDMiIHk9IjEzMDEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC4wMyIgeT0iMTM1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjAzIiB5PSIxNDAxLjM1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0NzAuMDEiIHk9IjE0MDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjUxOS45OSIgeT0iMTQwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTE5Ljk5IiB5PSIxMzUxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1NjkuOTciIHk9IjEzNTEuMzciIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjYyMC4wMiIgeT0iMTM1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNjIwLjAyIiB5PSIxMzAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2MjAuMDIiIHk9IjEyNTEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjY3MCIgeT0iMTI1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNjcwIiB5PSIxMjAxLjM1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2NzAiIHk9IjExNTEuMzciIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjcxOS45OSIgeT0iMTE1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNzcwLjA0IiB5PSIxMTUxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuMDMiIHk9IjE0NTEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM2OS45NyIgeT0iMTQ1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzE5Ljk5IiB5PSIxNDUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzMTkuOTkiIHk9IjE0MDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjI3MC4wMSIgeT0iMTQwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjE5Ljk2IiB5PSIxNDAxLjM1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMTkuOTYiIHk9IjEzNTEuMzciIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjE2OS45OCIgeT0iMTM1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTIwIiB5PSIxMzUxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuMDMiIHk9IjE1MDEuMzgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC4wMyIgeT0iMTU1MS4zNiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDcwLjAxIiB5PSIxNTUxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNjkuOTciIHk9IjE2MDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC4wMyIgeT0iMTYwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjAzIiB5PSIxNjUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuMDMiIHk9IjE3MDEuMzgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC4wMyIgeT0iMTI1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzY5Ljk3IiB5PSIxMjUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuMDMiIHk9IjExNTEuMzciIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjUxOS45OSIgeT0iMTE1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTE5Ljk5IiB5PSIxMTAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI1NjkuOTciIHk9IjExMDEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjU2OS45NyIgeT0iMTA1MS4zNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNTY5Ljk3IiB5PSIxMDAxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2MjAuMDIiIHk9IjEwMDEuMzYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjYyMC4wMiIgeT0iOTUxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI2MjAuMDIiIHk9IjkwMS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNjcwIiB5PSI5MDEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjcxOS45OSIgeT0iOTAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNjkuOTciIHk9IjEyMDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjM2OS45NyIgeT0iMTE1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzY5Ljk3IiB5PSIxMTAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNjkuOTciIHk9IjEwNTEuMzQiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQyMC4wMyIgeT0iMTA1MS4zNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjAzIiB5PSIxMDAxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0MjAuMDMiIHk9Ijk1MS4zMSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDIwLjAzIiB5PSI5MDEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQ2OS45NyIgeT0iOTAxLjM5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0NjkuOTciIHk9Ijg1MS4zNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDY5Ljk3IiB5PSI4MDEuMzYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQ2OS45NyIgeT0iNzUxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSI0NjkuOTciIHk9IjcwMS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDY5Ljk3IiB5PSI2NTEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjQxOS45OSIgeT0iNjUxLjM1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzNzAuMDEiIHk9IjY1MS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMzE5Ljk5IiB5PSIxMTAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyNzAuMDEiIHk9IjEwNTEuMzQiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjI3MC4wOCIgeT0iMTAwMS4zNiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjIwLjAzIiB5PSIxMDAxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyNjkuOTQiIHk9IjkwMS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjIwLjAzIiB5PSI5NTEuMzEiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjIxOS45OSIgeT0iOTAxLjM5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMTkuOTkiIHk9Ijg1MS40MSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjE5Ljk5IiB5PSI4MDEuNDMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjE3MC4wMSIgeT0iODAxLjQzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIxMTkuOTYiIHk9IjgwMS40MyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxnPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSIyMCIgeT0iMTE1MS40MSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2RlNjY4MyIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI2OS45OCIgeT0iMTE1MS40MSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSIxMTkuOTYiIHk9IjExNTEuNDEiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iMjAiIHk9IjEyMDEuMzkiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNjkuOTgiIHk9IjEyMDEuMzkiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iMTE5Ljk2IiB5PSIxMjAxLjM5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjIwIiB5PSIxMjUxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjY5Ljk4IiB5PSIxMjUxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjExOS45NiIgeT0iMTI1MS4zNyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogIDwvZz4KICA8Zz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNzAuMDEiIHk9IjE0MDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNkZTY2ODMiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iMTIwIiB5PSIxNDAxLjM1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjE2OS45OCIgeT0iMTQwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI3MC4wMSIgeT0iMTQ1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSIxMjAiIHk9IjE0NTEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iMTY5Ljk4IiB5PSIxNDUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjcwLjAxIiB5PSIxNTAxLjM4IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjEyMCIgeT0iMTUwMS4zOCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSIxNjkuOTgiIHk9IjE1MDEuMzgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICA8L2c+CiAgPGc+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjMxOS45NiIgeT0iNzAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZGU2NjgzIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjM3MC4wMSIgeT0iNzAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjQxOS45OSIgeT0iNzAxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjMxOS45NiIgeT0iNzUxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjM3MC4wMSIgeT0iNzUxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjQxOS45OSIgeT0iNzUxLjMxIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjMxOS45NiIgeT0iODAxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjM3MC4wMSIgeT0iODAxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjQxOS45OSIgeT0iODAxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgPC9nPgogIDxnPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI2NzAiIHk9Ijk1MS4zMSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2RlNjY4MyIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI3MTkuOTkiIHk9Ijk1MS4zMSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI3NzAuMDQiIHk9Ijk1MS4zMSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI2NzAiIHk9IjEwMDEuMzYiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNzE5Ljk5IiB5PSIxMDAxLjM2IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9Ijc3MC4wNCIgeT0iMTAwMS4zNiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI2NzAiIHk9IjEwNTEuMzQiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNzE5Ljk5IiB5PSIxMDUxLjM0IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9Ijc3MC4wNCIgeT0iMTA1MS4zNCIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogIDwvZz4KICA8Zz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNzE5Ljk5IiB5PSIxMjAxLjM1IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjZGU2NjgzIi8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9Ijc3MC4wNCIgeT0iMTIwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI4MjAuMDIiIHk9IjEyMDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNzE5Ljk5IiB5PSIxMjUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9Ijc3MC4wNCIgeT0iMTI1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI4MjAuMDIiIHk9IjEyNTEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNzE5Ljk5IiB5PSIxMzAxLjMyIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9Ijc3MC4wNCIgeT0iMTMwMS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI4MjAuMDIiIHk9IjEzMDEuMzIiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICA8L2c+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIzMTkuOTkiIHk9IjEyNTEuMzMiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjI3MC4wMSIgeT0iMTI1MS4zMyIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMjE5Ljk2IiB5PSIxMjUxLjMzIiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIyMTkuOTYiIHk9IjEyMDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjE2OS45OCIgeT0iMTIwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iMTcwLjA1IiB5PSIxMTUxLjM0IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgY2xhc3M9InBsYW50LXN0YWxrIiB4PSIxNzAuMDUiIHk9IjExMDEuMzkiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjExOS45NiIgeT0iMTEwMS4zNSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNjkuOTgiIHk9IjExMDEuMzUiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICM5NGNhNWQiLz4KICA8cmVjdCBjbGFzcz0icGxhbnQtc3RhbGsiIHg9IjI3MC4wMSIgeT0iMTEwMS4zMiIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogIzk0Y2E1ZCIvPgogIDxyZWN0IGNsYXNzPSJwbGFudC1zdGFsayIgeD0iNDcwLjAxIiB5PSIxMTUxLjM3IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjOTRjYTVkIi8+CiAgPHJlY3QgeT0iMTI1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjEyMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMzAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTM1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE0MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNDUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTUwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE2MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxNTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTY1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjE3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI3MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI2NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI4MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI4NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI5MDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSI5NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMDUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTAwMS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDxyZWN0IHk9IjExMDEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxMTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICA8cmVjdCB5PSIxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMjUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMzAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iMzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNDAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNTAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNDUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNTUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPHJlY3QgeT0iNjAxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgPGc+CiAgICA8cmVjdCB4PSI1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMTAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIxNTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjIwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMjUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSIzMDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjQwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iMzUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI0NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjUwMCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNTUwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI2MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjY1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogICAgPHJlY3QgeD0iNzAwIiB5PSIxNzUxLjM1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHN0eWxlPSJmaWxsOiBub25lIi8+CiAgICA8cmVjdCB4PSI3NTAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9IjE4MDAiIHk9IjE3NTEuMzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgc3R5bGU9ImZpbGw6IG5vbmUiLz4KICAgIDxyZWN0IHg9Ijg1MCIgeT0iMTc1MS4zNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBzdHlsZT0iZmlsbDogbm9uZSIvPgogIDwvZz4KICA8Zz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iNjkuOTQiIHk9Ijg1MS40MSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2RlNjY4MyIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSIxMTkuOTMiIHk9Ijg1MS40MSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSIxNjkuOTgiIHk9Ijg1MS40MSIgd2lkdGg9IjQ5Ljk4IiBoZWlnaHQ9IjQ5Ljk4IiBzdHlsZT0iZmlsbDogI2MxM2I1NCIvPgogICAgPHJlY3QgY2xhc3M9InBsYW50LWZydWl0IiB4PSI2OS45NCIgeT0iOTAxLjM5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjExOS45MyIgeT0iOTAxLjM5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjE2OS45OCIgeT0iOTAxLjM5IiB3aWR0aD0iNDkuOTgiIGhlaWdodD0iNDkuOTgiIHN0eWxlPSJmaWxsOiAjYzEzYjU0Ii8+CiAgICA8cmVjdCBjbGFzcz0icGxhbnQtZnJ1aXQiIHg9IjY5Ljk0IiB5PSI5NTEuMzgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iMTE5LjkzIiB5PSI5NTEuMzgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICAgIDxyZWN0IGNsYXNzPSJwbGFudC1mcnVpdCIgeD0iMTY5Ljk4IiB5PSI5NTEuMzgiIHdpZHRoPSI0OS45OCIgaGVpZ2h0PSI0OS45OCIgc3R5bGU9ImZpbGw6ICNjMTNiNTQiLz4KICA8L2c+Cjwvc3ZnPgo=","base64")
      }
    ]
  },
  reducers: {
    click: function (params, state, send) {
      var newState = extend(state)
      newState.frame++
      newState.clicks++
      if (newState.frame === 7) {
        newState.plants++
        newState.frame = 0
      }
      return newState
    }
  },
  subscriptions: [
    function onclick (send) {
      document.addEventListener('click', function () {
        send('game:click')
      })
    }
  ]
}

}).call(this,require("buffer").Buffer)
},{"buffer":7,"path":17,"xtend":29}],3:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":26}],4:[function(require,module,exports){
'use strict'

exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }

  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],5:[function(require,module,exports){

},{}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],7:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; i++) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  that.write(string, encoding)
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

function arrayIndexOf (arr, val, byteOffset, encoding) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var foundIndex = -1
  for (var i = 0; byteOffset + i < arrLength; i++) {
    if (read(arr, byteOffset + i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
      if (foundIndex === -1) foundIndex = i
      if (i - foundIndex + 1 === valLength) return (byteOffset + foundIndex) * indexSize
    } else {
      if (foundIndex !== -1) i -= i - foundIndex
      foundIndex = -1
    }
  }
  return -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  if (Buffer.isBuffer(val)) {
    // special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(this, val, byteOffset, encoding)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset, encoding)
  }

  throw new TypeError('val must be string, number or Buffer')
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; i++) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; i++) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":4,"ieee754":12,"isarray":15}],8:[function(require,module,exports){
const history = require('sheet-router/history')
const sheetRouter = require('sheet-router')
const document = require('global/document')
const href = require('sheet-router/href')
const hash = require('sheet-router/hash')
const hashMatch = require('hash-match')
const sendAction = require('send-action')
const mutate = require('xtend/mutable')
const assert = require('assert')
const xtend = require('xtend')
const yo = require('yo-yo')

choo.view = yo
module.exports = choo

// framework for creating sturdy web applications
// null -> fn
function choo () {
  const _models = []
  var _router = null

  start.toString = toString
  start.router = router
  start.model = model
  start.start = start

  return start

  // render the application to a string
  // (str, obj) -> str
  function toString (route, serverState) {
    const initialState = {}
    const nsState = {}

    _models.forEach(function (model) {
      const ns = model.namespace
      if (ns) {
        if (!nsState[ns]) nsState[ns] = {}
        apply(ns, model.state, nsState)
        nsState[ns] = xtend(nsState[ns], serverState[ns])
      } else {
        apply(model.namespace, model.state, initialState)
      }
    })

    const state = xtend(initialState, xtend(serverState, nsState))
    const tree = _router(route, state, function () {
      throw new Error('send() cannot be called on the server')
    })

    return tree.toString()
  }

  // start the application
  // (str?, obj?) -> DOMNode
  function start (rootId, opts) {
    if (!opts && typeof rootId !== 'string') {
      opts = rootId
      rootId = null
    }
    opts = opts || {}
    const name = opts.name || 'choo'
    const initialState = {}
    const reducers = {}
    const effects = {}

    _models.push(appInit(opts))
    _models.forEach(function (model) {
      if (model.state) apply(model.namespace, model.state, initialState)
      if (model.reducers) apply(model.namespace, model.reducers, reducers)
      if (model.effects) apply(model.namespace, model.effects, effects)
    })

    // send() is used to trigger actions inside
    // views, effects and subscriptions
    const send = sendAction({
      onaction: handleAction,
      onchange: onchange,
      state: initialState
    })

    // subscriptions are loaded after sendAction() is called
    // because they both need access to send() and can't
    // react to actions (read-only) - also wait on DOM to
    // be loaded
    document.addEventListener('DOMContentLoaded', function () {
      _models.forEach(function (model) {
        if (model.subscriptions) {
          assert.ok(Array.isArray(model.subscriptions), 'subs must be an arr')
          model.subscriptions.forEach(function (sub) {
            sub(send)
          })
        }
      })
    })

    // If an id is provided, the application will rehydrate
    // on the node. If no id is provided it will return
    // a tree that's ready to be appended to the DOM.
    //
    // The rootId is determined to find the application root
    // on update. Since the DOM nodes change between updates,
    // we must call document.querySelector() to find the root.
    // Use different names when loading multiple choo applications
    // on the same page
    if (rootId) {
      document.addEventListener('DOMContentLoaded', function (event) {
        rootId = rootId.replace(/^#/, '')

        const oldTree = document.querySelector('#' + rootId)
        assert.ok(oldTree, 'could not find node #' + rootId)

        const newTree = _router(send.state().app.location, send.state(), send)

        yo.update(oldTree, newTree)
      })
    } else {
      rootId = name + '-root'
      const tree = _router(send.state().app.location, send.state(), send)
      tree.setAttribute('id', rootId)
      return tree
    }

    // handle an action by either reducers, effects
    // or both - return the new state when done
    // (obj, obj, fn) -> obj
    function handleAction (action, state, send) {
      var reducersCalled = false
      var effectsCalled = false
      const newState = xtend(state)

      // validate if a namespace exists. Namespaces
      // are delimited by the first ':'. Perhaps
      // we'll allow recursive namespaces in the
      // future - who knows
      if (/:/.test(action.type)) {
        const arr = action.type.split(':')
        var ns = arr.shift()
        action.type = arr.join(':')
      }

      const _reducers = ns ? reducers[ns] : reducers
      if (_reducers && _reducers[action.type]) {
        if (ns) {
          const reducedState = _reducers[action.type](action, state[ns])
          if (!newState[ns]) newState[ns] = {}
          mutate(newState[ns], xtend(state[ns], reducedState))
        } else {
          mutate(newState, reducers[action.type](action, state))
        }
        reducersCalled = true
      }

      const _effects = ns ? effects[ns] : effects
      if (_effects && _effects[action.type]) {
        if (ns) _effects[action.type](action, state[ns], send)
        else _effects[action.type](action, state, send)
        effectsCalled = true
      }

      if (!reducersCalled && !effectsCalled) {
        throw new Error('Could not find action ' + action.type)
      }

      // allows (newState === oldState) checks
      return (reducersCalled) ? newState : state
    }

    // update the DOM after every state mutation
    // (obj, obj) -> null
    function onchange (action, newState, oldState) {
      if (newState === oldState) return
      const oldTree = document.querySelector('#' + rootId)
      assert.ok(oldTree, "Could not find DOM node '#" + rootId + "' to update")
      const newTree = _router(newState.app.location, newState, send, oldState)
      newTree.setAttribute('id', rootId)
      yo.update(oldTree, newTree)
    }
  }

  // register all routes on the router
  // [obj|fn] -> null
  function router (cb) {
    _router = sheetRouter(cb)
    return _router
  }

  // create a new model
  // (str?, obj) -> null
  function model (model) {
    _models.push(model)
  }
}

// initial application state model
// obj -> obj
function appInit (opts) {
  const initialLocation = (opts.hash === true)
    ? hashMatch(document.location.hash)
    : document.location.href

  const model = {
    namespace: 'app',
    state: { location: initialLocation },
    subscriptions: [],
    reducers: {
      // handle href links
      location: function setLocation (action, state) {
        return {
          location: action.location.replace(/#.*/, '')
        }
      }
    }
  }

  // if hash routing explicitly enabled, subscribe to it
  if (opts.hash === true) {
    pushLocationSub(function (navigate) {
      hash(function (fragment) {
        navigate(hashMatch(fragment))
      })
    })
  // otherwise, subscribe to HTML5 history API
  } else {
    if (opts.history !== false) pushLocationSub(history)
    // enable catching <a href=""></a> links
    if (opts.href !== false) pushLocationSub(href)
  }

  return model

  // create a new subscription that modifies
  // 'app:location' and push it to be loaded
  // fn -> null
  function pushLocationSub (cb) {
    model.subscriptions.push(function (send) {
      cb(function (href) {
        send('app:location', { location: href })
      })
    })
  }
}

// compose an object conditionally
// optionally contains a namespace
// which is used to nest properties.
// (str, obj, obj) -> null
function apply (ns, source, target) {
  Object.keys(source).forEach(function (key) {
    if (ns) {
      if (!target[ns]) target[ns] = {}
      target[ns][key] = source[key]
    } else target[key] = source[key]
  })
}

},{"assert":3,"global/document":9,"hash-match":11,"send-action":19,"sheet-router":23,"sheet-router/hash":20,"sheet-router/history":21,"sheet-router/href":22,"xtend":29,"xtend/mutable":30,"yo-yo":31}],9:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":5}],10:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
module.exports = function hashMatch (hash, prefix) {
  var pre = prefix || '/';
  if (hash.length === 0) return pre;
  hash = hash.replace('#', '');
  hash = hash.replace(/\/$/, '')
  if (hash.indexOf('/') != 0) hash = '/' + hash;
  if (pre == '/') return hash;
  else return hash.replace(pre, '');
}

},{}],12:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],13:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],14:[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],15:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],16:[function(require,module,exports){
// Create a range object for efficently rendering strings to elements.
var range;

var testEl = (typeof document !== 'undefined') ?
    document.body || document.createElement('div') :
    {};

var XHTML = 'http://www.w3.org/1999/xhtml';
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
var hasAttributeNS;

if (testEl.hasAttributeNS) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttributeNS(namespaceURI, name);
    };
} else if (testEl.hasAttribute) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttribute(name);
    };
} else {
    hasAttributeNS = function(el, namespaceURI, name) {
        return !!el.getAttributeNode(name);
    };
}

function empty(o) {
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}

function toElement(str) {
    if (!range && document.createRange) {
        range = document.createRange();
        range.selectNode(document.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = document.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        fromEl.selected = toEl.selected;
        if (fromEl.selected) {
            fromEl.setAttribute('selected', '');
        } else {
            fromEl.removeAttribute('selected', '');
        }
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        fromEl.checked = toEl.checked;
        if (fromEl.checked) {
            fromEl.setAttribute('checked', '');
        } else {
            fromEl.removeAttribute('checked');
        }

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttributeNS(toEl, null, 'value')) {
            fromEl.removeAttribute('value');
        }

        fromEl.disabled = toEl.disabled;
        if (fromEl.disabled) {
            fromEl.setAttribute('disabled', '');
        } else {
            fromEl.removeAttribute('disabled');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            fromEl.firstChild.nodeValue = newValue;
        }
    }
};

function noop() {}

/**
 * Returns true if two node's names and namespace URIs are the same.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {boolean}
 */
var compareNodeNames = function(a, b) {
    return a.nodeName === b.nodeName &&
           a.namespaceURI === b.namespaceURI;
};

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === XHTML ?
        document.createElement(name) :
        document.createElementNS(namespaceURI, name);
}

/**
 * Loop over all of the attributes on the target node and make sure the original
 * DOM node has the same attributes. If an attribute found on the original node
 * is not on the new node then remove it from the original node.
 *
 * @param  {Element} fromNode
 * @param  {Element} toNode
 */
function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        attrName = attr.name;
        attrValue = attr.value;
        attrNamespaceURI = attr.namespaceURI;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
        } else {
            fromValue = fromNode.getAttribute(attrName);
        }

        if (fromValue !== attrValue) {
            if (attrNamespaceURI) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            } else {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (!hasAttributeNS(toNode, attrNamespaceURI, attrNamespaceURI ? attrName = attr.localName || attrName : attrName)) {
                fromNode.removeAttributeNode(attr);
            }
        }
    }
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdom(fromNode, toNode, options) {
    if (!options) {
        options = {};
    }

    if (typeof toNode === 'string') {
        if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
            var toNodeHtml = toNode;
            toNode = document.createElement('html');
            toNode.innerHTML = toNodeHtml;
        } else {
            toNode = toElement(toNode);
        }
    }

    // XXX optimization: if the nodes are equal, don't morph them
    /*
    if (fromNode.isEqualNode(toNode)) {
      return fromNode;
    }
    */

    var savedEls = {}; // Used to save off DOM elements with IDs
    var unmatchedEls = {};
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || options.onBeforeMorphEl || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || options.onBeforeMorphElChildren || noop;
    var childrenOnly = options.childrenOnly === true;
    var movedEls = [];

    function removeNodeHelper(node, nestedInSavedEl) {
        var id = getNodeKey(node);
        // If the node has an ID then save it off since we will want
        // to reuse it in case the target DOM tree has a DOM element
        // with the same ID
        if (id) {
            savedEls[id] = node;
        } else if (!nestedInSavedEl) {
            // If we are not nested in a saved element then we know that this node has been
            // completely discarded and will not exist in the final DOM.
            onNodeDiscarded(node);
        }

        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {
                removeNodeHelper(curChild, nestedInSavedEl || id);
                curChild = curChild.nextSibling;
            }
        }
    }

    function walkDiscardedChildNodes(node) {
        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {


                if (!getNodeKey(curChild)) {
                    // We only want to handle nodes that don't have an ID to avoid double
                    // walking the same saved element.

                    onNodeDiscarded(curChild);

                    // Walk recursively
                    walkDiscardedChildNodes(curChild);
                }

                curChild = curChild.nextSibling;
            }
        }
    }

    function removeNode(node, parentNode, alreadyVisited) {
        if (onBeforeNodeDiscarded(node) === false) {
            return;
        }

        parentNode.removeChild(node);
        if (alreadyVisited) {
            if (!getNodeKey(node)) {
                onNodeDiscarded(node);
                walkDiscardedChildNodes(node);
            }
        } else {
            removeNodeHelper(node);
        }
    }

    function morphEl(fromEl, toEl, alreadyVisited, childrenOnly) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
            // If an element with an ID is being morphed then it is will be in the final
            // DOM so clear it out of the saved elements collection
            delete savedEls[toElKey];
        }

        if (!childrenOnly) {
            if (onBeforeElUpdated(fromEl, toEl) === false) {
                return;
            }

            morphAttrs(fromEl, toEl);
            onElUpdated(fromEl);

            if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                return;
            }
        }

        if (fromEl.nodeName !== 'TEXTAREA') {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeId;

            var fromNextSibling;
            var toNextSibling;
            var savedEl;
            var unmatchedEl;

            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeId = getNodeKey(curToNodeChild);

                while (curFromNodeChild) {
                    var curFromNodeId = getNodeKey(curFromNodeChild);
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (!alreadyVisited) {
                        if (curFromNodeId && (unmatchedEl = unmatchedEls[curFromNodeId])) {
                            unmatchedEl.parentNode.replaceChild(curFromNodeChild, unmatchedEl);
                            morphEl(curFromNodeChild, unmatchedEl, alreadyVisited);
                            curFromNodeChild = fromNextSibling;
                            continue;
                        }
                    }

                    var curFromNodeType = curFromNodeChild.nodeType;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        var isCompatible = false;

                        // Both nodes being compared are Element nodes
                        if (curFromNodeType === ELEMENT_NODE) {
                            if (compareNodeNames(curFromNodeChild, curToNodeChild)) {
                                // We have compatible DOM elements
                                if (curFromNodeId || curToNodeId) {
                                    // If either DOM element has an ID then we
                                    // handle those differently since we want to
                                    // match up by ID
                                    if (curToNodeId === curFromNodeId) {
                                        isCompatible = true;
                                    }
                                } else {
                                    isCompatible = true;
                                }
                            }

                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                morphEl(curFromNodeChild, curToNodeChild, alreadyVisited);
                            }
                        // Both nodes being compared are Text or Comment nodes
                    } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }

                        if (isCompatible) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }
                    }

                    // No compatible match so remove the old node from the DOM
                    // and continue trying to find a match in the original DOM
                    removeNode(curFromNodeChild, fromEl, alreadyVisited);
                    curFromNodeChild = fromNextSibling;
                }

                if (curToNodeId) {
                    if ((savedEl = savedEls[curToNodeId])) {
                        morphEl(savedEl, curToNodeChild, true);
                        // We want to append the saved element instead
                        curToNodeChild = savedEl;
                    } else {
                        // The current DOM element in the target tree has an ID
                        // but we did not find a match in any of the
                        // corresponding siblings. We just put the target
                        // element in the old DOM tree but if we later find an
                        // element in the old DOM tree that has a matching ID
                        // then we will replace the target element with the
                        // corresponding old element and morph the old element
                        unmatchedEls[curToNodeId] = curToNodeChild;
                    }
                }

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to node"
                // to the end
                if (onBeforeNodeAdded(curToNodeChild) !== false) {
                    fromEl.appendChild(curToNodeChild);
                    onNodeAdded(curToNodeChild);
                }

                if (curToNodeChild.nodeType === ELEMENT_NODE &&
                    (curToNodeId || curToNodeChild.firstChild)) {
                    // The element that was just added to the original DOM may
                    // have some nested elements with a key/ID that needs to be
                    // matched up with other elements. We'll add the element to
                    // a list so that we can later process the nested elements
                    // if there are any unmatched keyed elements that were
                    // discarded
                    movedEls.push(curToNodeChild);
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                fromNextSibling = curFromNodeChild.nextSibling;
                removeNode(curFromNodeChild, fromEl, alreadyVisited);
                curFromNodeChild = fromNextSibling;
            }
        }

        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
        // Handle the case where we are given two DOM nodes that are not
        // compatible (e.g. <div> --> <span> or <div> --> TEXT)
        if (morphedNodeType === ELEMENT_NODE) {
            if (toNodeType === ELEMENT_NODE) {
                if (!compareNodeNames(fromNode, toNode)) {
                    onNodeDiscarded(fromNode);
                    morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                }
            } else {
                // Going from an element node to a text node
                morphedNode = toNode;
            }
        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
            if (toNodeType === morphedNodeType) {
                morphedNode.nodeValue = toNode.nodeValue;
                return morphedNode;
            } else {
                // Text node to something else
                morphedNode = toNode;
            }
        }
    }

    if (morphedNode === toNode) {
        // The "to node" was not compatible with the "from node" so we had to
        // toss out the "from node" and use the "to node"
        onNodeDiscarded(fromNode);
    } else {
        morphEl(morphedNode, toNode, false, childrenOnly);

        /**
         * What we will do here is walk the tree for the DOM element that was
         * moved from the target DOM tree to the original DOM tree and we will
         * look for keyed elements that could be matched to keyed elements that
         * were earlier discarded.  If we find a match then we will move the
         * saved element into the final DOM tree.
         */
        var handleMovedEl = function(el) {
            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var savedEl = savedEls[key];
                    if (savedEl && compareNodeNames(curChild, savedEl)) {
                        curChild.parentNode.replaceChild(savedEl, curChild);
                        // true: already visited the saved el tree
                        morphEl(savedEl, curChild, true);
                        curChild = nextSibling;
                        if (empty(savedEls)) {
                            return false;
                        }
                        continue;
                    }
                }

                if (curChild.nodeType === ELEMENT_NODE) {
                    handleMovedEl(curChild);
                }

                curChild = nextSibling;
            }
        };

        // The loop below is used to possibly match up any discarded
        // elements in the original DOM tree with elemenets from the
        // target tree that were moved over without visiting their
        // children
        if (!empty(savedEls)) {
            handleMovedElsLoop:
            while (movedEls.length) {
                var movedElsTemp = movedEls;
                movedEls = [];
                for (var i=0; i<movedElsTemp.length; i++) {
                    if (handleMovedEl(movedElsTemp[i]) === false) {
                        // There are no more unmatched elements so completely end
                        // the loop
                        break handleMovedElsLoop;
                    }
                }
            }
        }

        // Fire the "onNodeDiscarded" event for any saved elements
        // that never found a new home in the morphed DOM
        for (var savedElId in savedEls) {
            if (savedEls.hasOwnProperty(savedElId)) {
                var savedEl = savedEls[savedElId];
                onNodeDiscarded(savedEl);
                walkDiscardedChildNodes(savedEl);
            }
        }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        // If we had to swap out the from node with a new node because the old
        // node was not compatible with the target node then we need to
        // replace the old DOM node in the original DOM tree. This is only
        // possible if the original DOM node was part of a DOM tree which
        // we know is the case if it has a parent node.
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
}

module.exports = morphdom;

},{}],17:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":6}],18:[function(require,module,exports){
const assert = require('assert')

module.exports = match

// get url path section from a url
// strip querystrings / hashes
// strip protocol
// strip hostname and port (both ip and route)
// str -> str
function match (route) {
  assert.equal(typeof route, 'string')

  return route.trim()
    .replace(/[\?|#].*$/, '')
    .replace(/^(?:https?\:)\/\//, '')
    .replace(/^(?:[\w+(?:-\w+)+.])+(?:[\:0-9]{4,5})?/, '')
    .replace(/\/$/, '')
}

},{"assert":3}],19:[function(require,module,exports){
(function (process){
var extend = require('xtend')

module.exports = function sendAction (options) {
  if (!options) throw new Error('options required')
  if (!options.onaction) throw new Error('options.onaction required')
  if (!options.onchange) throw new Error('options.onchange required')
  var state = options.state || {}

  function send (action, params) {
    process.nextTick(function () {
      if (typeof action === 'object') {
        params = action
      } else if (typeof action === 'string') {
        params = extend({ type: action }, params)
      }

      var stateUpdates = options.onaction(params, state, send)
      if (state !== stateUpdates) {
        update(params, stateUpdates)
      }
    })
  }

  function update (params, stateUpdates) {
    var oldState = state
    state = extend(state, stateUpdates)
    options.onchange(params, state, oldState)
  }

  send.event = function sendAction_event (action, params, flag) {
    if (typeof flag === undefined) flag = true
    return function sendAction_send_thunk (e) {
      if (flag && e && e.preventDefault) e.preventDefault()
      send(action, params, flag)
    }
  }

  send.state = function sendAction_state () {
    return state
  }

  return send
}

}).call(this,require('_process'))
},{"_process":6,"xtend":29}],20:[function(require,module,exports){
const window = require('global/window')
const assert = require('assert')

module.exports = hash

// listen to window hashchange events
// and update router accordingly
// fn(cb) -> null
function hash (cb) {
  assert.equal(typeof cb, 'function', 'cb must be a function')
  window.onhashchange = function (e) {
    cb(window.location.hash)
  }
}

},{"assert":3,"global/window":10}],21:[function(require,module,exports){
const document = require('global/document')
const window = require('global/window')
const assert = require('assert')

module.exports = history

// listen to html5 pushstate events
// and update router accordingly
// fn(str) -> null
function history (cb) {
  assert.equal(typeof cb, 'function', 'cb must be a function')
  window.onpopstate = function () {
    cb(document.location.href)
  }
}

},{"assert":3,"global/document":9,"global/window":10}],22:[function(require,module,exports){
const window = require('global/window')
const assert = require('assert')

module.exports = href

// handle a click if is anchor tag with an href
// and url lives on the same domain. Replaces
// trailing '#' so empty links work as expected.
// fn(str) -> null
function href (cb) {
  assert.equal(typeof cb, 'function', 'cb must be a function')

  window.onclick = function (e) {
    const node = (function traverse (node) {
      if (!node) return
      if (node.localName !== 'a') return traverse(node.parentNode)
      if (node.href === undefined) return traverse(node.parentNode)
      if (window.location.host !== node.host) return traverse(node.parentNode)
      return node
    })(e.target)

    if (!node) return

    e.preventDefault()
    const href = node.href.replace(/#$/, '')
    cb(href)
    window.history.pushState({}, null, href)
  }
}

},{"assert":3,"global/window":10}],23:[function(require,module,exports){
const pathname = require('pathname-match')
const wayfarer = require('wayfarer')
const assert = require('assert')

module.exports = sheetRouter

// Fast, modular client router
// fn(str, any[..], fn?) -> fn(str, any[..])
function sheetRouter (dft, createTree, createRoute) {
  createRoute = createRoute ? createRoute(r) : r
  if (!createTree) {
    createTree = dft
    dft = ''
  }

  assert.equal(typeof dft, 'string', 'dft must be a string')
  assert.equal(typeof createTree, 'function', 'createTree must be a function')

  const router = wayfarer(dft)
  const tree = createTree(createRoute)

  // register tree in router
  ;(function walk (tree, route) {
    if (Array.isArray(tree[0])) {
      // walk over all routes at the root of the tree
      tree.forEach(function (node) {
        walk(node, route)
      })
    } else if (tree[1]) {
      // handle inline functions as args
      const innerRoute = tree[0]
        ? route.concat(tree[0]).join('/')
        : route.length ? route.join('/') : tree[0]
      router.on(innerRoute, tree[1])
      walk(tree[2], route.concat(tree[0]))
    } else if (Array.isArray(tree[2])) {
      // traverse and append route
      walk(tree[2], route.concat(tree[0]))
    } else {
      // register path in router
      const nwRoute = tree[0]
        ? route.concat(tree[0]).join('/')
        : route.length ? route.join('/') : tree[0]
      router.on(nwRoute, tree[2])
    }
  })(tree, [])

  // match a route on the router
  return function match (route) {
    assert.equal(typeof route, 'string', 'route must be a string')
    const args = [].slice.call(arguments)
    args[0] = pathname(args[0])
    return router.apply(null, args)
  }
}

// register regular route
function r (route, inline, child) {
  if (!child) {
    child = inline
    inline = null
  }
  assert.equal(typeof route, 'string', 'route must be a string')
  assert.ok(child, 'child exists')
  route = route.replace(/^\//, '')
  return [ route, inline, child ]
}

},{"assert":3,"pathname-match":18,"wayfarer":27}],24:[function(require,module,exports){

/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}


},{}],25:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],26:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":25,"_process":6,"inherits":13}],27:[function(require,module,exports){
const assert = require('assert')
const sliced = require('sliced')
const trie = require('./trie')

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  const _default = (dft || '').replace(/^\//, '')
  const _trie = trie()

  emit._trie = _trie
  emit.emit = emit
  emit.on = on
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, cb) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof cb, 'function')

    route = route || '/'

    if (cb && cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      const node = _trie.create(route)
      node.cb = cb
    }

    return emit
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    assert.notEqual(route, undefined, "'route' must be defined")
    const args = sliced(arguments)

    const node = _trie.match(route)
    if (node && node.cb) {
      args[0] = node.params
      return node.cb.apply(null, args)
    }

    const dft = _trie.match(_default)
    if (dft && dft.cb) {
      args[0] = dft.params
      return dft.cb.apply(null, args)
    }

    throw new Error("route '" + route + "' did not match")
  }
}

},{"./trie":28,"assert":3,"sliced":24}],28:[function(require,module,exports){
const mutate = require('xtend/mutable')
const assert = require('assert')
const xtend = require('xtend')

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> null
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  const routes = route.replace(/^\//, '').split('/')
  return (function createNode (index, trie, routes) {
    const route = routes[index]

    if (route === undefined) return trie

    var node = null
    if (/^:/.test(route)) {
      // if node is a name match, set name and append to ':' node
      if (!trie.nodes['$$']) {
        node = { nodes: {} }
        trie.nodes['$$'] = node
      } else {
        node = trie.nodes['$$']
      }
      trie.name = route.replace(/^:/, '')
    } else if (!trie.nodes[route]) {
      node = { nodes: {} }
      trie.nodes[route] = node
    } else {
      node = trie.nodes[route]
    }

    // we must recurse deeper
    return createNode(index + 1, node, routes)
  })(0, this.trie, routes)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  const routes = route.replace(/^\//, '').split('/')
  const params = {}

  var node = (function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    const route = routes[index]
    if (route === undefined) return trie

    if (trie.nodes[route]) {
      // match regular routes first
      return search(index + 1, trie.nodes[route])
    } else if (trie.name) {
      // match named routes
      params[trie.name] = route
      return search(index + 1, trie.nodes['$$'])
    } else {
      // no matches found
      return search(index + 1)
    }
  })(0, this.trie)

  if (!node) return undefined
  node = xtend(node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  const split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    const headArr = split.splice(0, split.length - 1)
    const head = headArr.join('/')
    key = split[0]
    node = this.create(head)
  }

  mutate(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    mutate(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}

},{"assert":3,"xtend":29,"xtend/mutable":30}],29:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],30:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],31:[function(require,module,exports){
var bel = {} // turns template tag into DOM elements
var morphdom = require('morphdom') // efficiently diffs + morphs two DOM elements
var defaultEvents = require('./update-events.js') // default events to be copied when dom elements update

module.exports = bel

// TODO move this + defaultEvents to a new module once we receive more feedback
module.exports.update = function (fromNode, toNode, opts) {
  if (!opts) opts = {}
  if (opts.events !== false) {
    if (!opts.onBeforeMorphEl) opts.onBeforeMorphEl = copier
  }

  return morphdom(fromNode, toNode, opts)

  // morphdom only copies attributes. we decided we also wanted to copy events
  // that can be set via attributes
  function copier (f, t) {
    // copy events:
    var events = opts.events || defaultEvents
    for (var i = 0; i < events.length; i++) {
      var ev = events[i]
      if (t[ev]) { // if new element has a whitelisted attribute
        f[ev] = t[ev] // update existing element
      } else if (f[ev]) { // if existing element has it and new one doesnt
        f[ev] = undefined // remove it from existing element
      }
    }
    // copy values for form elements
    if (f.nodeName === 'INPUT' || f.nodeName === 'TEXTAREA' || f.nodeName === 'SELECT') {
      if (t.getAttribute('value') === null) t.value = f.value
    }
  }
}

},{"./update-events.js":32,"morphdom":16}],32:[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],33:[function(require,module,exports){
module.exports = function yoyoifyAppendChild (el, childs) {
  for (var i = 0; i < childs.length; i++) {
    var node = childs[i]
    if (Array.isArray(node)) {
      yoyoifyAppendChild(el, node)
      continue
    }
    if (typeof node === 'number' ||
      typeof node === 'boolean' ||
      node instanceof Date ||
      node instanceof RegExp) {
      node = node.toString()
    }
    if (typeof node === 'string') {
      if (el.lastChild && el.lastChild.nodeName === '#text') {
        el.lastChild.nodeValue += node
        continue
      }
      node = document.createTextNode(node)
    }
    if (node && node.nodeType) {
      el.appendChild(node)
    }
  }
}

},{}],34:[function(require,module,exports){
var el = {}
var css = 0

module.exports = function (params, state, send) {
  var frame = state.game.frame
  var image = state.game.frames[frame]

  var prefix = ((require('insert-css')("._cc4da199 {\n      color: #333;\n      height: 100%;\n      text-align: center;\n      font-family: monospace;\n      font-weight: 300;\n      color: #94ca5d;\n      font-size: 20px;\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      -khtml-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    ._cc4da199 h1 {\n      font-size: 20px;\n    }\n\n    ._cc4da199 .svg-wrapper {\n      height: 100%;\n    }\n\n    ._cc4da199 .plants {\n      font-size: 15px;\n    }\n\n    ._cc4da199 .frame {\n      width: auto;\n      height: 400px;\n      display: block;\n      margin: 0 auto;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhZ2VzL3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsNEJBQTRCO01BQzVCLDBCQUEwQjtNQUMxQix5QkFBeUI7TUFDekIsdUJBQXVCO01BQ3ZCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsZ0JBQWdCO0tBQ2pCOztJQUVEO01BQ0UsZ0JBQWdCO0tBQ2pCOztJQUVEO01BQ0UsYUFBYTtLQUNkOztJQUVEO01BQ0UsZ0JBQWdCO0tBQ2pCOztJQUVEO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxlQUFlO01BQ2YsZUFBZTtLQUNoQiIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICM5NGNhNWQ7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAuc3ZnLXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5wbGFudHMge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIC5mcmFtZSB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH0iXX0= */") || true) && "_cc4da199")

  var svgWrapper = (function () {
          var ac = require('/Users/sdv/workspace/popuparcade/grow/node_modules/yo-yoify/lib/appendChild.js')
          var bel0 = document.createElement("div")
bel0.setAttribute("class", "svg-wrapper")
          return bel0
        }())
  svgWrapper.innerHTML = image.svg

  return (function () {
          var ac = require('/Users/sdv/workspace/popuparcade/grow/node_modules/yo-yoify/lib/appendChild.js')
          var bel3 = document.createElement("div")
bel3.setAttribute("class", arguments[3])
var bel0 = document.createElement("h1")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("div")
bel1.setAttribute("class", "plants")
ac(bel1, [arguments[1]])
var bel2 = document.createElement("div")
bel2.setAttribute("class", "transition")
ac(bel2, ["\n      ",arguments[2],"\n    "])
ac(bel3, ["\n    ",bel0,"\n    ",bel1,"\n    ",bel2,"\n    "])
          return bel3
        }(state.game.title,state.game.plants || 'click',svgWrapper,prefix))
}

},{"/Users/sdv/workspace/popuparcade/grow/node_modules/yo-yoify/lib/appendChild.js":33,"insert-css":14}]},{},[1]);
