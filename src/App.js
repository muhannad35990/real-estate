import Cards from "./components/Cards";
import Discovery from "./components/Discovery";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./SCSS/App.scss";

function App() {
  return (
    <div className="Container">
      <Sidebar />
      <Header />
      <Features />
      <Discovery />
      <Cards />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
