import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Email from './components/email/Email';
import Send from './components/sendmail/Send';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Me from './components/me/Me';


function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/profile-web" element={<><Home /><About /><Email /></>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/me" element={<Me />} />
          </Routes>
          <Send />
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
