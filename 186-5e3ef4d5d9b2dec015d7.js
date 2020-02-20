(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{GfXf:function(n,e,a){"use strict";a.r(e),a.d(e,"_demoSrcFiles",(function(){return r}));var o=a("mXGw"),t=a.n(o),i=a("BgHK"),d=(a("TF/Z"),t.a.createElement("div",{className:"load-container load1"},t.a.createElement("div",{className:"loader"},"loading..."))),l=t.a.createElement("div",{className:"load-container load7"},t.a.createElement("div",{className:"loader"},"loading..."));e.default=function(){return t.a.createElement("div",null,t.a.createElement(i.Loading,{tip:"default animation"},t.a.createElement("div",{className:"demo"},"test")),t.a.createElement(i.Loading,{indicator:d},t.a.createElement("div",{className:"demo"},"test")),t.a.createElement(i.Loading,{indicator:l},t.a.createElement("div",{className:"demo"},"test")))};var r={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo2";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo2.js":'import React from \'react\'\nimport { Loading } from \'@alicloud/console-components\'\nimport \'./demo2.less\'\n\nconst indicator1 = (\n  <div className="load-container load1">\n    <div className="loader">loading...</div>\n  </div>\n)\n\nconst indicator7 = (\n  <div className="load-container load7">\n    <div className="loader">loading...</div>\n  </div>\n)\n\nconst Demo2 = () => (\n  <div>\n    <Loading tip="default animation">\n      <div className="demo">test</div>\n    </Loading>\n    <Loading indicator={indicator1}>\n      <div className="demo">test</div>\n    </Loading>\n    <Loading indicator={indicator7}>\n      <div className="demo">test</div>\n    </Loading>\n  </div>\n)\n\nexport default Demo2',"src/demo/demo2.less":".demo {\n    width: 500px;\n    background-color: #F2F3F7;\n    text-align: center;\n    padding:50px;\n}\n.next-loading {\n    margin-bottom: 5px;\n}\n\n/* start copy from here */\n\n.load-container {\n  margin: 0 auto;\n  position: relative;\n}\n\n/* animation 1 */\n.load1 .loader,\n.load1 .loader:before,\n.load1 .loader:after {\n  background: #5584FF;\n  color: #5584FF;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.load1 .loader:before,\n.load1 .loader:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.load1 .loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.load1 .loader {\n  text-indent: -9999em;\n  margin: 0 auto !important;\n  position: relative;\n  font-size: 11px;\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.load1 .loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0 ;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em ;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0 ;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em ;\n    height: 5em;\n  }\n}\n\n/* animation 2 */\n.load7 .loader:before,\n.load7 .loader:after,\n.load7 .loader {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.8s infinite ease-in-out;\n  animation: load7 1.8s infinite ease-in-out;\n  top: -36px;\n}\n.load7 .loader {\n  margin: 0 auto !important;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.load7 .loader:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.load7 .loader:after {\n  left: 3.5em;\n}\n.load7 .loader:before,\n.load7 .loader:after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em #5584FF;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0 #5584FF;\n  }\n}\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em #5584FF;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0 #5584FF;\n  }\n}","demoMeta.json":'{"entryPath":"src/demo/demo2.js"}'}}}]);
//# sourceMappingURL=186-5e3ef4d5d9b2dec015d7.js.map