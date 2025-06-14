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