import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [mode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const darkModeBtn = () => {
    if (mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark Mode has been enable', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark Mode has been enable', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toogleMode={darkModeBtn} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Routes> */}
        {/* <Route exact path="/about" element={ */}
        {/* <About /> */}
        {/* } /> */}
        {/* <Route exact path="/" element={ */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* }/> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;



