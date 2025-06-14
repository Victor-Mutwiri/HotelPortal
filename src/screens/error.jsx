import { useEffect } from 'react';
import '../styles/error.css';


const Error = () => {
    useEffect(() => {
        // Prevent going back
        window.history.pushState(null, '', window.location.href);
        window.onpopstate = function () {
            window.history.pushState(null, '', window.location.href);
        };
    }, []);

    return (
        <div className="error-container">
            <div className="error-content">
                <div className="error-icon">🔒</div>
                <h1>Access Restricted</h1>
                <div className="error-message">
                    <p>You don't have permission to access this resource.</p>
                </div>
            </div>
        </div>
    );
};

export default Error;