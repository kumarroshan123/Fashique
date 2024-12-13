import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextData from "./components/Contextapi.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter><ContextData><App /></ContextData></BrowserRouter>
)
