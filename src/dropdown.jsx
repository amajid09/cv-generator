/* eslint-disable react/prop-types */
import { useState } from "react"

export default function DropDown({ title, children }) {
    const [isShowing, setIsShowing] = useState(false); 
    const display = isShowing ? 'block' : 'none';
    const heading = isShowing ? 'none' : 'block';
    const color = isShowing ? 'white': 'rgba(214,214,214,0.3)'
    return (
        <>
            <div style={{backgroundColor: color}} className="dropdown" onClick={() => setIsShowing(!isShowing)}>
                <h2 style={{ display: heading }}>{ title }</h2>
            </div>
            <div className="education-block" style={{display: display}}>{children}</div>
        </>
    )
}