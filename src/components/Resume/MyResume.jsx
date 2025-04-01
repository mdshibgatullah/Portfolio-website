import React from 'react';
import './Resume.css';

const MyResume = (props) => {
    const { headline, desc, myEducation = [], myExperiences = [], mySkills = [], myAbout = [] } = props.item;

    return (
        <div>
            <div className="resume-details">
                <h1 className="heading">My <span>{headline}</span></h1>
                <p className="desc"> {desc} </p>
            </div>

            {/* Education Section */}
            {myEducation.length > 0 && (
                <div className="edu-container">
                    {myEducation.map((item, index) => (
                        <div key={index} className='box'>
                            <h4>{item.degree}</h4>
                            <p>{item.institution} <br /> {item.dept}</p>
                            <span>{item.result}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Experience Section */}
            {myExperiences.length > 0 && (
                <div className="exp-container">
                    {myExperiences.map((e, index) => (
                        <div key={index} className='box'>
                            <h4>{e.position}</h4>
                            <p>{e.company} <span>({e.duration})</span></p>
                        </div>
                    ))}
                </div>
            )}

            {/* Skills Section */}
            {mySkills.length > 0 && (
                <div className="skills-container">
                        {mySkills.map((skill, index) => (
                             <div className='box'>
                            <h4 key={index}>{skill.name}</h4>
                            <span>{skill.level}</span>
                            </div>
                        ))}
                </div>
            )}

            {/* About Section */}
            {myAbout.length > 0 && (
                <div className="about-container">

                    <ul>
                        {myAbout.map((item, index) => (
                            <li key={index}>{item.fact}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MyResume;
