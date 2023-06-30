import "./App.css";

import Weather from "./Weather";
import PaletteButtons from "./PaletteButtons";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Bern" />
      </div>
      <div className="Footer">
        <PaletteButtons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
