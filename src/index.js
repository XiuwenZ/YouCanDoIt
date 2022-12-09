// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// // import App from './App'
// import 'antd/dist/antd.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// testing
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function MyApp() {
// 	return <h1>Hello, world!</h1>;
// }
// root.render(<MyApp />);

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  render() {

      return 'hello world';
    

  }
}


const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


