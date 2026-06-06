import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <Router>

      <LoadingBar
        color='#ec123d'
        progress={progress}
      />

      <NavBar />

      <Routes>

        <Route path="/" element={
          <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="us" category="general"/>
        } />

        <Route path="/business" element={
          <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="us" category="business"/>
        } />

        <Route path="/entertainment" element={
          <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="us" category="entertainment"/>
        } />

        <Route path="/sports" element={
          <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="us" category="sports"/>
        } />

        <Route path="/science" element={
          <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="us" category="science"/>
        } />

        <Route path="/technology" element={
          <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="us" category="technology"/>
        } />

        <Route path="/health" element={
          <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="us" category="health"/>
        } />

      </Routes>

    </Router>
  )
}

export default App