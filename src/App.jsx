import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import L from "./assets/Length.json"
import W from "./assets/Weigth.json"
import T from "./assets/Temperature.json"

function App() {
  const [typeSelect, setTypeSelect] = useState(0)
  const [convUnit, setConvUnit] = useState(0)
  const [finalValue, setFinalValue] = useState(null)
  const [fromUnit, setFromUnit] = useState(0)
  const [toUnit, setToUnit] = useState(0)


  const units = ["Length", "Weigth", "Temperature"]
  const unitsEqs = {"Length":L.units, "Weigth":W.units, "Temperature":T.units}


  const convertUnits = () => {
    let midd = unitsEqs[units[typeSelect]][fromUnit].conversion * Number(convUnit) + unitsEqs[units[typeSelect]][fromUnit].addition??0
    //console.log(midd)
    let final = midd / (unitsEqs[units[typeSelect]][toUnit].conversion - unitsEqs[units[typeSelect]][toUnit].addition??0)
    setFinalValue(final)
  }

  const handleSetType = (e) => {
    setFromUnit(0)
    setToUnit(0)
    setConvUnit(0)
    setFinalValue(null)
    setTypeSelect(e)
  }



  useEffect( ()=>{
  },[])
  

  return (
    <>
    <div>
      <h1>Unit Converter</h1>
      <div>
        {units.map((e,i) => <button onClick={()=>{handleSetType(i)}} className={"unit " + ((typeSelect === i) ? "selected" : "")}>{e}</button>)}
      </div>
    </div>
      

      {
        !finalValue ?
        <div>
          <h3>Enter the {units[typeSelect]} to convert:</h3>
          <input type="number" defaultValue={0} onChange={(e)=>setConvUnit(e.target.value)}></input>
          <h4>Unit to convert from:</h4>
          <select
            name="UnitFrom"
            id="UnitFrom"
            value={fromUnit} // controlled component
            onChange={(e) => setFromUnit(e.target.value)} // correct way to read value
          >
            {unitsEqs[units[typeSelect]]?.map((unit, i) => (
              <option key={i} value={i}>
                {unit.unit}
              </option>
            ))}
          </select>

          <h4>Unit to convert to:</h4>
          <select
            name="UnitTo"
            id="UnitTo"
            onChange={(e) => setToUnit(e.target.value)}
            value={toUnit} // optional, if you want it to be controlled
          >
            {unitsEqs[units[typeSelect]]?.map((unit, i) => (
              <option key={i} value={i}>
                {unit.unit}
              </option>
            ))}
          </select>

          <br /><br />
          <button onClick={() => convertUnits()}>Convert</button>
        </div>
        :
        <div>
          <h3>Value in {unitsEqs[units[typeSelect]][toUnit].system} system:</h3>
          <h2>{convUnit} {unitsEqs[units[typeSelect]][fromUnit].symbol} = {finalValue} {unitsEqs[units[typeSelect]][toUnit].symbol}</h2>
          <button onClick={()=>{handleSetType(typeSelect)}}>reset</button>
        </div>
      }
    </>
  )
}

export default App
