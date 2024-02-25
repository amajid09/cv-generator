/* eslint-disable react/prop-types */
export default function Text({ onChange ,title}) {
    return (
        <>
        <textarea name={title} className="textarea" onChange={ onChange } /> 
        </>
    )
}