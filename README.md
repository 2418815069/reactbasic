This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 环境安装

## 技术栈

- create-react-app
- react
- redux
- react-redux
- redux-thunk
- react-router-dom
  <!-- - axios -->
- antd
- styled-components

## 按需加载，修改配置环境，以适应 antd([官网参考](https://ant.design/docs/react/use-with-create-react-app-cn))

    	- `npm i react-app-rewired -D`
    	- 修改package.json的启动配置
    	`
    		"scripts": {
    		    "start": "react-app-rewired start",
    		    "build": "react-app-rewired build",
    		    "test": "react-app-rewired test --env=jsdom",
    		    "eject": "react-scripts eject"
    		  }
    	`
    	- `npm i babel-plugin-import -D`
    	- 项目根目录创建config-overrides.js
    	`
    	  const { injectBabelPlugin } = require('react-app-rewired');
    	  module.exports = function override(config, env) {
    	  	config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    	    return config;
    	  };
    	`

## 引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 customize-cra，否则会出现如下的问题。

### npm install customize-cra --save-dev

### yarn add customize-cra --dev

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
