import Navi from "./Navi";
import SidebarMenu from "./Sides";
import Footer from "./Footer";
import Backtotop from "./Backtotop";
import ScrollProgressBar from "./ScrollProgressBar";

function Layout({ darkMode, toggleMode, children }) {
  return (
    <>
      <ScrollProgressBar darkMode={darkMode} />
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu darkMode={darkMode} toggleMode={toggleMode} />

      <main className="page-container">
        {children}
      </main>

      <Footer darkMode={darkMode} toggleMode={toggleMode} />
      <Backtotop />
    </>
  );
}

export default Layout;