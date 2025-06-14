import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import Goodbye from './screens/goodbye';
import Error from './screens/error';
import LandingPage from './screens/landingPage';
import Header from './components/layout/header';
import Footer from './components/layout/footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/goodbye" element={<Goodbye />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;