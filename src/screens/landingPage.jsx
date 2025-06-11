import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    checkoutDate: '',
    preferredComm: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem('guestData');
    if (userData) {
      setIsSubmitted(true);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    }
    
    if (!formData.checkoutDate) {
      newErrors.checkoutDate = 'Checkout date is required';
    } else if (new Date(formData.checkoutDate) < new Date()) {
      newErrors.checkoutDate = 'Checkout date cannot be in the past';
    }

    if (!formData.preferredComm) {
    newErrors.preferredComm = 'Please select preferred communication method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      localStorage.setItem('guestData', JSON.stringify(formData));
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="landing-container">
      <div className="form-wrapper">
        <h1>Welcome to Sharlot Homes</h1>
        <p className="subtitle">Please provide your information to continue</p>

        <form onSubmit={handleSubmit} className="guest-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
            />
            {errors.contact && <span className="error">{errors.contact}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="preferredComm">Preferred Communication Method</label>
            <select
                id="preferredComm"
                name="preferredComm"
                value={formData.preferredComm}
                onChange={handleChange}
                required
            >
                <option value="">Select method</option>
                <option value="SMS">SMS</option>
                <option value="Email">Email</option>
                <option value="PhoneCall">Phone Call</option>
            </select>
            {errors.preferredComm && <span className="error">{errors.preferredComm}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="checkoutDate">Checkout Date</label>
            <input
              type="date"
              id="checkoutDate"
              name="checkoutDate"
              value={formData.checkoutDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.checkoutDate && <span className="error">{errors.checkoutDate}</span>}
          </div>

          <div className="privacy-notice">
            <h3>Privacy Notice</h3>
            <p>
              We collect this information to:
              <ul>
                <li>Provide seamless service during your stay</li>
                <li>Respond to your inquiries or assistance needs</li>
                <li>Ensure effective communication for your comfort and safety</li>
              </ul>
            </p>
            <p className="important-notice">
              Please ensure all information provided is accurate as it cannot be modified after submission.
              Incorrect information may prevent us from addressing your inquiries or providing assistance.
            </p>
            <p className="data-deletion">
              Your data will be automatically deleted after your checkout date: {formData.checkoutDate}.
            </p>
          </div>

          <button type="submit" className="submit-btn">
            Continue to Guest Portal
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;