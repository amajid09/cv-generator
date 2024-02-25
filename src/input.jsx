/* eslint-disable react/prop-types */
export default function Input({ label, title, onChange}) {
    return (
        <div className="input-label">
            <label>{ label}</label>
            <div className="input">
                <input onChange={onChange} type="text" name={title} />
            </div>
        </div>
    )
}