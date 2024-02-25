/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./input";
import Text from "./textarea";

export default function EmploymentInfo({ onChange }) {
    return (
        <>
            <h2>Employment history</h2>
        <div className="inputs">
            <Input title={'job_title'} onChange={onChange} label={'Job title'} /> 
                <Input title={'employer'} onChange={onChange} label={'Employer'} />
            <div className="education-times">    
                <Input title={'job_start'} onChange={onChange} label={'Start & End Date'} /> 
                <Input title={'job_end'} onChange={onChange} label={''} /> 
            </div>
            <Input title={'job_city'} onChange={onChange} label={'city'} />
        </div>
        <label htmlFor="">Description</label>
        <Text onChange={onChange}  title={'job_description'}></Text>
        </>
    )
}

function Employment( { onChange }) {
    const [add, setAdd] = useState([
        <EmploymentInfo key={0} onChange={onChange} />,
    ])
    const onAdd = () => {
        const newAdd = add.slice();
        newAdd.push(
            <EmploymentInfo key={newAdd.length} onChange={onChange} />,
        )
        setAdd(newAdd);
        console.log('in the add state')
    }
    console.log('here')
    return (
        <>
            {add.map(el=> el)}
            <button onClick={() => onAdd()} className="add-more">+</button>
        </>
    )
}