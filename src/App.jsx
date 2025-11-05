import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Buckets from "./Group/Buckets"
import Homepage from "./Group/Homepage"
import Template from "./Group/Template"
import Aboutsite from "./Group/Aboutsite"
import Footer from "./Group/Footer"
import ScrollToTop from "./Group/ScrollToTop"
import Backtotop from "./Group/Backtotop"
import Learning_resources from "./Group/Learning_resources"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.className = "appdark";
    } else {
      document.body.className = "app";
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Buckets darkMode={darkMode} toggleMode={toggleMode} />} />
        <Route path="/bucketlist" element={<Template darkMode={darkMode} toggleMode={toggleMode} />} />
        <Route path="/about" element={<Homepage darkMode={darkMode} toggleMode={toggleMode} />} />
        <Route path="/aboutsite" element={<Aboutsite darkMode={darkMode} toggleMode={toggleMode} />} />
        <Route path="/resources" element={<Learning_resources darkMode={darkMode} toggleMode={toggleMode}/>} />
      </Routes>
      <Backtotop/>
    </Router>
  )
}

export default App