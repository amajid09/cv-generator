/* eslint-disable react/prop-types */
import './css/Side-Details.css'
export default function SideDetails( { input }) {
    return (
        <div className="side">
            <div className="side-wrapper">
            <Name first={ input['first_name']} last={input['last_name']} />           
            <JobTitle title={ input['title']} />
            <Details email= {input['email']} country= {input['country']} city={ input['city']} phone={input['phone']} />
                <Skills />
            </div>
        </div>
    )
}
function Skills({ skills=['sql', 'java', 'Python', 'OOP', 'Functional Programming', 'React', 'HTML', 'CSS', 'Javascript', 'Git', 'API', 'Spring boot', ] }) {
    return (
        <ul>
            <h2>Skills</h2>
            {skills.map((skill, index) => <li key={index}>{skill}</li> )}
        </ul>
    ) 
}
function Details({ email = 'amajid0981@gmail.com', phone = '0653798403', city = 'Johannesburg', country = 'South Africa' }) {
    return (
        <ul>
            <h2>Details</h2>
            <li>{ email}</li>
            <li>{ phone}</li>
            <li>{ country}</li>
            <li>{ city}</li>
        </ul>
    )
}

function JobTitle({ title = 'Software developer' }) {
    return (
        <ul>
            <li>{title}</li>
            <hr />
        </ul>
    )
}
function Name({ first='Abdimajiid', last='Ali'}) {
    return (
        <p>{first} { last}</p> 
    )
}