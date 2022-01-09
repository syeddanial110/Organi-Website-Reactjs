import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeBlog from './components/HomeBlog';
import Main from './components/Nav';
import Blogs from './screens/Blogs';
import Home from './screens/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
  <>
  
  <Header />

  <Router>
           <Main companyName="Orgino" />    
      <Routes>
        <Route path="/homeblog" element={<Home />} />
        <Route path="/homeblog/:postId" element={<HomeBlog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
</Router>
  <Footer companyName="Organi" number="0300-000000" address="Tum Hara Ghr" email="daniald3200@gmail.com" />
</>
  );
}

export default App;
