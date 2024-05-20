import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Main/Navbar';
import Pricing from './Components/Pricing/Pricing';
import SignIn from './Components/Sign/SignIn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      {/* <Pricing/> */}
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
