import "./App.css";

import Header from "./Header";
import Form from "./Form";
import RecentCities from "./RecentCities";
import PopularCities from "./PopularCities";
import AdditionalInfo from "./AdditionalInfo";
import Forecast from "./Forecast";
import UnitToggle from "./UnitToggle";
import PaletteButtons from "./PaletteButtons";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <div className="MidBody">
          <div className="FormCities">
            <Form />
            <div className="RecentPopularBody">
              <RecentCities />
              <PopularCities />
            </div>
          </div>
          <AdditionalInfo />
        </div>
        <div className="Forecast">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
        <UnitToggle />
      </div>
      <div className="FooterButtons">
        <PaletteButtons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
