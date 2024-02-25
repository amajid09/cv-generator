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
  const [input , setInput] = useState({'title': '','first_name': '', 'last_name': '', 'city': '', 'country': '', 'phone': '', 'photo': ''})
  const trackInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newInput = Object.assign({}, input)
    newInput[name] = value
    setInput(newInput);
  }
  return (
    <div className='container'>
      <Form onChange={trackInput} input={input} />
      <CV input={input} />
    </div> 
  )
}
  
function CV({ input }) {

  return (
    <div className='cv-container'>
      <div className="cv-wrapper">
        <SideDetails input={ input} />
        <ProfileInfo input={ input} />
     </div> 
    </div>
  )
}



function Form({ onChange }) {
  const [add, setAdd] = useState([]);
  
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
            <Employment onChange={onChange} />
        </DropDown> 
      </div>
      </div>
  );
}
