import React, { Component } from 'react';
import { GitHub, LinkedIn, Resume, Email } from '../icons'

const DATA = [
    {
        href: "https://github.com/Radhesh-Sarma/",
        aria: "Visit my GitHub profile",
        icon: <GitHub />,
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/radhesh-sarma/",
        aria: "Visit my LinkedIn profile",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "https://drive.google.com/file/d/1QwmmPa31MaaEUo8bWiXYkK0G55gdrzfr/view?usp=sharing",
        aria: "Visit Google Drive to view and download my resume",
        icon: <Resume />,
        label: "Resume",
    },
    {
        href: "mailto:radheshsarma29@gmail.com",
        aria: "Send me an email",
        icon: <Email />,
        label: "Email",
    }
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;
