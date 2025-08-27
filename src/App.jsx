// * importo le componenti
import Main from "./components/Main";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FooterLinks from "./components/FooterLinks";
import FooterBottom from "./components/FooterBottom";
import comics from "./data/dc-comics";

function App() {
  return (
    <div className="app">
      <Header />
      <Main comics={comics} />
      <Banner />
      <FooterLinks />
      <FooterBottom />
    </div>
  )
}

export default App;
