import "bootstrap/dist/css/bootstrap.css"
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Footer} from './components/footer/footer.component';
import {Header} from './components/header/header.component';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <Header/>
    <App/>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
