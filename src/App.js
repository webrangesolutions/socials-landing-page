import "./App.css";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Joinus from "./components/Joinus";
import Main from "./components/Main";
import NavbarMain from "./components/NavbarMain";
import Whyus from "./components/Whyus";

function App() {
  return (
    <div className="">
      <NavbarMain />
      <Main />
      <div id="about-us">
        <Aboutus />
      </div>
      <div id="features">
      <Whyus />
      </div>
      <div id="contact">
      <Joinus />
      <Contact />
      </div>
    </div>
  );
}

export default App;
