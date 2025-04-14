import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

function CustomCursor() {
    React.useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');

        const moveCursor = (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('.navbar') || e.target.closest('.zoom-text')) {
                cursor.classList.add('hover');
            } else {
                cursor.classList.remove('hover');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return <div className="custom-cursor"></div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <CustomCursor />
    </Router>
  </React.StrictMode>
);
