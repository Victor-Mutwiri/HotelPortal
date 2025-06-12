const Feedback = ({ onSubmit, loading, error, guestData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
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