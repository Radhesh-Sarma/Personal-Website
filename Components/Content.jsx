import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='name' aria-label='My name is Radhesh Sarma'>Radhesh Sarma</h1>
                <h2 className='title' aria-label='I am a software engineer'>Software Developer</h2>
                <h2 className='title' aria-label='I am a software engineer'>Student at BITS Pilani Hyderabad Campus</h2>
            </div>
        )
    }
}

export default Content;
