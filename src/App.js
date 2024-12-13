import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Home';
import Poverty from './Poverty';
import Faith from './Faith';
import References from './References';
import './App.css';
import Contact from './Contact';


function AnimatedRoutes() {
    const location = useLocation();

    // Define a variants object for our transition
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: -20
        }
    };

    const pageTransition = {
        duration: 0.4, // Adjust time as desired
        ease: 'easeOut' // Smooth easing
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
                style={{ position: 'relative' }}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/poverty" element={<Poverty />} />
                    <Route path="/faith" element={<Faith />} />
                    <Route path="/references" element={<References />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <header className="main-header">
                    <div className="logo">G. Hortelano</div>
                    <nav className="main-nav">
                        <Link to="/">My Journey</Link>
                        <Link to="/poverty">Understanding Poverty</Link>
                        <Link to="/faith">Living Out My Faith</Link>
                        <Link to="/references">References</Link>
                        <Link to="/contact">Contact Me</Link>
                    </nav>
                </header>

                <main className="main-content">
                    <AnimatedRoutes />
                </main>

                <footer className="footer">
                    <p>© 2024 Grant Dale Hortelano. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
