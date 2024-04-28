import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Services() {

    const cardTitle = {
        textDecoration: 'underline',
    };
    return (
        <Fade top distance='10%' duration={1500}>
            <div className='resume' id='resume'>
                <h1 className='resume_title'>Why BTC?</h1>
                <div className='resume_text'>
                    <div className="card-container">    
                        <div className="card">
                        <p style={cardTitle}>Customized Solutions:</p><br /><p>We understand that every business is unique. That's why we take the time to understand your specific needs and develop customized solutions to help you achieve your goals.</p>
                        </div>
                        <div className="card">
                        <p style={cardTitle}>Transparent Communication:</p><br /><p>We believe in transparency and open communication. You'll always know exactly what we're doing and why we're doing it.</p>
                        </div>
                        <div className="card">
                            <p style={cardTitle}>Measurable Results:</p><br /><p>We believe in delivering measurable results that drive real business growth. With our data-driven approach, you'll see a clear return on your investment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
