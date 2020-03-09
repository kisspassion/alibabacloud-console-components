(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{"8FUB":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i})),t.d(e,"demoMeta",(function(){return d})),t.d(e,"_demoSrcFiles",(function(){return u}));var o=t("mXGw"),a=t.n(o),r=t("BgHK");var l=r.Checkbox.Group,c=function(){for(var n=[],e=0;e<5;e++)n.push({title:"Quotation for 1PCS Nano "+(3+e)+".0 controller compatible",id:100306660940+e,time:2e3+e});return n},s=[{title:"id",dataIndex:"id"},{title:"Title",dataIndex:"title"},{title:"Time",dataIndex:"time"}],i=function(n){var e,t;function o(e){var t;return(t=n.call(this,e)||this).openDialog=function(){r.Dialog.alert({content:t.renderControlContent(),title:"Select columns",onOk:function(){return t.setState({cols:t.changedCols||t.state.cols}),!0}})},t.onChange=function(n){t.changedCols=s.filter((function(e){return n.indexOf(e.dataIndex)>-1}))},t.state={dataSource:c(),cols:s},t}t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var i=o.prototype;return i.renderControlContent=function(){var n=s.map((function(n){return{label:n.title,value:n.dataIndex}})),e=this.state.cols.map((function(n){return n.dataIndex}));return a.a.createElement(l,{dataSource:n,onChange:this.onChange,defaultValue:e})},i.renderCols=function(){return this.state.cols.map((function(n){return a.a.createElement(r.Table.Column,{title:n.title,dataIndex:n.dataIndex,key:n.dataIndex})}))},i.render=function(){return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(r.Button,{onClick:this.openDialog}," Select columns ")),a.a.createElement(r.Table,{dataSource:this.state.dataSource},this.renderCols()))},o}(a.a.Component),d={zhName:"定制列",zhDesc:"定制显示的表格列数"},u={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo16";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo16.js":"import React, { Component } from 'react'\nimport { Table, Button, Dialog, Checkbox } from '@alicloud/console-components'\n\nconst { Group } = Checkbox\nconst dataSource = () => {\n  const result = []\n  for (let i = 0; i < 5; i++) {\n    result.push({\n      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,\n      id: 100306660940 + i,\n      time: 2000 + i,\n    })\n  }\n  return result\n}\nconst cols = [\n  {\n    title: 'id',\n    dataIndex: 'id',\n  },\n  {\n    title: 'Title',\n    dataIndex: 'title',\n  },\n  {\n    title: 'Time',\n    dataIndex: 'time',\n  },\n]\n\nexport default class Demo16 extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      dataSource: dataSource(),\n      cols,\n    }\n  }\n\n  openDialog = () => {\n    Dialog.alert({\n      content: this.renderControlContent(),\n      title: 'Select columns',\n      onOk: () => {\n        this.setState({\n          cols: this.changedCols || this.state.cols,\n        })\n        return true\n      },\n    })\n  }\n\n  renderControlContent() {\n    const groupSource = cols.map(col => {\n      return {\n        label: col.title,\n        value: col.dataIndex,\n      }\n    })\n    const defaultValue = this.state.cols.map(col => col.dataIndex)\n    return (\n      <Group\n        dataSource={groupSource}\n        onChange={this.onChange}\n        defaultValue={defaultValue}\n      />\n    )\n  }\n\n  onChange = value => {\n    this.changedCols = cols.filter(col => value.indexOf(col.dataIndex) > -1)\n  }\n\n  renderCols() {\n    const { cols } = this.state\n    return cols.map(col => {\n      return (\n        <Table.Column\n          title={col.title}\n          dataIndex={col.dataIndex}\n          key={col.dataIndex}\n        />\n      )\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <p>\n          <Button onClick={this.openDialog}> Select columns </Button>\n        </p>\n        <Table dataSource={this.state.dataSource}>{this.renderCols()}</Table>\n      </div>\n    )\n  }\n}\n\nexport const demoMeta = {\n  zhName: `定制列`,\n  zhDesc: `定制显示的表格列数`,\n}\n","demoMeta.json":'{"entryPath":"src/demo/demo16.js"}'}}}]);
//# sourceMappingURL=303-98e1eb6585ecfcb91f24.js.map