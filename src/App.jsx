import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>


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


  const handleChange = () => {
    return climbs.filter(c => c.ascended).map;
  }

  function removeClimb(i) {

  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="outline-success" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <br></br>
        <label>
        <input 
          type="checkbox" 
          onChange={handleChange}
        />
        {' '}
        Only show completed climbs
      </label>
      <br></br>
        <table>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Color</th>
              <th>Attempts</th>
              <th>Ascended</th>
            </tr>
          </thead>
          <tbody>
            {/* {routes.filter(c => c.ascended).map(routes => { */}
            {routes.map(routes => {
              return (
                <tr key={routes.id}>
                  <td>{ routes.grade }</td>
                  <td style = {{color: `${routes.color}`}}>{ routes.color }</td>
                  <td>{ routes.attempts }</td>
                  <td>{String(routes.ascended)}</td>
                  <Button 
                    style={{ margin: "5%"}} 
                    variant="outline-danger" 
                    onClick={removeClimb(1)}
                    >
                      Remove
                  </Button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
