import "../styles/PrechangeActions.css";
import { useNavigate } from "react-router-dom";

const PrechangeActions = ({ startDates }) => {
  const navigate = useNavigate();

  const handleNewChange = () => {
    navigate("/prechange-form", {});
  };

  return (
    <div className="prechange-actions-wrapper">
      <p className="segment-view-data">Descargar PDF con los últimos datos</p>

      <div className="prechange-actions-buttons">
        <div className="prechange-actions-buttons">
          {startDates.map((date, index) => (
            <div
              key={index}
              className={`prechange-dates prechange-dates-${index}`}
            >
              {formatDay(date.startDate)}: {date.refSegments.value.join(", ")}
            </div>
          ))}
        </div>
        <button className="add-prechange-day" onClick={() => handleNewChange()}>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
      <button className="send-prechange-reminder">Enviar recordatorio</button>
    </div>
  );
};

function formatDay(string) {
  var options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  return new Date(string).toLocaleDateString([], options);
}

export default PrechangeActions;
