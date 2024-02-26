/* eslint-disable react/prop-types */
import { useState } from 'react'
import './css/App.css'
import PersonalDetails from './personal-details'
import ProfileInfo from './profile'
import SideDetails from './side-details'
import ProfessionalSummary from './summary'
import Education from './education'
import Employment from './employment'
import DropDown from './dropdown'

export default function App() {
  const [input , setInput] = useState({})
  const [employment, setEmployment] = useState({})
    const onEmployment = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const newEmploymentObj = Object.assign({}, employment); 
        newEmploymentObj[name] = value
        setEmployment(newEmploymentObj)
  }

  const trackInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newInput = Object.assign({}, input)
    newInput[name] = value
    setInput(newInput);
  }

  return (
    <div className='container'>
      <Form onChange={trackInput} onEmployment={onEmployment} />
      <CV input={input}  employment={employment}/>
    </div> 
  )
}
  
function CV({ input , employment}) {

  return (
    <div className='cv-container'>
      <div className="cv-wrapper">
        <SideDetails input={ input} />
        <ProfileInfo input={ input}  employment={employment} />
     </div> 
    </div>
  )
}



function Form({ onChange , onEmployment}) {

  return (
    <div className="form">
      <div className="form-wrapper">
        <PersonalDetails onChange={ onChange} /> 
        <ProfessionalSummary onChange= {onChange} > 
            Write a summary of your professional experience
        </ProfessionalSummary>
        
          <DropDown title={ 'Education'}>
            <Education onChange={onChange} /> 
          </DropDown>
          <DropDown title={ 'Employment History'}>
            <Employment onEmployment={onEmployment }/>
        </DropDown> 
      </div>
      </div>
  );
}
