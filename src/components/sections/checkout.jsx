import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/checkout.css';

const EarlyCheckout = () => {
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();
    const guestData = JSON.parse(localStorage.getItem('guestData'));
    const checkoutDate = new Date(guestData?.checkoutDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleCheckout = () => {
        setShowConfirm(true);
    };

    const confirmCheckout = () => {
        localStorage.removeItem('guestData');
        navigate('/goodbye');
    };

    return (
        <div className="checkout-container">
            <button className="checkout-btn" onClick={handleCheckout}>
                <span className="checkout-icon">🔑</span>
                <span className="checkout-text">Early Checkout</span>
            </button>

            {showConfirm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Confirm Early Checkout</h2>
                        <p>Your scheduled checkout date is:</p>
                        <p className="checkout-date">{checkoutDate}</p>
                        <p className="warning">
                            Are you sure you want to check out early? 
                            This action cannot be undone.
                        </p>
                        <div className="modal-buttons">
                            <button 
                                className="confirm-btn"
                                onClick={confirmCheckout}
                            >
                                Confirm Checkout
                            </button>
                            <button 
                                className="cancel-btn"
                                onClick={() => setShowConfirm(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EarlyCheckout;