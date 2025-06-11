const Feedback = ({ onSubmit, loading, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      roomNumber: e.target.roomNumber.value,
      description: e.target.feedback.value,
    };
    onSubmit(e, formData);
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <label>
        Room Number:
        <select name="roomNumber" required>
          <option value="">Select Room</option>
          <option value="101">101</option>
          <option value="102">102</option>
          <option value="103">103</option>
          <option value="104">104</option>
          <option value="105">105</option>
        </select>
      </label>

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