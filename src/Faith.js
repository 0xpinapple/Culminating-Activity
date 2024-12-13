import React from 'react';

function Faith() {
    return (
        <div className="page-container">
            <h2 className="page-title">Ontario Catholic Graduate Expectations</h2>

            <div className="card">
                <h3>Achievements</h3>
                <p><strong>Caring Family Member:</strong> "I’ve shown care and compassion by being thoughtful and kind to my family and friends, always trying to support them whenever they need help."</p>
                <p><strong>Collaborative Contributor:</strong> "Participating in group projects <span className="highlight-lie">*lies* </span> has taught me teamwork and respect for 
                    different perspectives."</p>
            </div>

            <div className="card">
                <h3>Challenges</h3>
                <p>
                    "Being an Effective Communicator has been a challenge. Speaking up in group settings and sharing ideas 
                    has always been difficult for me, but I am working on improving my confidence through practice and feedback." <span className="highlight-true"> - True </span>
                </p>
            </div>
        </div>
    );
}

export default Faith;
