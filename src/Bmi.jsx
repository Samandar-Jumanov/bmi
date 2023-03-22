
import React, { useState } from 'react'
import './Bmi.css'

const Bmi = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')

  const calculateBmi = () => {
    if (weight && height) {
      let bmilCalculation = (weight / (height ** 2)).toFixed(2)
      setBmi(bmilCalculation)
      setWeight('')
      setHeight('')

    }else {
        alert('Enter valid calcultion')
    }
  }

  return (
    <div className='container'>
      {bmi && <p className="result">Your BMI is: {bmi}</p>}
      {bmi && (
        <p className="result">
          You are {bmi < 18.5 ? 'underweight' : bmi < 25 ? 'of normal weight' : bmi < 30 ? 'overweight' : 'obese'}.
        </p>
      )}
      <input type="number" placeholder='weight' className='box weight' onChange={e => setWeight(e.target.value)} />
      <input type="number" placeholder='height' className='box height' onChange={e => setHeight(e.target.value)} />
      <button onClick={calculateBmi} className='calculate-btn'>Calculate BMI</button>
       <button onClick={()=>window.location.reload(true)}>Reload </button>
    </div>
  )
}
export default Bmi