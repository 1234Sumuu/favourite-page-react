import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// ReactDom.render(<App />, document.getElementById('root'));

// test start
// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color: "red"};
//     }
//     render() {
//         return <h2>I am a Car!</h2>;
//     }
// }
// const root = raectDom.createRoot(document.getElementById('root'));
// root.render(<Car />);

// test 2
class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a {this.props.modal}!</h2>;
    }
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Car modal = "Mustang"/>);

// test 3
// class Car extends React.Component {
//     render() {
//         return <h2>I am a Car!</h2>;
//     }
// }

// class Garage extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Who lives in my Garage?</h1>
//                 <Car />
//             </div>
//         );
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// TEST 4

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {favoritecolor: "red"};
//     }
//     static getDerivedStateFormProps(props, state){
//         return {favoritecolor: props.favcol };
//     }
//     render() {
//         return (
//             <h1>My Favourite color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol = "yellow" />);
// test end

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
