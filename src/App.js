import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState()
  const [result, setResult] = useState(0)

  function calculate(e){
    e.preventDefault()
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    let calculatedResult = 0;

    if (gender === "male"){
      calculatedResult= gramsLeft / (weight * 0.7)
      if (calculatedResult <0){
        calculatedResult = 0
      }
      setResult(calculatedResult) 
      
    } else if (gender === "female") {
      calculatedResult = gramsLeft / (weight * 0.6)
      if (calculatedResult <0){
        setResult(0)
      }else{
        setResult(calculatedResult)
      }
    }
  }

  return (
    <div id="container">
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input 
          value={weight} 
          type='number'
          onChange={e => setWeight(e.target.value)}>
          </input>
        </div>
        <div>
          <label>Bottles</label>
          <input 
          value={bottles} 
          type='number' 
          min={0} 
          max={30}
          onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label>Time</label>
          <input value={time} 
          type='number'
          onChange={e => setTime(e.target.value)}></input>
        </div>
        <div id='options'>
          <input
            name='options'
            type='radio'
            value="male"
            onChange={e => setGender(e.target.value)}>
            </input>
            <label>Male</label>
            <input
            name='options'
            type='radio'
            value="female"
            onChange={e => setGender(e.target.value)}>
            </input>
            <label>Female</label>
        </div>
        <div id='result'>
          <p>{result.toFixed(1)}</p>
        </div>
        <button>Calculate</button>

      </form>
    </div>
  );
}

export default App;
