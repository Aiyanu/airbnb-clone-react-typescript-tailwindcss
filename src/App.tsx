import { Map } from "@mui/icons-material";
import "./App.css";
import FooterLg from "./components/FooterLg";
import BottomBar from "./components/BottomBar";
import Header from "./components/Header";
import Main from "./components/Main";
import FooterSm from "./components/FooterSm";

function App() {
  return (
    <div className="App flex flex-col min-h-screen relative">
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
      <div className="cursor-pointer flex justify-center fixed bottom-20 z-10 left-0 right-0">
        <div className="bg-gray-800 rounded-full text-white text-center p-3 inline-block">
          <span className="text-base">show map</span> <Map fontSize="medium" />
        </div>
      </div>
    </div>
  );
}

export default App;
