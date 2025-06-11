const FileComplaint = ({ onSubmit, loading, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      roomNumber: e.target.roomNumber.value,
      description: e.target.complaint.value,
      status: 'pending' // Default status for new complaints
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