/* eslint-disable react/prop-types */
import './css/Profile.css'
export default function ProfileInfo( { input , employment}) {
    return (
        <div className="profile-info">
            <Summary summary={ input.summary} />
            <Education school_description={input.school_description} school={input.school } degree={input.degree} start={input.start} end={input.end} city={input.city} />
            <Employment employment={employment} />
        </div>    
    )
}

function Education({ school = "Unisa",
    school_description="",    
    degree = "Computer Science",
    start="Sep 2022", end ="Dec 2025", city ="Johannesburg"}) {
    return (
        <div className="education">
            <h1>Education</h1>
            <p>{ degree }</p>
            <p>{school}, {city}</p>
            <p className='date'>{start} - {end}</p>
            <p>{school_description }</p>
      </div> 
   ) 
}
function Employment({ employment}) {
    return (
        <div className="employment">
            <h1>Employment history</h1>
            <div className="history">
                <h2>{employment.employer}</h2>
                <p>{ employment.job_title }</p>
                <p className='city'>{ employment.job_city }</p>
                <p className='date'>{employment.job_start} - { employment.job_end }</p>
                <p>{ employment.job_description }</p>
            </div>
        </div>
    )
            
}

function Summary({summary}) {
    return (
        <div className="profile">
            <h2>Profile</h2>
            <p>{ summary}</p>
        </div>
    ) 
}
Summary.defaultProps = {
    summary:  'Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place. A creative thinker, adept in software development and working with various data structures. Programming is a term synonymous with change, problem-solving, being creative, and being an innovator. A field that resonates with me so much. Just like any programmer I strive to have a positive impact soon but for now, I want to focus my passion on programming. I am eager to develop my problem-solving skills and break down complex tasks into manageable steps. Along the way, I relish each small victory as I progress on my programming journey. At this moment I have some experience in a couple of programming languages like Python, Java, Bash, JavaScript, and Dart. I have some interest in IOT, machine learning, and AI, and dabbled in the world of web development'
}

Employment.defaultProps = {
    description: 'Assisted with the design of user interface of variety of clients. Implemented most of the design using React and material UI. I worked with clients from various industries ranging from telecommunications, ecommerce, self service apps. Gained extensive experience in developing mobile apps for Android and IOS.',
    title: 'Frontend Developer',
    employer: 'Greeny Ltd',
    start: '02 Sep 20',
    end: '09 Aug 23',
    city: 'Johannesburg'
}