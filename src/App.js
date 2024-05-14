import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Main/Navbar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      {/* <Pricing/> */}
    </div>
  );
}

export default App;
