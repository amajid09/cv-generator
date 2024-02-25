/* eslint-disable react/prop-types */
import './css/Summary.css'
import Text from './textarea'

export default function ProfessionalSummary({ children, onChange}) {
    return (
        <div className="summary">
            <h1>Professional Summary</h1>
            <p className='text-title'>
                Write a 2-4 short & energetic sentences to interest the reader! Mention your role, experience, & most importantly your biggest achievements, best qualities and skills.
            </p>
            <Text onChange={onChange} title={'summary'}> {children} </Text>
        </div>
    )
}