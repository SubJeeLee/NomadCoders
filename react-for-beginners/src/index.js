import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <App />
  </BrowserRouter>
  //<React.StrictMode>
    
  //</React.StrictMode> <- 화면 갱신 오류가 발생
);

