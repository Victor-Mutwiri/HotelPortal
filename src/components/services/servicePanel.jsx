import { useState } from "react";
import "../../styles/ServicePanel.css";

const navOptions = [
  "Housekeeping",
  "Order Food",
  "Request Assistance",
  "File Complaint",
  "Feedback",
];

const ServicePanel = () => {
  const [selected, setSelected] = useState("Housekeeping");
  const [housekeepingOther, setHousekeepingOther] = useState(false);

  const renderForm = () => {
    switch (selected) {
      case "Housekeeping":
        return (
          <form className="form-section">
            <label>
              Room Number:
              <select>
                <option>101</option>
                <option>102</option>
                <option>103</option>
              </select>
            </label>

            <label>
              Priority:
              <select>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>

            <label>
              What do you need?
              <select
                onChange={(e) => setHousekeepingOther(e.target.value === "Other")}
              >
                <option>Additional Towel</option>
                <option>Cleaning</option>
                <option>Other</option>
              </select>
            </label>
            {housekeepingOther && (
              <label>
                Please specify:
                <input type="text" placeholder="Describe your request" />
              </label>
            )}
            <button type="submit" className="btn blue">Submit</button>
          </form>
        );

      case "Order Food":
        return (
          <form className="form-section">
            <label>
              Room Number:
              <select>
                <option>101</option>
                <option>102</option>
                <option>103</option>
              </select>
            </label>

            <div className="food-grid">
              {[
                { name: "Burger", price: "$5", image: "🍔" },
                { name: "Pizza", price: "$8", image: "🍕" },
                { name: "Juice", price: "$3", image: "🥤" },
              ].map((item) => (
                <div key={item.name} className="food-card">
                  <div className="food-title">{item.image} {item.name}</div>
                  <div className="food-price">{item.price}</div>
                  <label>
                    Quantity:
                    <input type="number" min="0" />
                  </label>
                </div>
              ))}
            </div>
            <button type="submit" className="btn green">Place Order</button>
          </form>
        );

      case "Request Assistance":
        return (
          <form className="form-section">
            <label>
              Room Number:
              <select>
                <option>101</option>
                <option>102</option>
                <option>103</option>
              </select>
            </label>

            <label>
              Reason:
              <input type="text" />
            </label>

            <label>
              Priority:
              <select>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>

            <button type="submit" className="btn yellow">Submit Request</button>
          </form>
        );

      case "File Complaint":
        return (
          <form className="form-section">
            <label>
              Room Number:
              <select>
                <option>101</option>
                <option>102</option>
              </select>
            </label>
            <label>
              Describe your complaint:
              <textarea rows="4"></textarea>
            </label>
            <button type="submit" className="btn red">Submit Complaint</button>
          </form>
        );

      case "Feedback":
        return (
          <form className="form-section">
            <label>
              Room Number:
              <select>
                <option>101</option>
                <option>102</option>
              </select>
            </label>
            <label>
              Your feedback:
              <textarea rows="4"></textarea>
            </label>
            <button type="submit" className="btn purple">Submit Feedback</button>
          </form>
        );

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
