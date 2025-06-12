const RequestAssistance = ({ onSubmit, loading, error, guestData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      roomNumber: e.target.roomNumber.value,
      priority: e.target.priority.value,
      description: e.target.reason.value,
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
          <option>101</option>
          <option>102</option>
          <option>103</option>
        </select>
      </label> */}

      <label>
        Reason:
        <input type="text" name="reason" required />
      </label>

      <label>
        Priority:
        <select name="priority" required>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>

      <button type="submit" className="btn yellow" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Request'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default RequestAssistance;