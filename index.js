import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import { Helmet } from "react-helmet";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head></head>

    <Helmet>
      <title>Greenwood Silver</title>
      <meta charset="utf-8"></meta>
      <link
        rel="author"
        href="https://www.linkedin.com/in/isaac-jenemann-842b85220/"
      />
      <meta
        name="description"
        content="Website for Greenwood Silver; handcrafted silver by Nick Boisvert"
      />
      <meta
        name=""
        content="Code and Design by me using React, Figma, and VSCode"
      />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      
      <link rel="canonical" href="https://www.greenwoodsilver.com/" />
    </Helmet>

    <App />
  </React.StrictMode>
);
