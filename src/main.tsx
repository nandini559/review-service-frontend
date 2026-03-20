<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<BrowserRouter>
  <App/>
</BrowserRouter>);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> f327d702697e9bdfdd0a7678ea4edc464238d686
