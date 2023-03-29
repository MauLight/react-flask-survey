import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Survey from './views/survey';
import LogIn from './views/login';
import NoPage from "./views/404";
import Layout from "./views/layout";
import injectContext from "../src/context/appContext";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LogIn />} />
          <Route path="survey" element={<Survey />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);