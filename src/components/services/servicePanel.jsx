import { useState, useEffect } from "react";
import "../../styles/ServicePanel.css";
import { supabase } from "../../config/supabaseClient";
import Housekeeping from "./serviceTypes/Housekeeping";
import RequestAssistance from "./serviceTypes/RequestAssistance";
import FileComplaint from "./serviceTypes/FileComplaint";
import Feedback from "./serviceTypes/Feedback";

const navOptions = [
  "Housekeeping",
  "Request Assistance",
  "File Complaint",
  "Feedback",
];

const ServicePanel = () => {
  const [selected, setSelected] = useState("Housekeeping");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [guestData, setGuestData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('guestData');
    if (storedData) {
      setGuestData(JSON.parse(storedData));
    }
  }, []);

  // Simulate a form submission
  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Convert service name to table name format
      const tableName = selected.toLowerCase().replace(' ', '_');
      
      // Create base insert data
      const insertData = {
        description: formData.description,
        created_at: new Date(),
        guestName: formData.guestName,
        guestEmail: formData.guestEmail,
        guestContact: formData.guestContact,
        preferredComm: formData.preferredComm
      };

      // Add additional fields based on service type
      if (tableName !== 'feedback') {
        insertData.status = 'pending';
        if (tableName !== 'file_complaint') {
          insertData.priority = formData.priority;
        }
      }

      const { data, error: supabaseError } = await supabase
        .from(tableName)
        .insert([insertData]);

      if (supabaseError) throw supabaseError;

      alert(' Submitted successfully!');
      e.target.reset();
    } catch (err) {
      setError('Failed to submit request. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    const commonProps = {
      onSubmit: handleSubmit,
      loading,
      error,
      guestData
    };

    switch (selected) {
      case "Housekeeping":
        return <Housekeeping {...commonProps}/>

      case "Request Assistance":
        return <RequestAssistance {...commonProps}/>;

      case "File Complaint":
        return <FileComplaint {...commonProps}/>;

      case "Feedback":
        return <Feedback {...commonProps}/>;

      default:
        return <p className="placeholder">Select a service above</p>;
    }
  };

  return (
    <div className="service-panel">
      <div className="nav-menu">
        {navOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`nav-button ${selected === option ? "active" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="form-container">{renderForm()}</div>
    </div>
  );
};

export default ServicePanel;
