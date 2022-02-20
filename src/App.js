import Navbar from "./Navbar";
import "./App.css";
import Slides from "./Slides";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-all-content">
        <br />
        <div className="carousel">
          <Slides />
        </div>
      </div>
    </div>
  );
}
