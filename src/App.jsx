import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Centers from './components/pages/Centers';
import Info from './components/pages/Info';
import SignUp from './components/pages/SignUp';
import ClimbingLog from './components/pages/ClimbingLog';



export default function App() {
  
  

  // return <Container><Row><Col>Hello 1</Col><Col>Hello 2</Col></Row></Container>

  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/centers' element={<Centers />} />
            <Route exact path='/info' element={<Info />} />
            <Route exact path='/sign-up' element={<SignUp />} />
            <Route exact path='/climbing-log' element={<ClimbingLog />} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}
