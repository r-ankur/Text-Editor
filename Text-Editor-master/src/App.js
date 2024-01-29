/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import About from './Components/About';

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  var showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#072441";
      showAlert("Dark mode Has Enabled", "Success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Has Enabled", "Success");
    }
  }
  return (
    <>
      <BrowserRouter>

        <Navbar about="About TextUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>

            <Route  exact path="/" element={<Textarea heading="Enter ur text" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
