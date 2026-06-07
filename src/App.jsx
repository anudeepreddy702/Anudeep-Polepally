import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Homie from "./Group/Homie"
import AboutMe from "./Group/AboutMe"
import Template from "./Group/Template"
import Aboutsite from "./Group/Aboutsite"
import Layout from "./Group/Layout"
import ScrollToTop from "./Group/ScrollToTop"
import Learning_resources from "./Group/Learning_resources"
import MoneyTransferComparison from "./Group/Money-transfer"
import NotFound from "./Group/NotFound"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.className = "appdark app-dark";
    } else {
      document.body.className = "app app-light";
    }
  }, [darkMode]);

  return (
        <Router>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Layout darkMode={darkMode} toggleMode={toggleMode}>
              <Homie darkMode={darkMode} toggleMode={toggleMode} />
            </Layout>
          }
        />

        <Route
          path="/bucketlist"
          element={
            <Layout darkMode={darkMode} toggleMode={toggleMode}>
              <Template darkMode={darkMode} toggleMode={toggleMode} />
            </Layout>
          }
        />

        <Route path="/money-transfer" element={<MoneyTransferComparison darkMode={darkMode} toggleMode={toggleMode} />} />

        <Route
          path="/about"
          element={
            <Layout darkMode={darkMode} toggleMode={toggleMode}>
              <AboutMe darkMode={darkMode} toggleMode={toggleMode} />
            </Layout>
          }
        />

        <Route
          path="/resources"
          element={
            <Layout darkMode={darkMode} toggleMode={toggleMode}>
              <Learning_resources darkMode={darkMode} toggleMode={toggleMode} />
            </Layout>
          }
        />

        <Route
          path="/aboutsite"
          element={
            <Layout darkMode={darkMode} toggleMode={toggleMode}>
              <Aboutsite darkMode={darkMode} toggleMode={toggleMode} />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout darkMode={darkMode} toggleMode={toggleMode}>
              <NotFound darkMode={darkMode} toggleMode={toggleMode} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}


export default App