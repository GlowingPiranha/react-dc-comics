// * importo le componenti
import Main from "./components/Main";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FooterLinks from "./components/FooterLinks";
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Banner />
      <FooterLinks />
      <FooterBottom />
    </div>
  )
}

export default App;
