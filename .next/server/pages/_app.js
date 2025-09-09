"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=GlobalStyles!=!./node_modules/@mui/material/index.js":
/*!**************************************************************************************!*\
  !*** __barrel_optimize__?names=GlobalStyles!=!./node_modules/@mui/material/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyles: () => (/* reexport safe */ _GlobalStyles_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _GlobalStyles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalStyles/index.js */ "./node_modules/@mui/material/GlobalStyles/index.js");



/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\pages\\\\_app.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-inter\",\"display\":\"swap\"}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\_app.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-inter\\\",\\\"display\\\":\\\"swap\\\"}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_GlobalStyles_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=GlobalStyles!=!@mui/material */ \"__barrel_optimize__?names=GlobalStyles!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/createEmotionCache */ \"./src/utils/createEmotionCache.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n// Create a theme instance\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#91FF30\",\n            contrastText: \"#222c24\"\n        },\n        secondary: {\n            main: \"#0F172A\"\n        },\n        background: {\n            default: \"#f6ffed\"\n        }\n    },\n    typography: {\n        // Use the globally injected CSS variable for Inter\n        fontFamily: \"var(--font-inter)\",\n        h1: {\n            fontSize: \"120px\",\n            fontWeight: 100,\n            letterSpacing: \"0.02em\",\n            textTransform: \"uppercase\"\n        },\n        h6: {\n            fontSize: \"18px\",\n            fontWeight: 400\n        }\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    borderRadius: \"100px\",\n                    height: \"60px\",\n                    fontWeight: \"bold\",\n                    fontSize: \"18px\",\n                    textTransform: \"none\"\n                }\n            }\n        }\n    }\n});\n// Client-side cache, shared for the whole session of the user in the browser\nconst clientSideEmotionCache = (0,_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nfunction MyApp(props) {\n    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {\n        value: emotionCache,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PHI\\\\Downloads\\\\Next-Material-UI-Page-2 copy\\\\Next-Material-UI-Page-2 copy\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GlobalStyles_mui_material__WEBPACK_IMPORTED_MODULE_6__.GlobalStyles, {\n                    styles: {\n                        \":root\": {\n                            [\"--font-inter\"]: (next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default().style).fontFamily\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PHI\\\\Downloads\\\\Next-Material-UI-Page-2 copy\\\\Next-Material-UI-Page-2 copy\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PHI\\\\Downloads\\\\Next-Material-UI-Page-2 copy\\\\Next-Material-UI-Page-2 copy\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PHI\\\\Downloads\\\\Next-Material-UI-Page-2 copy\\\\Next-Material-UI-Page-2 copy\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PHI\\\\Downloads\\\\Next-Material-UI-Page-2 copy\\\\Next-Material-UI-Page-2 copy\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVU1BO0FBVm9CO0FBRXdDO0FBQ3JCO0FBQ087QUFDUztBQUVBO0FBSzdELDBCQUEwQjtBQUMxQixNQUFNUSxRQUFRTCxpRUFBV0EsQ0FBQztJQUN4Qk0sU0FBUztRQUNQQyxTQUFTO1lBQ1BDLE1BQU07WUFDTkMsY0FBYztRQUNoQjtRQUNBQyxXQUFXO1lBQ1RGLE1BQU07UUFDUjtRQUNBRyxZQUFZO1lBQ1ZDLFNBQVM7UUFDWDtJQUNGO0lBQ0FDLFlBQVk7UUFDVixtREFBbUQ7UUFDbkRDLFlBQVk7UUFDWkMsSUFBSTtZQUNGQyxVQUFVO1lBQ1ZDLFlBQVk7WUFDWkMsZUFBZTtZQUNmQyxlQUFlO1FBQ2pCO1FBQ0FDLElBQUk7WUFDRkosVUFBVTtZQUNWQyxZQUFZO1FBQ2Q7SUFDRjtJQUNBSSxZQUFZO1FBQ1ZDLFdBQVc7WUFDVEMsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKQyxjQUFjO29CQUNkQyxRQUFRO29CQUNSVCxZQUFZO29CQUNaRCxVQUFVO29CQUNWRyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsNkVBQTZFO0FBQzdFLE1BQU1RLHlCQUF5QnZCLHFFQUFrQkE7QUFNbEMsU0FBU3dCLE1BQU1DLEtBQWlCO0lBQzdDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxlQUFlSixzQkFBc0IsRUFBRUssU0FBUyxFQUFFLEdBQUdIO0lBRXhFLHFCQUNFLDhEQUFDMUIseURBQWFBO1FBQUM4QixPQUFPRjtrQkFDcEIsNEVBQUNoQywrREFBYUE7WUFBQ00sT0FBT0E7OzhCQUNwQiw4REFBQ0gsa0VBQVdBOzs7Ozs4QkFFWiw4REFBQ0QsMEZBQVlBO29CQUFDaUMsUUFBUTt3QkFBRSxTQUFTOzRCQUFFLENBQUMsZUFBc0IsRUFBRXJDLDJMQUFXLENBQUNpQixVQUFVO3dCQUFDO29CQUFFOzs7Ozs7OEJBQ3JGLDhEQUFDZ0I7b0JBQVcsR0FBR0UsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0LmpzIE1hdGVyaWFsIFVJIFBhZ2UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHsgR2xvYmFsU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyLCBFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuXG4vLyBMb2FkIEludGVyIGdsb2JhbGx5IHZpYSBuZXh0L2ZvbnQgdG8gZ3VhcmFudGVlIGF2YWlsYWJpbGl0eVxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSwgdmFyaWFibGU6ICctLWZvbnQtaW50ZXInLCBkaXNwbGF5OiAnc3dhcCcgfSk7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjOTFGRjMwJywgLy8gTGltZSBncmVlblxuICAgICAgY29udHJhc3RUZXh0OiAnIzIyMmMyNCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMEYxNzJBJywgLy8gRGFyayBzbGF0ZVxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNmNmZmZWQnLCAvLyBMaWdodCBncmVlbiBiYWNrZ3JvdW5kXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIC8vIFVzZSB0aGUgZ2xvYmFsbHkgaW5qZWN0ZWQgQ1NTIHZhcmlhYmxlIGZvciBJbnRlclxuICAgIGZvbnRGYW1pbHk6ICd2YXIoLS1mb250LWludGVyKScsXG4gICAgaDE6IHtcbiAgICAgIGZvbnRTaXplOiAnMTIwcHgnLFxuICAgICAgZm9udFdlaWdodDogMTAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDJlbScsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB9LFxuICAgIGg2OiB7XG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDBweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vIENsaWVudC1zaWRlIGNhY2hlLCBzaGFyZWQgZm9yIHRoZSB3aG9sZSBzZXNzaW9uIG9mIHRoZSB1c2VyIGluIHRoZSBicm93c2VyXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cbmludGVyZmFjZSBNeUFwcFByb3BzIGV4dGVuZHMgQXBwUHJvcHMge1xuICBlbW90aW9uQ2FjaGU/OiBFbW90aW9uQ2FjaGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzOiBNeUFwcFByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuICBcbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICB7LyogRGVmaW5lIHRoZSBJbnRlciBDU1MgdmFyaWFibGUgYXQgOnJvb3Qgc28gaXQgYXBwbGllcyB0byBwb3J0YWxzIGFzIHdlbGwgKi99XG4gICAgICAgIDxHbG9iYWxTdHlsZXMgc3R5bGVzPXt7ICc6cm9vdCc6IHsgWyctLWZvbnQtaW50ZXInIGFzIGFueV06IGludGVyLnN0eWxlLmZvbnRGYW1pbHkgfSB9fSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9DYWNoZVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiUmVhY3QiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJDc3NCYXNlbGluZSIsIkNhY2hlUHJvdmlkZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJ0ZXh0VHJhbnNmb3JtIiwiaDYiLCJjb21wb25lbnRzIiwiTXVpQnV0dG9uIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsInN0eWxlcyIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/createEmotionCache.ts":
/*!*****************************************!*\
  !*** ./src/utils/createEmotionCache.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst isBrowser = typeof document !== \"undefined\";\n// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.\n// This assures that MUI styles are loaded first.\n// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.\nfunction createEmotionCache() {\n    let insertionPoint;\n    if (isBrowser) {\n        const emotionInsertionPoint = document.querySelector('meta[name=\"emotion-insertion-point\"]');\n        insertionPoint = emotionInsertionPoint ?? undefined;\n    }\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: \"mui-style\",\n        insertionPoint\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1DLFlBQVksT0FBT0MsYUFBYTtBQUV0QywrRkFBK0Y7QUFDL0YsaURBQWlEO0FBQ2pELHFHQUFxRztBQUN0RixTQUFTQztJQUN0QixJQUFJQztJQUVKLElBQUlILFdBQVc7UUFDYixNQUFNSSx3QkFBd0JILFNBQVNJLGFBQWEsQ0FDbEQ7UUFFRkYsaUJBQWlCQyx5QkFBeUJFO0lBQzVDO0lBRUEsT0FBT1AsMERBQVdBLENBQUM7UUFBRVEsS0FBSztRQUFhSjtJQUFlO0FBQ3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV4dC5qcyBNYXRlcmlhbCBVSSBQYWdlLy4vc3JjL3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZS50cz9lYmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIE9uIHRoZSBjbGllbnQgc2lkZSwgQ3JlYXRlIGEgbWV0YSB0YWcgYXQgdGhlIHRvcCBvZiB0aGUgPGhlYWQ+IGFuZCBzZXQgaXQgYXMgaW5zZXJ0aW9uUG9pbnQuXG4vLyBUaGlzIGFzc3VyZXMgdGhhdCBNVUkgc3R5bGVzIGFyZSBsb2FkZWQgZmlyc3QuXG4vLyBJdCBhbGxvd3MgZGV2ZWxvcGVycyB0byBlYXNpbHkgb3ZlcnJpZGUgTVVJIHN0eWxlcyB3aXRoIG90aGVyIHN0eWxpbmcgc29sdXRpb25zLCBsaWtlIENTUyBtb2R1bGVzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICBsZXQgaW5zZXJ0aW9uUG9pbnQ7XG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIGNvbnN0IGVtb3Rpb25JbnNlcnRpb25Qb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE1ldGFFbGVtZW50PihcbiAgICAgICdtZXRhW25hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXScsXG4gICAgKTtcbiAgICBpbnNlcnRpb25Qb2ludCA9IGVtb3Rpb25JbnNlcnRpb25Qb2ludCA/PyB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdtdWktc3R5bGUnLCBpbnNlcnRpb25Qb2ludCB9KTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJpc0Jyb3dzZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImluc2VydGlvblBvaW50IiwiZW1vdGlvbkluc2VydGlvblBvaW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/createEmotionCache.ts\n");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@mui"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();