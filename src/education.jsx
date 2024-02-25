/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./input";
import Text from "./textarea";

function EducationInfo({ onChange }) {
    return (
        <>
        <h2>Education</h2>
        <div className="inputs">
            <Input title={'school'} onChange={onChange} label={'School'} /> 
                <Input title={'degree'} onChange={onChange} label={'Degree'} />
            <div className="education-times">    
                <Input title={'start'} onChange={onChange} label={'Start & End Date'} /> 
                <Input title={'end'} onChange={onChange} label={''} /> 
            </div>
            <Input title={'city'} onChange={onChange} label={'city'} />
        </div>
        <label htmlFor="">Description</label>
        <Text onChange={onChange}  title={'school_description'}></Text>
        </>
    )
}

export default function Education({ onChange }) {
    const [add, setAdd] = useState([
        <EducationInfo key={0} onChange={onChange} />,
    ])
    const onAdd = () => {
        const newAdd = add.slice();
        newAdd.push(
            <EducationInfo key={newAdd.length} onChange={onChange} />,
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