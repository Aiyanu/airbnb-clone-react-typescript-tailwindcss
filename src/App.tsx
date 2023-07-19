import { Map } from '@mui/icons-material';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App flex flex-col min-h-screen relative">
      <Header />
      <Main />
      <Footer />
      <div className="cursor-pointer flex justify-center fixed bottom-20 z-10 left-0 right-0">
        <div className="bg-gray-800 rounded-full text-white text-center p-3 inline-block">
          <span className="text-base">show map</span> <Map fontSize="medium" />
        </div>
      </div>
    </div>
  );
}

export default App;
