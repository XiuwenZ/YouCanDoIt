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

// import React from 'react'
// import { createRoot } from 'react-dom/client';
// import App from '/src/App.js'


const element = document.getElementById('root');
const root = createRoot(element!);

class App extends React.Component {
    state = {
        advice: ""
    }
// fetchingQuote 
    componentDidMount() {
        this.fetchQuote();
       
    }
//func to fetch quote 
    fetchQuote = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                
                this.setState({advice});


            })
            .catch((error) => {
                console.log(error)
            })

    }


    render(){
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                <h1 className="heading">{advice}</h1>
                </div>

            </div>
            
        );
    }
}

// IT WORKS!!
// const e = React.createElement;

// class LikeButton extends React.Component {
//   render() {

//       return 'hello world';
    

//   }
// }


// const domContainer = document.querySelector('#like_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));


