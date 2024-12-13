import React from 'react';

function Home() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Who Have I Become?</h1>
                <p>
                    Hello, I'm <span className="highlight-text">Grant Dale Hortelano</span>. Over the years, my journey in the Catholic education system
                    has helped me grow into a person who values compassion, empathy, and social justice. Today,
                    I aim to make a positive impact by addressing the issue of poverty and homelessness.
                </p>
                <div className="image-container">
                    <img
                        src="https://pbs.twimg.com/profile_images/1752515582665068544/3UsnVSp5_400x400.jpg"
                        alt="Symbolic Tree"
                        className="symbolic-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
