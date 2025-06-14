const RequestAssistance = ({ onSubmit, loading, error, guestData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      priority: e.target.priority.value,
      description: e.target.description.value,
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
        Description:
        <input
          type="text"
          name="description"
          placeholder="Please describe what you need assistance with..."
          required />
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