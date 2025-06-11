const RequestAssistance = ({ onSubmit, loading, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      roomNumber: e.target.roomNumber.value,
      priority: e.target.priority.value,
      description: e.target.reason.value,
    };
    onSubmit(e, formData);
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <label>
        Room Number:
        <select name="roomNumber" required>
          <option>101</option>
          <option>102</option>
          <option>103</option>
        </select>
      </label>

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