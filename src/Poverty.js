import React from 'react';
import BarChart from './BarChart';

function Poverty() {
    return (
        <div className="page-container">
            <h2 className="page-title">Poverty and Homelessness: A Call for Justice</h2>
            
            <div className="card">
                <h3>What is Poverty and Homelessness?</h3>
                <p><strong>Poverty</strong> is the lack of resources to meet basic needs, such as food, housing, and healthcare.</p>
                <p><strong>Homelessness</strong> occurs when individuals lack stable and permanent housing due to systemic 
                    issues like unemployment or mental health challenges.</p>
                <blockquote>"<span className="highlight-text">In Canada, over 235,000 people experience homelessness annually.</span>"</blockquote>
                <blockquote><span className="highlight-text">"In Thunder Bay, rising housing costs contribute significantly to homelessness.</span>"</blockquote>
            </div>

            <div className="card">
                <h3>The Scope of the Problem</h3>
                <p><strong>Local Perspective:</strong> "In Thunder Bay, many rely on shelters like Shelter House for temporary housing."</p>
                <p><strong>Global Perspective:</strong> "Globally, over 1.6 billion people lack adequate housing."</p>
                <div className="image-container">
                    <img 
                        src="https://s3.ca-central-1.amazonaws.com/ehq-production-canada/972950b14cb43a11d129040202358f5a96cc1c10/original/1732735483/7521cc366748a9a246a06f00e2556947_Case-Study_Denver_Thumbnail-1024x922.jpg?1732735483" 
                        alt="Housing Infographic" 
                        className="infographic"
                    />
                </div>
            </div>

            <div className="card">
                <h3>Catholic Social Teachings on Poverty</h3>
                <ul>
                    <li><strong>Option for the Poor and Vulnerable:</strong> Prioritizing the needs of the poor and ensuring their dignity.</li>
                    <li><strong>Life and Dignity of the Human Person:</strong> Every individual deserves respect, regardless of their circumstances.</li>
                </ul>
                <p><em>References:</em></p>
                <ul>
                    <li><em>Matthew 25:35-40</em>: “For I was hungry and you gave me food...”</li>
                    <li><em>Catechism of the Catholic Church (CCC 2443-2447)</em>: The responsibility to care for the poor and vulnerable.</li>
                </ul>
            </div>

            <div className="card">
                <h3>Call to Action</h3>
                <ul>
                    <li>Volunteer at local shelters or food banks.</li>
                    <li>Advocate for affordable housing policies.</li>
                    <li>Raise awareness through social media or community events.</li>
                </ul>
                <blockquote>"<span className="highlight-text">The measure of a society is how it treats its most vulnerable members.</span>"</blockquote>
            </div>

            <div className="card bar-chart-card">
                <h3>Global Housing Crisis Data</h3>
                <BarChart 
                    data={[
                        { label: 'Global Housing Crisis', target: 70 }, 
                        { label: 'Urban Slum Population', target: 50 }
                    ]}
                    duration={2000}
                />
            </div>
        </div>
    );
}

export default Poverty;
