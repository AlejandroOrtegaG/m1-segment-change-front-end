import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../styles/PrechangeForm.css";

const PrechangeForm = () => {
  const location = useLocation();
  const details = location.state;

  const [formData, setFormData] = useState({
    segments: "",
    date: "",
    startTime: "",
    finishTime: "",
    responsible: "",
    electronicts: "",
    mechanicals: "",
    grua: "",
  });

  useEffect(() => {
    if (details) {
      setFormData({
        segments: details.refSegments.value.join(", "),
        date: details.startDate.split(" ")[0],
        startTime: details.startDate.split(" ")[1],
        endTime: details.endDate.split(" ")[1],
        responsible: details.participants.leader,
        electronicts: details.participants.electronicts,
        mechanicals: details.participants.mechanicals,
        grua: details.participants.grua,
      });
    }
  }, [details]);

  const options = {
    responsible: ["Zaida", "Josué", "Alejandro", "Raúl"],
    electronicTechnicians: ["Zaida", "Josué", "Laura", "Santiago"],
    mechanicalTechnicians: ["Alejandro", "Carlos", "María", "Luis"],
    crane: ["Raúl", "Miguel", "Andrés", "Sofía"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className="prechange-form-submit" onSubmit={handleSubmit}>
      <h1>Control de cambio de segmentos</h1>

      <div className="prechange-form">
        <div className="prechange-form-column">
          <div className="prechange-form-input">
            <label>Segmentos a cambiar:</label>
            <input
              type="text"
              name="segments"
              value={formData.segments}
              onChange={handleChange}
            />
          </div>

          <div className="prechange-form-input">
            <label>Fecha:</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="prechange-form-input">
            <label>Hora comienzo:</label>
            <input
              type="text"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
          </div>

          <div className="prechange-form-input">
            <label>Hora fin:</label>
            <input
              type="text"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>

          <div className="prechange-form-input">
            <label>Responsable:</label>
            <select
              name="responsible"
              value={formData.responsible}
              onChange={handleChange}
            >
              <option value="">Seleccionar...</option>
              {options.responsible.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="prechange-form-column">
          <div className="prechange-form-input">
            <label>Técnicos electrónicos:</label>
            <select
              name="electronicTechnicians"
              value={formData.electronicTechnicians}
              onChange={handleChange}
            >
              <option value="">Seleccionar...</option>
              {options.electronicTechnicians.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="prechange-form-input">
            <label>Técnicos mecánicos:</label>
            <select
              name="mechanicalTechnicians"
              value={formData.mechanicalTechnicians}
              onChange={handleChange}
            >
              <option value="">Seleccionar...</option>
              {options.mechanicalTechnicians.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="prechange-form-input">
            <label>Grúa:</label>
            <select name="crane" value={formData.crane} onChange={handleChange}>
              <option value="">Seleccionar...</option>
              {options.crane.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="prechange-form-submit-action">
        <button type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default PrechangeForm;
