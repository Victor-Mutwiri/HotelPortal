const Feedback = ({ onSubmit, loading, error, guestData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      roomNumber: e.target.roomNumber.value,
      description: e.target.feedback.value,
      guestName: guestData?.name,
      guestEmail: guestData?.email,
      guestContact: guestData?.contact,
      preferredComm: guestData?.preferredComm,
    };
    onSubmit(e, formData);
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <div className="guest-info-summary">
        <h3>Guest Information</h3>
        <p>Name: {guestData?.name}</p>
        <p>Email: {guestData?.email}</p>
        <p>Contact: {guestData?.contact}</p>
        <p>Preferred Communication: {guestData?.preferredComm}</p>
      </div>
      {/* <label>
        Room Number:
        <select name="roomNumber" required>
          <option value="">Select Room</option>
          <option value="101">101</option>
          <option value="102">102</option>
          <option value="103">103</option>
          <option value="104">104</option>
          <option value="105">105</option>
        </select>
      </label> */}

      <label>
        Your feedback:
        <textarea 
          name="feedback"
          rows="4"
          placeholder="Please share your experience with us..."
          required
        ></textarea>
      </label>

      <button 
        type="submit" 
        className="btn purple" 
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Feedback'}
      </button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default Feedback;