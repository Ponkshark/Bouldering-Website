import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';



export default function App() {
  
  const climbs = [
    {id: 1, grade: "6a+", color: "purple", attempts: 5, ascended: true},
    {id: 2, grade: "6a+", color: "red", attempts: 3, ascended: true},
    {id: 3, grade: "5", color: "green", attempts: 1, ascended: true},
    {id: 4, grade: "6b+", color: "black", attempts: 6, ascended: false},
    {id: 5, grade: "6b", color: "purple", attempts: 7, ascended: false},
    {id: 6, grade: "6b", color: "blue", attempts: 4, ascended: false},
    {id: 7, grade: "6a", color: "pink", attempts: 3, ascended: true},
    {id: 8, grade: "6a+", color: "green", attempts: 5, ascended: false},
    {id: 9, grade: "5+", color: "pink", attempts: 1, ascended: true}
  ];

  const [count, setCount] = useState(0)
  const [routes, setRoutes] = useState(climbs);


  const handleChange = (e) => {
    setRoutes(e.target.checked ? climbs.filter(c => c.ascended) : climbs);
  }

  function removeClimb(routeId) {
    setRoutes(routes.filter(route => route.id !== routeId));
  }

  // return <Container><Row><Col>Hello 1</Col><Col>Hello 2</Col></Row></Container>

  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
      </Router>
      <div className="card">
        <label>
        <input 
          type="checkbox" 
          onChange={handleChange}
        />
        {' '}
        Only show completed climbs
      </label>
      <br></br>
      <Container>
        <Row>
          <Col>Grade</Col>
          <Col>Color</Col>
          <Col>Attempts</Col>
          <Col>Ascended</Col>
          <Col></Col>
        </Row>
        {routes.map(routes => {
          return (
            <Row key={routes.id}>
              <Col>{ routes.grade }</Col>
              <Col style = {{color: `${routes.color}`}}>{ routes.color }</Col>
              <Col>{ routes.attempts }</Col>
              <Col>{String(routes.ascended)}</Col>
              <Col><Button 
                style={{ margin: "5%"}} 
                variant="outline-danger" 
                onClick={() => removeClimb(routes.id)}
                >
                  Remove
              </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
      </div>
    </div>
  )
}
