import React, { Component, useEffect,useState } from 'react';
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'

const Theme = () => {
    const [isDark, setIsDark] = useState('theme', true); // default to dark mode

    useEffect(() => {
        isDark ?
            document.documentElement.classList.add('other') :
            document.documentElement.classList.remove('other')
    });

    return (
        <div>
            <main>
                <input id='toggle' name='toggle' type='checkbox' checked={isDark} onChange={event => setIsDark(event.target.checked)} />
                <label htmlFor='toggle' className='switch' id='switch'>
                    {isDark ? <Moon /> : <Sun />}
                </label>
            </main>
        </div>
    )
}

class Toggle extends Component {
    render() {
        return (
            <Theme />
        );
    }
}

export default Toggle;
