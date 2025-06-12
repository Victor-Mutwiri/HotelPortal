import { useState } from 'react';

const Housekeeping = ({ onSubmit, loading, error, guestData }) => {
  const [housekeepingOther, setHousekeepingOther] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      roomNumber: e.target.roomNumber.value,
      priority: e.target.priority.value,
      description: housekeepingOther ? e.target.description.value : e.target.service.value,
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
        Priority:
        <select name="priority" required>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>

      <label>
        What do you need?
        <select
          name="service"
          onChange={(e) => setHousekeepingOther(e.target.value === "Other")}
          required
        >
          <option>Additional Towel</option>
          <option>Cleaning</option>
          <option>Other</option>
        </select>
      </label>
      {housekeepingOther && (
        <label>
          Please specify:
          <input 
            type="text"
            name="description"
            placeholder="Describe your request"
            required={housekeepingOther}
          />
        </label>
      )}
      <button type="submit" className="btn blue" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default Housekeeping;