const FileComplaint = ({ onSubmit, loading, error, guestData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      description: e.target.complaint.value,
      status: 'pending', // Default status for new complaints
      guestName: guestData?.name,
      guestEmail: guestData?.email,
      guestContact: guestData?.contact,
      preferredComm: guestData?.preferredComm,
    };
    onSubmit(e, formData);
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      {/* <div className="guest-info-summary">
        <h3>Guest Information</h3>
        <p>Name: {guestData?.name}</p>
        <p>Email: {guestData?.email}</p>
        <p>Contact: {guestData?.contact}</p>
        <p>Preferred Communication: {guestData?.preferredComm}</p>
      </div> */}
      

      <label>
        Describe your complaint:
        <textarea 
          name="complaint"
          rows="4"
          placeholder="Please provide details about your complaint..."
          required
        ></textarea>
      </label>

      <button 
        type="submit" 
        className="btn red" 
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Complaint'}
      </button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default FileComplaint;