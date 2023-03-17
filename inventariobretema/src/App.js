import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stock from './components/Stock';
import Add from './components/Add';
import Login from './components/Login';
//import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Stock" element={<Stock/>}/>
          <Route path="Add" element={<Add/>}/>
          <Route path="Login" element={<Login/>}/>
        </Routes>
       
       </Router>
       
    </div>
  );
}

export default App;
