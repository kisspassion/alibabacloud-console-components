(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"+swe":function(n,e,o){"use strict";o.r(e),o.d(e,"_demoSrcFiles",(function(){return a}));var t=o("mXGw"),c=o.n(t),s=o("MaS7");e.default=function(){return c.a.createElement("div",{style:{padding:"24px"}},c.a.createElement("div",null,c.a.createElement(s.a,{type:"success",shape:"icon",iconType:"smile"},"正常")),c.a.createElement("div",null,c.a.createElement(s.a,{type:"warning",shape:"icon",iconType:"cry"},"警告")),c.a.createElement("div",null,c.a.createElement(s.a,{type:"error",shape:"icon",iconType:"cry-fill"},"异常")),c.a.createElement("div",null,c.a.createElement(s.a,{type:"disabled",shape:"icon",iconType:"eye-slash"},"禁用")),c.a.createElement("div",null,c.a.createElement(s.a,{type:"loading",shape:"icon",iconType:"poweroff"},"启动")))};var a={"package.json":'{\n  "name": "console-components-demo",\n  "version": "1.0.0",\n  "description": "",\n  "keywords": [],\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "@alicloud/console-components-fake-browser": "latest",\n    "@alicloud/console-components": "latest",\n    "dva": "^2.4.1",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react": "16.8.4",\n    "react-dom": "16.8.4",\n    "react-scripts": "2.1.3",\n    "@alicloud/console-components-actions": "latest",\n    "@alicloud/console-components-app-layout": "latest",\n    "@alicloud/console-components-confirm": "latest",\n    "@alicloud/console-components-console-menu": "latest",\n    "@alicloud/console-components-data-fields": "latest",\n    "@alicloud/console-components-info": "latest",\n    "@alicloud/console-components-page": "latest",\n    "@alicloud/console-components-slide-panel": "latest",\n    "@alicloud/console-components-status-indicator": "latest",\n    "@alicloud/console-components-table": "latest",\n    "@alicloud/console-components-truncate": "latest",\n    "@alicloud/console-components-select-list": "latest",\n    "@alicloud/console-components-intl": "latest",\n    "@alicloud/console-components-intl-core": "latest",\n    "@alicloud/console-components-intl-context": "latest",\n    "@alicloud/console-components-announcement": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2",\n    "@types/styled-components": "^4.1.8",\n    "typescript": "^3.7.2"\n  },\n  "browserslist": [\n    ">0.2%",\n    "not dead",\n    "not ie <= 11",\n    "not op_mini all"\n  ]\n}\n',"index.html":'<html>\n  <head>\n    <title>Console Components Demo</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.tsx"><\/script>\n  </body>\n</html>\n',"tsconfig.json":'{\n  "compilerOptions": {\n    "jsx": "react",\n    "moduleResolution": "node",\n    "esModuleInterop": true\n  }\n}\n',"src/index.tsx":"import * as React from 'react'\nimport { render } from 'react-dom'\nimport '@alicloud/console-components/dist/wind.css'\nimport App from './demo/custom-icon'\n\nconst rootElement = document.getElementById('app')\nrender(<App />, rootElement)\n","sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "template": "parcel"\n}',"src/demo/custom-icon.tsx":'import React from \'react\'\nimport StatusIndicator from \'@alicloud/console-components-status-indicator\'\n\nexport default () => {\n  return (\n    <div style={{ padding: \'24px\' }}>\n      <div>\n        <StatusIndicator type="success" shape="icon" iconType="smile">\n          正常\n        </StatusIndicator>\n      </div>\n      <div>\n        <StatusIndicator type="warning" shape="icon" iconType="cry">\n          警告\n        </StatusIndicator>\n      </div>\n      <div>\n        <StatusIndicator type="error" shape="icon" iconType="cry-fill">\n          异常\n        </StatusIndicator>\n      </div>\n      <div>\n        <StatusIndicator type="disabled" shape="icon" iconType="eye-slash">\n          禁用\n        </StatusIndicator>\n      </div>\n      <div>\n        <StatusIndicator type="loading" shape="icon" iconType="poweroff">\n          启动\n        </StatusIndicator>\n      </div>\n    </div>\n  )\n}\n',"demoMeta.json":'{"entryPath":"src/demo/custom-icon.tsx"}'}}}]);
//# sourceMappingURL=38-4579e361234f4bf4ae5e.js.map