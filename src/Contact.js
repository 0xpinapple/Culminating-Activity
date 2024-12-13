import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);

    const ratingEmojis = {
        1: '😔',
        2: '😕',
        3: '🙂',
        4: '😃',
        5: '🤩'
    };

    const handleRatingClick = (star) => {
        setRating(star);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent("Feedback on Your Website");
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nRating: ${rating} Stars\nMessage:\n${message}`
        );
        const mailtoLink = `mailto:grant.keg390@passinbox.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink; 
    };

    return (
        <div className="page-container">
            <h2 className="page-title">Contact Me</h2>
            <div className="card">
                <h3>Rate My Website</h3>
                <div className="rating-wrapper">
                    <div className="rating-section">
                        <div className="star-rating">
                            {[1,2,3,4,5].map(star => (
                                <span 
                                    key={star} 
                                    className={`star ${star <= rating ? 'filled' : ''}`} 
                                    onClick={() => handleRatingClick(star)}
                                    role="button"
                                    aria-label={`Rate ${star} stars`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        {rating > 0 && (
                            <div className="rating-emoji">
                                {ratingEmojis[rating]}
                            </div>
                        )}
                    </div>
                    {rating > 0 && (
                        <div className="rating-gif">
                            <iframe 
                                src="https://giphy.com/embed/xhGE4p9ygdQibhjO5G" 
                                width="100" 
                                height="100" 
                                frameBorder="0" 
                                className="giphy-embed" 
                                allowFullScreen
                                title="Meme GIF"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>

            <div className="card">
                <h3>Get in Touch</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            rows="5" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send Email</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
