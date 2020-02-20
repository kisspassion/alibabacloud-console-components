(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{"/AIK":function(e,n,t){"use strict";t.r(n),t.d(n,"_demoSrcFiles",(function(){return d}));var o=t("mXGw"),r=t.n(o),a=t("BgHK"),c=a.MenuButton.Item,m=a.MenuButton.Group,s=a.MenuButton.Divider;n.default=function(){return r.a.createElement(a.MenuButton,{type:"primary",label:"Document Edit"},r.a.createElement(c,{key:"undo"},"Undo"),r.a.createElement(c,{key:"redo"},"Redo"),r.a.createElement(s,null),r.a.createElement(m,null,r.a.createElement(c,{key:"cut"},"Cut"),r.a.createElement(c,{key:"copy"},"Copy"),r.a.createElement(c,{key:"paste"},"Paste")))};var d={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo3";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo3.js":'import React from \'react\'\nimport { MenuButton } from \'@alicloud/console-components\'\n\nconst { Item, Group, Divider } = MenuButton\n\nconst Demo3 = () => (\n  <MenuButton type="primary" label="Document Edit">\n    <Item key="undo">Undo</Item>\n    <Item key="redo">Redo</Item>\n    <Divider />\n    <Group>\n      <Item key="cut">Cut</Item>\n      <Item key="copy">Copy</Item>\n      <Item key="paste">Paste</Item>\n    </Group>\n  </MenuButton>\n)  \n\nexport default Demo3',"demoMeta.json":'{"entryPath":"src/demo/demo3.js"}'}}}]);
//# sourceMappingURL=193-87216397e0f43df00198.js.map