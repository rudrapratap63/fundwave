import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
