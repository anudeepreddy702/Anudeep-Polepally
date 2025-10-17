import Homie from "./Homie";
import Navi from "./Navi";
import SidebarMenu from "./Sides";
import Footer from "./Footer";

function Buckets({ darkMode, toggleMode }) {
  return (
    <>
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu darkMode={darkMode} toggleMode={toggleMode} />
      <Homie darkMode={darkMode} toggleMode={toggleMode} />
      <Footer />
    </>
  );
}

export default Buckets;