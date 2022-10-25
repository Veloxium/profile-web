import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import Animated from './components/animated/Animated';


function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Animated />
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
