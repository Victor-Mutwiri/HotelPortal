import { useEffect } from 'react';
import '../styles/goodbye.css';

const Goodbye = () => {
    useEffect(() => {
        // Clear localStorage when component mounts
        localStorage.removeItem('guestData');

        // Prevent going back
        window.history.pushState(null, '', window.location.href);
        window.onpopstate = function () {
            window.history.pushState(null, '', window.location.href);
        };
    }, []);

    return (
        <div className="goodbye-container">
                <h1>Thank You for Choosing SanValencia!</h1>
                <div className="farewell-message">
                    <p>We hope you had a wonderful stay with us.</p>
                    <p>Your comfort and satisfaction have been our priority.</p>
                    <p>Safe travels and we look forward to hosting you again!</p>
                </div>
                <div className="rating-reminder">
                    <p>Don't forget to rate your experience on Airbnb!</p>
                    <p>Your feedback helps us improve our services.</p>
                </div>
        </div>
    );
};

export default Goodbye;