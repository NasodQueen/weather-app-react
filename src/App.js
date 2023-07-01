import Weather from "./Weather";
import PaletteButtons from "./PaletteButtons";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Bern" />
      </div>
      <div className="FooterContainer">
        <PaletteButtons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
