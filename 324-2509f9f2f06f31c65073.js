(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{"K+Zw":function(e,t,n){"use strict";n.r(t),n.d(t,"_demoSrcFiles",(function(){return s}));var a=n("mXGw"),o=n.n(a),l=n("BgHK");n("Pxjr");var i=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).onKeyDown=function(e){var t=e.keyCode;t>36&&t<41&&e.stopPropagation()},n.onBlur=function(e){n.setState({editable:!1,tabTitle:e.target.value})},n.onDblClick=function(){n.setState({editable:!0})},n.state={tabTitle:t.defaultTitle,editable:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentWillReceiveProps=function(e){e.defaultTitle!==this.state.tabTitle&&this.setState({tabTitle:e.defaultTitle})},i.render=function(){var e=this.state,t=e.tabTitle;return e.editable?o.a.createElement(l.Input,{defaultValue:t,onKeyDown:this.onKeyDown,onBlur:this.onBlur}):o.a.createElement("span",{onDoubleClick:this.onDblClick},t)},a}(o.a.Component),r=function(e,t){var n=t.title;return o.a.createElement("div",{key:e,className:"editable-tab-wrapper"},o.a.createElement(i,{defaultTitle:n}))};t.default=function(){return o.a.createElement("div",null,o.a.createElement(l.Tab,{defaultActiveKey:"1",tabRender:r},o.a.createElement(l.Tab.Item,{title:"Double Click To Edit Me",key:"1"},"Editable tab"),o.a.createElement(l.Tab.Item,{title:"Double Click To Edit Me",key:"2"},"Editable tab")))};var s={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo8";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/demo/demo8.js":'import React, { Component } from \'react\'\nimport { Tab, Input } from \'@alicloud/console-components\'\nimport \'./demo8.less\'\n\nclass EditableTabPane extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      tabTitle: props.defaultTitle,\n      editable: false,\n    }\n  }\n\n  componentWillReceiveProps(nextProps) {\n    if (nextProps.defaultTitle !== this.state.tabTitle) {\n      this.setState({\n        tabTitle: nextProps.defaultTitle\n      })\n    }\n  }\n\n  onKeyDown = (e) => {\n    const { keyCode } = e;\n    // Stop bubble up the events of keyUp, keyDown, keyLeft, and keyRight\n    if (keyCode > 36 && keyCode < 41) {\n      e.stopPropagation();\n    }\n  }\n\n  onBlur = (e) => {\n    this.setState({\n      editable: false,\n      tabTitle: e.target.value\n    })\n  }\n\n  onDblClick = () => {\n    this.setState({\n      editable: true\n    })\n  }\n\n  render() {\n    const { tabTitle, editable } = this.state;\n    if (editable) {\n      return <Input defaultValue={tabTitle} onKeyDown={this.onKeyDown} onBlur={this.onBlur} />;\n    }\n    return <span onDoubleClick={this.onDblClick}>{tabTitle}</span>;\n  }\n}\n\nconst tabRender = (key, { title }) => (<div key={key} className="editable-tab-wrapper">\n  <EditableTabPane defaultTitle={title} />\n</div>)\n\n\nconst Demo8 = () => (\n  <div>\n    <Tab defaultActiveKey="1" tabRender={tabRender}>\n      <Tab.Item title="Double Click To Edit Me" key="1">Editable tab</Tab.Item>\n      <Tab.Item title="Double Click To Edit Me" key="2">Editable tab</Tab.Item>\n    </Tab>\n  </div>\n)\n\nexport default Demo8',"src/demo/demo8.less":".editable-tab-wrapper {\n  padding: 10px;\n}\n\n.next-tabs-content {\n  color: #333;\n  font-size: 12px;\n  padding: 12px;\n}","demoMeta.json":'{"entryPath":"src/demo/demo8.js"}'}}}]);
//# sourceMappingURL=324-2509f9f2f06f31c65073.js.map