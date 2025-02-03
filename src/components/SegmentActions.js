import "../styles/SegmentActions.css";
import { useNavigate } from "react-router-dom";

const SegmentActions = ({ segment }) => {
  const navigate = useNavigate();

  const handleViewHistory = () => {
    navigate("/detailed-view-history", {});
  };

  return (
    <div className="segment-actions-section">
      <h1>S{segment.number}</h1>

      <div className="actions-wrapper">
        <div className="actions">
          <h2>Espejo</h2>
          <div className="action-buttons-wrapper">
            <button className="action-button-type-1">{segment.mirror}</button>
          </div>

          <h2>Sensores de borde</h2>
          <div className="action-buttons-wrapper">
            {segment.edgeSensors.map((edgeSensor, index) => (
              <button className="action-button-type-2" key={index}>
                {edgeSensor.name}
              </button>
            ))}
          </div>

          <h2>Posicionadores</h2>
          <div className="action-buttons-wrapper">
            {segment.positioners.map((positioner, index) => (
              <button className="action-button-type-1" key={index}>
                {positioner.name}
              </button>
            ))}
          </div>

          <h2>ACP</h2>
          <div className="action-buttons-wrapper">
            <button className="action-button-type-2">
              {segment.acp.number}
            </button>
          </div>

          <h2>Caja nodal</h2>
          <div className="action-buttons-wrapper">
            <button className="action-button-type-1">
              {segment.refNodeBox.value}
            </button>
          </div>
        </div>
        <div className="final-actions-wrapper">
          <button
            className="final-action-button-type-1"
            onClick={handleViewHistory}
          >
            Ver historial
          </button>
          <button className="final-action-button-type-2">Añadir entrada</button>
        </div>
      </div>
      <p className="edge-sensor-recovery">Recuperación de sensores de borde</p>
    </div>
  );
};

export default SegmentActions;
