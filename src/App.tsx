
import "./App.css";
import FooterLg from "./components/FooterLg";
import BottomBar from "./components/BottomBar";
import Header from "./components/Header";
import Main from "./components/Main";
import FooterSm from "./components/FooterSm";

function App() {
  return (
    <div className="App flex flex-col min-h-screen relative overflow-y-hidden">
      <Header />
      <Main />
      <div>
        <div className="lg:block hidden">
          <FooterLg />
        </div>
        <div className="lg:hidden">
          <BottomBar />
          <FooterSm />
        </div>
      </div>
    </div>
  );
}

export default App;
