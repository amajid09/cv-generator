/* eslint-disable react/prop-types */
import Input from './input'
import './css/personal.css'
export default function PersonalDetails({ onChange}) {
    return (
        <div className="personal-container">
            <div className="wrapper">
                <div className="title-resume">
                    <h2>Untitled</h2>
                </div>
             
            <h1>Personal Details</h1>
                <div className='personal'>
                    <div className="inputs">
                    <Input label={'Wanted Job Title'} title={'title'} onChange = {onChange} /> 
                        <Input label={ 'Upload photo'} title={'photo'} onChange = {onChange}/> 
                        <Input label={'First Name'} title={'first_name'} onChange = {onChange}/> 
                        <Input label={ 'Last Name'} title={'last_name'} onChange = {onChange}/> 
                        <Input label={ 'Email'} title={'email'} onChange = {onChange}/> 
                        <Input label={ 'Phone'} title={'phone'} onChange = {onChange}/> 
                        <Input label={ 'Country'} title={'country'} onChange = {onChange}/> 
                        <Input label={ 'City'} title={'city'} onChange = {onChange}/> 
                </div> 
            </div>
            </div>
        </div>
    )
}


