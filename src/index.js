import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';//2. Aşama Provider ve store'u  import ediyoruz. <App/> ' ı sarmalıyoruz. artık her yerden bu store a erişim sağlayabiliyoruz.
import { store } from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Provider store={store}> <App /> </Provider> 

);
