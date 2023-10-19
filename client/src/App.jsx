import { Navbar} from "./components";
import Home from "./components/Home";
import Transfer from "./components/Transfer";
import Verify from "./components/Verify";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


const App = () => (
  <Router>
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/transfer" element={<Transfer/>} />
      <Route path="/verify" element={<Verify/>} />
    </Routes>
  </div>
  </Router>
);

export default App;
