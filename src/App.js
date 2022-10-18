import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Email from './components/email/Email';
import Send from './components/sendmail/Send';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Email/>
      <Send/>
      <Footer/>
    </div>
  );
}

export default App;
